(ns function.main
  (:require ;[ring.adapter.jetty :refer [run-jetty]]
            [function.handler :refer [app]]
            [shadow.cljs.devtools.server :as server]
            [org.httpkit.server :as http]
            [shadow.cljs.devtools.api :as shadow])
  (:import [org.eclipse.jetty.util.component LifeCycle$Listener]
           [java.io File])
  (:gen-class))

(defn add-lifecycle-listener
  "Creates a file /tmp/.lock when Jetty is started.
  This is associated with a healthcheck. The existence of the /tmp/.lock file
  indicates a successful healthcheck and that the container running Jetty is
  ready to be exposed to traffic."
  [server]
  (.addLifeCycleListener server
                         (reify LifeCycle$Listener
                           (lifeCycleFailure [_this _event _cause])

                           (lifeCycleStarted [_this _event]
                             (.createNewFile (java.io.File. "/tmp/.lock")))

                           (lifeCycleStarting [_this _event])

                           (lifeCycleStopped [_this _event])

                           (lifeCycleStopping [_this _event])))
  server)

(defn -main [& args]
  (println "hello world")
  (http/run-server app {:port 4000}))
                            ;:configurator add-lifecycle-listener}))

(defn dev []
      (-main)
      (server/stop!)
      (server/start!)
      (shadow/watch :app))

