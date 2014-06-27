(ns lt.plugins.reminisce
  (:require [lt.objs.cache :as cache]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.object :as object]
            [lt.objs.tabs :as tabs]
            [lt.objs.opener :as opener])
  (:require-macros [lt.macros :refer [behavior defui]]))

;; Util

(defn raise-result [obj k & args]
  (when-let [f (-> @obj :listeners :get-state first object/->behavior :reaction)]
    (apply f obj args)))

;; Tabs

(defn ->state [obj] (raise-result obj :get-state))

(defmulti restore! :type)

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
                      (doseq [tab (cache/fetch ::tabs)]
                        (restore! tab))))

;; Editors (tab implementation)

(defn scroll-pos [ed]
  (-> ed editor/->cm-ed .getScrollInfo (#(do [(.-left %) (.-top %)]))))

(behavior ::editor-state
          :triggers #{:get-state}
          :reaction (fn [editor]
                      (let [path (-> @editor :info :path)]
                        {:type :editor
                         :file path
                         :content (when (or path (:dirty @editor))
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
    (apply editor/scroll-to ed scroll)))

(behavior ::trigger-cache-tabs
          :triggers #{:active :save :move}
          :debounce 1000
          :reaction (fn [editor]
                      (cache-tabs)))
