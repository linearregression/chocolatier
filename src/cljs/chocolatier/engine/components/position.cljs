(ns chocolatier.engine.components.position)


(defrecord Position [map-x map-y screen-x screen-y])

(defn mk-position-state
  [map-x map-y screen-x screen-y]
  (->Position map-x map-y screen-x screen-y))

(defn position
  "Calculates the entities position on the map and on the screen. Listens
   for position changes in the format of [:position-change <entity-id>] with a
   message with keys for :offset-x and :offset-y"
  [entity-id component-state {:keys [inbox]}]
  ;; If there are no messages then no-op
  (if (seq inbox)
    (let [{:keys [map-x map-y screen-x screen-y]} component-state
          [offset-x offset-y] (reduce
                               (fn [[x y] {msg :msg}]
                                 [(+ x (:offset-x msg))
                                  (+ y (:offset-y msg))])
                               [0 0]
                               inbox)]
      ;; TODO translate map coords into screen coords
      {:map-x (- screen-x offset-x)
       :map-y (- screen-y offset-y)
       :screen-x (- screen-x offset-x)
       :screen-y (- screen-y offset-y)})
    component-state))
