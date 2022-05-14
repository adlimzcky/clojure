(ns coba.views
  (:require
   [re-frame.core :as re-frame]
   [coba.events :as events]
   [coba.subs :as subs]))


(def buat-list ["10" "20" "30" "40" "50"
                "60" "70" "80" "90" "100"])

(defn matpel-list []
  (let [matpel @(re-frame/subscribe [::subs/matpel])]
    [:div
     [:h1 "Daftar List"]
     [:ul 
      (map (fn [{:keys [nilai-type matpel-nama]}]
             [:li {:key matpel-nama} (str matpel-nama " (" nilai-type ")")]) matpel)]]
    ))

(defn text-input [id label]
  (let [value (re-frame/subscribe [::subs/form id])]
    [:div.field
     [:label.label label]
     [:div.control
      [:input.input {:value @value
                     :on-change #(re-frame/dispatch [::events/update-form id (-> % .-target .-value)])
                     :type "text" :placeholder "Text Input"}]]])
  )

(defn select-input [id label options]
  (let [value (re-frame/subscribe [::subs/form id])]
    [:div.field
     [:label.label label]
     [:div.control
      [:div.select
       [:select {:value @value :on-change #(re-frame/dispatch [::events/update-form id (-> % .-target .-value)])}
        [:option {:value ""} "silahkan isi"]
        (map (fn [o] [:option {:key o :value o} o]) options)
        ]]]]
    ))

(defn main-panel []
  (let [is-valid? @(re-frame/subscribe [::subs/form-is-valid? [:matpel-nama :nilai-type]])]
    [:div.section
     [matpel-list]
     [text-input :matpel-nama "mata pelajaran"]
     [select-input :nilai-type "nilai akhir" buat-list]
     [:button.button.is-primary {:disabled (not is-valid?)
                                 :on-click #(re-frame/dispatch [::events/save-form])}"Save" ]]))
