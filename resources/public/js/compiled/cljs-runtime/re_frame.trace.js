goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__24045){
var map__24046 = p__24045;
var map__24046__$1 = cljs.core.__destructure_map(map__24046);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24046__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24046__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24046__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24046__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4253__auto__ = child_of;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__24047_24074 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__24048_24075 = null;
var count__24049_24076 = (0);
var i__24050_24077 = (0);
while(true){
if((i__24050_24077 < count__24049_24076)){
var vec__24061_24078 = chunk__24048_24075.cljs$core$IIndexed$_nth$arity$2(null,i__24050_24077);
var k_24079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24061_24078,(0),null);
var cb_24080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24061_24078,(1),null);
try{var G__24065_24081 = cljs.core.deref(re_frame.trace.traces);
(cb_24080.cljs$core$IFn$_invoke$arity$1 ? cb_24080.cljs$core$IFn$_invoke$arity$1(G__24065_24081) : cb_24080.call(null,G__24065_24081));
}catch (e24064){var e_24087 = e24064;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_24079,"while storing",cljs.core.deref(re_frame.trace.traces),e_24087], 0));
}

var G__24088 = seq__24047_24074;
var G__24089 = chunk__24048_24075;
var G__24090 = count__24049_24076;
var G__24091 = (i__24050_24077 + (1));
seq__24047_24074 = G__24088;
chunk__24048_24075 = G__24089;
count__24049_24076 = G__24090;
i__24050_24077 = G__24091;
continue;
} else {
var temp__5753__auto___24092 = cljs.core.seq(seq__24047_24074);
if(temp__5753__auto___24092){
var seq__24047_24095__$1 = temp__5753__auto___24092;
if(cljs.core.chunked_seq_QMARK_(seq__24047_24095__$1)){
var c__4679__auto___24096 = cljs.core.chunk_first(seq__24047_24095__$1);
var G__24097 = cljs.core.chunk_rest(seq__24047_24095__$1);
var G__24098 = c__4679__auto___24096;
var G__24099 = cljs.core.count(c__4679__auto___24096);
var G__24100 = (0);
seq__24047_24074 = G__24097;
chunk__24048_24075 = G__24098;
count__24049_24076 = G__24099;
i__24050_24077 = G__24100;
continue;
} else {
var vec__24066_24101 = cljs.core.first(seq__24047_24095__$1);
var k_24102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24066_24101,(0),null);
var cb_24103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24066_24101,(1),null);
try{var G__24070_24104 = cljs.core.deref(re_frame.trace.traces);
(cb_24103.cljs$core$IFn$_invoke$arity$1 ? cb_24103.cljs$core$IFn$_invoke$arity$1(G__24070_24104) : cb_24103.call(null,G__24070_24104));
}catch (e24069){var e_24109 = e24069;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_24102,"while storing",cljs.core.deref(re_frame.trace.traces),e_24109], 0));
}

var G__24110 = cljs.core.next(seq__24047_24095__$1);
var G__24111 = null;
var G__24112 = (0);
var G__24113 = (0);
seq__24047_24074 = G__24110;
chunk__24048_24075 = G__24111;
count__24049_24076 = G__24112;
i__24050_24077 = G__24113;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
