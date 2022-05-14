goog.provide('coba.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("coba.subs","name","coba.subs/name",-1536935725),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("coba.subs","form","coba.subs/form",1488080547),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__41639){
var vec__41640 = p__41639;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41640,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41640,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),id], null),"");
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("coba.subs","form-is-valid?","coba.subs/form-is-valid?",937501113),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__41644){
var vec__41645 = p__41644;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41645,(0),null);
var form_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41645,(1),null);
return cljs.core.every_QMARK_((function (p1__41643_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),p1__41643_SHARP_], null));
}),form_ids);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("coba.subs","matpel","coba.subs/matpel",32924014),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"matpel","matpel",1383471324),cljs.core.PersistentVector.EMPTY);
})], 0));

//# sourceMappingURL=coba.subs.js.map
