(ns handler.core)

(defn handler [req]
  {:status 200
   :body "Hello, Clojuredsadsadsadsadsadsa.2"
   :headers {}})

(def function
  (-> handler))
