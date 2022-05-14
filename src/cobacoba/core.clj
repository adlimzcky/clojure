(ns cobacoba.core
  (:require [io.pedestal.http :as http]
            [io.pedestal.http.route :as route]
            [hiccup2.core :as hic]
            [coba.views :as view]))


(defn main
  [req]
  {:status 200
   :html   [:html
            [:body
             [:h2 "Silahkan isi : "]
             [:form {:method "post"}
              [:input {:type "text"
                       :placeholder "Isi disini"}]
              ]
             [:button {:type :submit} "Save"]]]})




(def html-response
  {:name  ::html-response
   :leave (fn [{:keys [response]
                :as   ctx}]
            (if (contains? response :html)
              (let [html-body (->> response
                                   :html
                                   (hic/html {:mode :html})
                                   (str "\n"))]
                (assoc ctx :response (-> response
                                         (assoc :body html-body)
                                         (assoc-in [:headers "Content-Type"] "text/html"))))
              ctx))})



(def routes
  #{["/" :get [html-response main] :route-name :main]})

(def service-map
  {::http/routes routes
   ::http/type   :jetty
   ::http/port   9000})

(defn start []
  (http/start (http/create-server service-map)))

(defonce server (atom nil))

(defn start-dev []
  (reset! server
          (http/start (http/create-server
                        (assoc service-map
                          ::http/join? false)))))

(defn stop-dev []
  (http/stop @server))

(defn restart []
  (stop-dev)
  (start-dev))