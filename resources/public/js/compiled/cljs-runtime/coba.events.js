goog.provide('coba.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("coba.events","initialize-db","coba.events/initialize-db",-252834284),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__38415__auto__ = coba.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__38415__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__38415__auto__;
}catch (e41617){var e = e41617;
throw e;
}}):(function (_,___$1){
return coba.db.default_db;
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("coba.events","update-form","coba.events/update-form",1229886154),(function (db,p__41618){
var vec__41619 = p__41618;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41619,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41619,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41619,(2),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),id], null),val);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("coba.events","save-form","coba.events/save-form",-320871914),(function (db){
var form_data = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(db);
var matpel = cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"matpel","matpel",1383471324),cljs.core.PersistentVector.EMPTY);
var updated_matpel = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(matpel,form_data);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"matpel","matpel",1383471324),updated_matpel),new cljs.core.Keyword(null,"form","form",-1624062471));
}));

//# sourceMappingURL=coba.events.js.map
