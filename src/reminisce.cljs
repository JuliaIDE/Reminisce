(ns lt.plugins.reminisce
  (:require [lt.objs.cache :as cache]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.app :as app]
            [lt.objs.opener :as opener]
            [lt.objs.sidebar :as sidebar]
            [lt.objs.sidebar.workspace :as workspace]
            [lt.objs.statusbar :as statusbar]
            [lt.objs.console :as console])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; Tab Restore

(defn ->state [obj] (object/raise-reduce obj :get-state))

(defmulti restore! :type)

; This needs to change – walk over actual tab objects / tabsets
(defn cache-tabs []
  (let [state (->> (pool/get-all) (map ->state) (filter identity))]
    (cache/store! ::tabs state)))

(defn wait-until [cond callback]
  (if (cond)
    (callback)
    (js/setTimeout #(wait-until cond callback) 100)))

(behavior ::restore-tabs
          :triggers #{:post-init}
          :reaction (fn [this]
                      (when (zero? (app/window-number))
                        (doseq [tab (cache/fetch ::tabs)]
                          (restore! tab)))))

;; Undo close

(def queue-length 10)

(def state-cache (atom {})) ; Editors are destroyed immediately, so we must cache their state

(defn queue! [obj]
  (let [queue (cache/fetch ::queue)]
    (cache/store! ::queue
                  (concat (if (> (count queue) queue-length)
                            (rest queue)
                            queue)
                          [obj]))))

(defn unqueue! []
  (let [queue (cache/fetch ::queue)]
    (when (not-empty queue)
      (let [item (last queue)]
        (cache/store! ::queue (drop-last 1 queue))
        item))))

(behavior ::queue
          :triggers #{:close}
          :reaction (fn [this]
                      (when-let [state (@state-cache this)]
                        (queue! state))))

(cmd/command {:command :reminisce.reopen-tab
              :desc "Tabs: Reopen the last closed tab"
              :exec (fn []
                      (when-let [state (unqueue!)]
                        (tabs/active! (restore! state))))})

;; Implementation for Editors

(defn scroll-pos [ed]
  (-> ed editor/->cm-ed .getScrollInfo (#(do [(.-left %) (.-top %)]))))

(behavior ::editor-state
          :triggers #{:get-state}
          :reaction (fn [editor]
                      (let [path (-> @editor :info :path)]
                        {:type :editor
                         :file path
                         :content (when (or (not path) (:dirty @editor))
                                    (editor/->val editor))
                         :dirty   (@editor :dirty)
                         :info    (@editor :info)
                         :scroll  (scroll-pos editor)
                         :cursor  (editor/->cursor editor)})))

(defn editor-for-file [file]
  (->> (lt.objs.editor.pool/get-all) (filter #(-> @% :info :path (= file))) first))

(defmethod restore! :editor [{:keys [file content dirty info tags scroll cursor]}]
  (when-let [ed (if file
                  (do
                    (cmd/exec! :open-path file)
                    (editor-for-file file))
                  (let [ed (pool/create info)]
                    (object/add-tags ed [:editor.transient])
                    (object/raise opener/opener :open ed)
                    (tabs/add! ed)
                    ed))]
    (when (and dirty content)
      (editor/set-val ed content))
    (.setCursor (editor/->cm-ed ed) (clj->js cursor))
    (apply editor/scroll-to ed scroll)
    ed))

(behavior ::trigger-cache-tabs
          :triggers #{:active :save :move}
          :debounce 1000
          :reaction (fn [editor]
                      (cache-tabs)))

(behavior ::cache-state
          :triggers #{:active :save :move}
          :debounce 1000
          :reaction (fn [this]
                      (swap! state-cache assoc this (->state this))))

;; Workspace

(defn workspace-open? []
  (and (= (:active @sidebar/sidebar) workspace/sidebar-workspace)
       (:open @sidebar/sidebar)))

(defn open-workspace [open]
  (when (or (and open (not (workspace-open?)))
            (and (not open) (workspace-open?)))
    (cmd/exec! :workspace.show)))

(behavior ::cache-workspace
          :triggers #{:toggle}
          :reaction (fn []
                      (cache/store! ::workspace (workspace-open?))))

(behavior ::restore-workspace
          :triggers #{:post-init}
          :reaction (fn []
                      (when (zero? (app/window-number))
                        (open-workspace (cache/fetch ::workspace)))))

;; Console

(behavior ::cache-console-open
          :triggers #{:show!}
          :reaction (fn [bar item]
                      (when (= item console/console)
                        (cache/store! ::console true))))

(behavior ::cache-console-close
          :triggers #{:hide!}
          :reaction (fn [bar item]
                      (when (= item console/console)
                        (cache/store! ::console false))))

(behavior ::restore-console
          :triggers #{:post-init}
          :reaction (fn []
                      (when (zero? (app/window-number))
                        (if (cache/fetch ::console)
                          (cmd/exec! :console.show)
                          (cmd/exec! :console.hide)))))

