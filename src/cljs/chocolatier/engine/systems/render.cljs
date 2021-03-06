(ns chocolatier.engine.systems.render
  "System for rendering entities"
  (:require [chocolatier.utils.logging :as log]
            [chocolatier.engine.pixi :as pixi]))


(defn render-system
  "Renders all the changes to sprites and other Pixi objects"
  [state]
  (let [{:keys [renderer stage]} (-> state :game :rendering-engine)]
    (pixi/render! renderer stage)
    state))
