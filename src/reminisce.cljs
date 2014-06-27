(ns lt.plugins.reminisce
  (:require [lt.objs.cache :as cache]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior defui]]))

(defn ->state [editor]
  (let [path (-> @editor :info :path)]
    {:file path}))

(defn <-state [{:keys [file]}]
  (cmd/exec! :open-path file))

(defn update []
  (let [state (map ->state (pool/get-all))]
    (cache/store! ::config state)))

(defn refresh []
  (doseq [state (cache/fetch ::config)]
    (<-state state)))

(behavior ::cache
          :triggers #{:active :save :move}
          :debounce 100
          :reaction (fn [editor]
                      (update)))

(behavior ::init
          :triggers #{:post-init}
          :reaction (fn [this]
                      (refresh)))
