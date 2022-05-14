goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__20984 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__20985 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__20985);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___21094 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21094)){
var new_db_21099 = temp__5753__auto___21094;
var fexpr__20988_21100 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__20988_21100.cljs$core$IFn$_invoke$arity$1 ? fexpr__20988_21100.cljs$core$IFn$_invoke$arity$1(new_db_21099) : fexpr__20988_21100.call(null,new_db_21099));
} else {
}

var seq__20989 = cljs.core.seq(effects_without_db);
var chunk__20990 = null;
var count__20991 = (0);
var i__20992 = (0);
while(true){
if((i__20992 < count__20991)){
var vec__21006 = chunk__20990.cljs$core$IIndexed$_nth$arity$2(null,i__20992);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21006,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21006,(1),null);
var temp__5751__auto___21101 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21101)){
var effect_fn_21102 = temp__5751__auto___21101;
(effect_fn_21102.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21102.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21102.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21103 = seq__20989;
var G__21104 = chunk__20990;
var G__21105 = count__20991;
var G__21106 = (i__20992 + (1));
seq__20989 = G__21103;
chunk__20990 = G__21104;
count__20991 = G__21105;
i__20992 = G__21106;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__20989);
if(temp__5753__auto__){
var seq__20989__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20989__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__20989__$1);
var G__21107 = cljs.core.chunk_rest(seq__20989__$1);
var G__21108 = c__4679__auto__;
var G__21109 = cljs.core.count(c__4679__auto__);
var G__21110 = (0);
seq__20989 = G__21107;
chunk__20990 = G__21108;
count__20991 = G__21109;
i__20992 = G__21110;
continue;
} else {
var vec__21009 = cljs.core.first(seq__20989__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21009,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21009,(1),null);
var temp__5751__auto___21111 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21111)){
var effect_fn_21112 = temp__5751__auto___21111;
(effect_fn_21112.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21112.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21112.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21113 = cljs.core.next(seq__20989__$1);
var G__21114 = null;
var G__21115 = (0);
var G__21116 = (0);
seq__20989 = G__21113;
chunk__20990 = G__21114;
count__20991 = G__21115;
i__20992 = G__21116;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__20710__auto___21117 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__20711__auto___21118 = (end__20710__auto___21117 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__20711__auto___21118,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__20710__auto___21117);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__20984);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___21119 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___21119)){
var new_db_21120 = temp__5753__auto___21119;
var fexpr__21013_21121 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__21013_21121.cljs$core$IFn$_invoke$arity$1 ? fexpr__21013_21121.cljs$core$IFn$_invoke$arity$1(new_db_21120) : fexpr__21013_21121.call(null,new_db_21120));
} else {
}

var seq__21015 = cljs.core.seq(effects_without_db);
var chunk__21016 = null;
var count__21017 = (0);
var i__21018 = (0);
while(true){
if((i__21018 < count__21017)){
var vec__21025 = chunk__21016.cljs$core$IIndexed$_nth$arity$2(null,i__21018);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21025,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21025,(1),null);
var temp__5751__auto___21122 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21122)){
var effect_fn_21123 = temp__5751__auto___21122;
(effect_fn_21123.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21123.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21123.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21124 = seq__21015;
var G__21125 = chunk__21016;
var G__21126 = count__21017;
var G__21127 = (i__21018 + (1));
seq__21015 = G__21124;
chunk__21016 = G__21125;
count__21017 = G__21126;
i__21018 = G__21127;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21015);
if(temp__5753__auto__){
var seq__21015__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21015__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__21015__$1);
var G__21130 = cljs.core.chunk_rest(seq__21015__$1);
var G__21131 = c__4679__auto__;
var G__21132 = cljs.core.count(c__4679__auto__);
var G__21133 = (0);
seq__21015 = G__21130;
chunk__21016 = G__21131;
count__21017 = G__21132;
i__21018 = G__21133;
continue;
} else {
var vec__21030 = cljs.core.first(seq__21015__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21030,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21030,(1),null);
var temp__5751__auto___21134 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21134)){
var effect_fn_21135 = temp__5751__auto___21134;
(effect_fn_21135.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21135.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21135.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__21137 = cljs.core.next(seq__21015__$1);
var G__21138 = null;
var G__21139 = (0);
var G__21140 = (0);
seq__21015 = G__21137;
chunk__21016 = G__21138;
count__21017 = G__21139;
i__21018 = G__21140;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__21036){
var map__21037 = p__21036;
var map__21037__$1 = cljs.core.__destructure_map(map__21037);
var effect = map__21037__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21037__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21037__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__21039 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21040 = null;
var count__21041 = (0);
var i__21042 = (0);
while(true){
if((i__21042 < count__21041)){
var effect = chunk__21040.cljs$core$IIndexed$_nth$arity$2(null,i__21042);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__21141 = seq__21039;
var G__21142 = chunk__21040;
var G__21143 = count__21041;
var G__21144 = (i__21042 + (1));
seq__21039 = G__21141;
chunk__21040 = G__21142;
count__21041 = G__21143;
i__21042 = G__21144;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21039);
if(temp__5753__auto__){
var seq__21039__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21039__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__21039__$1);
var G__21145 = cljs.core.chunk_rest(seq__21039__$1);
var G__21146 = c__4679__auto__;
var G__21147 = cljs.core.count(c__4679__auto__);
var G__21148 = (0);
seq__21039 = G__21145;
chunk__21040 = G__21146;
count__21041 = G__21147;
i__21042 = G__21148;
continue;
} else {
var effect = cljs.core.first(seq__21039__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__21149 = cljs.core.next(seq__21039__$1);
var G__21150 = null;
var G__21151 = (0);
var G__21152 = (0);
seq__21039 = G__21149;
chunk__21040 = G__21150;
count__21041 = G__21151;
i__21042 = G__21152;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__21047 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__21048 = null;
var count__21049 = (0);
var i__21050 = (0);
while(true){
if((i__21050 < count__21049)){
var vec__21058 = chunk__21048.cljs$core$IIndexed$_nth$arity$2(null,i__21050);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21058,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21058,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21153 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21153)){
var effect_fn_21154 = temp__5751__auto___21153;
(effect_fn_21154.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21154.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21154.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21155 = seq__21047;
var G__21156 = chunk__21048;
var G__21157 = count__21049;
var G__21158 = (i__21050 + (1));
seq__21047 = G__21155;
chunk__21048 = G__21156;
count__21049 = G__21157;
i__21050 = G__21158;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21047);
if(temp__5753__auto__){
var seq__21047__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21047__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__21047__$1);
var G__21159 = cljs.core.chunk_rest(seq__21047__$1);
var G__21160 = c__4679__auto__;
var G__21161 = cljs.core.count(c__4679__auto__);
var G__21162 = (0);
seq__21047 = G__21159;
chunk__21048 = G__21160;
count__21049 = G__21161;
i__21050 = G__21162;
continue;
} else {
var vec__21061 = cljs.core.first(seq__21047__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21061,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21061,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___21163 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___21163)){
var effect_fn_21164 = temp__5751__auto___21163;
(effect_fn_21164.cljs$core$IFn$_invoke$arity$1 ? effect_fn_21164.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_21164.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__21165 = cljs.core.next(seq__21047__$1);
var G__21166 = null;
var G__21167 = (0);
var G__21168 = (0);
seq__21047 = G__21165;
chunk__21048 = G__21166;
count__21049 = G__21167;
i__21050 = G__21168;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__21064 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__21065 = null;
var count__21066 = (0);
var i__21067 = (0);
while(true){
if((i__21067 < count__21066)){
var event = chunk__21065.cljs$core$IIndexed$_nth$arity$2(null,i__21067);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__21170 = seq__21064;
var G__21171 = chunk__21065;
var G__21172 = count__21066;
var G__21173 = (i__21067 + (1));
seq__21064 = G__21170;
chunk__21065 = G__21171;
count__21066 = G__21172;
i__21067 = G__21173;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21064);
if(temp__5753__auto__){
var seq__21064__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21064__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__21064__$1);
var G__21175 = cljs.core.chunk_rest(seq__21064__$1);
var G__21176 = c__4679__auto__;
var G__21177 = cljs.core.count(c__4679__auto__);
var G__21178 = (0);
seq__21064 = G__21175;
chunk__21065 = G__21176;
count__21066 = G__21177;
i__21067 = G__21178;
continue;
} else {
var event = cljs.core.first(seq__21064__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__21179 = cljs.core.next(seq__21064__$1);
var G__21180 = null;
var G__21181 = (0);
var G__21182 = (0);
seq__21064 = G__21179;
chunk__21065 = G__21180;
count__21066 = G__21181;
i__21067 = G__21182;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__21076 = cljs.core.seq(value);
var chunk__21077 = null;
var count__21078 = (0);
var i__21079 = (0);
while(true){
if((i__21079 < count__21078)){
var event = chunk__21077.cljs$core$IIndexed$_nth$arity$2(null,i__21079);
clear_event(event);


var G__21185 = seq__21076;
var G__21186 = chunk__21077;
var G__21187 = count__21078;
var G__21188 = (i__21079 + (1));
seq__21076 = G__21185;
chunk__21077 = G__21186;
count__21078 = G__21187;
i__21079 = G__21188;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__21076);
if(temp__5753__auto__){
var seq__21076__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21076__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__21076__$1);
var G__21189 = cljs.core.chunk_rest(seq__21076__$1);
var G__21190 = c__4679__auto__;
var G__21191 = cljs.core.count(c__4679__auto__);
var G__21192 = (0);
seq__21076 = G__21189;
chunk__21077 = G__21190;
count__21078 = G__21191;
i__21079 = G__21192;
continue;
} else {
var event = cljs.core.first(seq__21076__$1);
clear_event(event);


var G__21194 = cljs.core.next(seq__21076__$1);
var G__21195 = null;
var G__21196 = (0);
var G__21197 = (0);
seq__21076 = G__21194;
chunk__21077 = G__21195;
count__21078 = G__21196;
i__21079 = G__21197;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
