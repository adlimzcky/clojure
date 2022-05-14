goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24341 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24342 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24342);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___24460 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___24460)){
var new_db_24461 = temp__5753__auto___24460;
var fexpr__24345_24462 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24345_24462.cljs$core$IFn$_invoke$arity$1 ? fexpr__24345_24462.cljs$core$IFn$_invoke$arity$1(new_db_24461) : fexpr__24345_24462.call(null,new_db_24461));
} else {
}

var seq__24346 = cljs.core.seq(effects_without_db);
var chunk__24347 = null;
var count__24348 = (0);
var i__24349 = (0);
while(true){
if((i__24349 < count__24348)){
var vec__24367 = chunk__24347.cljs$core$IIndexed$_nth$arity$2(null,i__24349);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24367,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24367,(1),null);
var temp__5751__auto___24463 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___24463)){
var effect_fn_24464 = temp__5751__auto___24463;
(effect_fn_24464.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24464.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24464.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24465 = seq__24346;
var G__24466 = chunk__24347;
var G__24467 = count__24348;
var G__24468 = (i__24349 + (1));
seq__24346 = G__24465;
chunk__24347 = G__24466;
count__24348 = G__24467;
i__24349 = G__24468;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24346);
if(temp__5753__auto__){
var seq__24346__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24346__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__24346__$1);
var G__24469 = cljs.core.chunk_rest(seq__24346__$1);
var G__24470 = c__4679__auto__;
var G__24471 = cljs.core.count(c__4679__auto__);
var G__24472 = (0);
seq__24346 = G__24469;
chunk__24347 = G__24470;
count__24348 = G__24471;
i__24349 = G__24472;
continue;
} else {
var vec__24370 = cljs.core.first(seq__24346__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24370,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24370,(1),null);
var temp__5751__auto___24473 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___24473)){
var effect_fn_24474 = temp__5751__auto___24473;
(effect_fn_24474.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24474.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24474.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24475 = cljs.core.next(seq__24346__$1);
var G__24476 = null;
var G__24477 = (0);
var G__24478 = (0);
seq__24346 = G__24475;
chunk__24347 = G__24476;
count__24348 = G__24477;
i__24349 = G__24478;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__24025__auto___24479 = re_frame.interop.now();
var duration__24026__auto___24480 = (end__24025__auto___24479 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__24026__auto___24480,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__24025__auto___24479);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24341);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___24481 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___24481)){
var new_db_24482 = temp__5753__auto___24481;
var fexpr__24373_24483 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24373_24483.cljs$core$IFn$_invoke$arity$1 ? fexpr__24373_24483.cljs$core$IFn$_invoke$arity$1(new_db_24482) : fexpr__24373_24483.call(null,new_db_24482));
} else {
}

var seq__24374 = cljs.core.seq(effects_without_db);
var chunk__24375 = null;
var count__24376 = (0);
var i__24377 = (0);
while(true){
if((i__24377 < count__24376)){
var vec__24387 = chunk__24375.cljs$core$IIndexed$_nth$arity$2(null,i__24377);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24387,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24387,(1),null);
var temp__5751__auto___24484 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___24484)){
var effect_fn_24485 = temp__5751__auto___24484;
(effect_fn_24485.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24485.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24485.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24486 = seq__24374;
var G__24487 = chunk__24375;
var G__24488 = count__24376;
var G__24489 = (i__24377 + (1));
seq__24374 = G__24486;
chunk__24375 = G__24487;
count__24376 = G__24488;
i__24377 = G__24489;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24374);
if(temp__5753__auto__){
var seq__24374__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24374__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__24374__$1);
var G__24490 = cljs.core.chunk_rest(seq__24374__$1);
var G__24491 = c__4679__auto__;
var G__24492 = cljs.core.count(c__4679__auto__);
var G__24493 = (0);
seq__24374 = G__24490;
chunk__24375 = G__24491;
count__24376 = G__24492;
i__24377 = G__24493;
continue;
} else {
var vec__24391 = cljs.core.first(seq__24374__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24391,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24391,(1),null);
var temp__5751__auto___24494 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___24494)){
var effect_fn_24495 = temp__5751__auto___24494;
(effect_fn_24495.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24495.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24495.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24496 = cljs.core.next(seq__24374__$1);
var G__24497 = null;
var G__24498 = (0);
var G__24499 = (0);
seq__24374 = G__24496;
chunk__24375 = G__24497;
count__24376 = G__24498;
i__24377 = G__24499;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24395){
var map__24396 = p__24395;
var map__24396__$1 = cljs.core.__destructure_map(map__24396);
var effect = map__24396__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24396__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24396__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__24398 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24399 = null;
var count__24400 = (0);
var i__24401 = (0);
while(true){
if((i__24401 < count__24400)){
var effect = chunk__24399.cljs$core$IIndexed$_nth$arity$2(null,i__24401);
re_frame.fx.dispatch_later(effect);


var G__24500 = seq__24398;
var G__24501 = chunk__24399;
var G__24502 = count__24400;
var G__24503 = (i__24401 + (1));
seq__24398 = G__24500;
chunk__24399 = G__24501;
count__24400 = G__24502;
i__24401 = G__24503;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24398);
if(temp__5753__auto__){
var seq__24398__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24398__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__24398__$1);
var G__24504 = cljs.core.chunk_rest(seq__24398__$1);
var G__24505 = c__4679__auto__;
var G__24506 = cljs.core.count(c__4679__auto__);
var G__24507 = (0);
seq__24398 = G__24504;
chunk__24399 = G__24505;
count__24400 = G__24506;
i__24401 = G__24507;
continue;
} else {
var effect = cljs.core.first(seq__24398__$1);
re_frame.fx.dispatch_later(effect);


var G__24508 = cljs.core.next(seq__24398__$1);
var G__24509 = null;
var G__24510 = (0);
var G__24511 = (0);
seq__24398 = G__24508;
chunk__24399 = G__24509;
count__24400 = G__24510;
i__24401 = G__24511;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__24405 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24406 = null;
var count__24407 = (0);
var i__24408 = (0);
while(true){
if((i__24408 < count__24407)){
var vec__24428 = chunk__24406.cljs$core$IIndexed$_nth$arity$2(null,i__24408);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24428,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24428,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___24512 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___24512)){
var effect_fn_24513 = temp__5751__auto___24512;
(effect_fn_24513.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24513.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24513.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24514 = seq__24405;
var G__24515 = chunk__24406;
var G__24516 = count__24407;
var G__24517 = (i__24408 + (1));
seq__24405 = G__24514;
chunk__24406 = G__24515;
count__24407 = G__24516;
i__24408 = G__24517;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24405);
if(temp__5753__auto__){
var seq__24405__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24405__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__24405__$1);
var G__24518 = cljs.core.chunk_rest(seq__24405__$1);
var G__24519 = c__4679__auto__;
var G__24520 = cljs.core.count(c__4679__auto__);
var G__24521 = (0);
seq__24405 = G__24518;
chunk__24406 = G__24519;
count__24407 = G__24520;
i__24408 = G__24521;
continue;
} else {
var vec__24432 = cljs.core.first(seq__24405__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24432,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24432,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___24522 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___24522)){
var effect_fn_24523 = temp__5751__auto___24522;
(effect_fn_24523.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24523.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24523.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24524 = cljs.core.next(seq__24405__$1);
var G__24525 = null;
var G__24526 = (0);
var G__24527 = (0);
seq__24405 = G__24524;
chunk__24406 = G__24525;
count__24407 = G__24526;
i__24408 = G__24527;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__24435 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24436 = null;
var count__24437 = (0);
var i__24438 = (0);
while(true){
if((i__24438 < count__24437)){
var event = chunk__24436.cljs$core$IIndexed$_nth$arity$2(null,i__24438);
re_frame.router.dispatch(event);


var G__24530 = seq__24435;
var G__24531 = chunk__24436;
var G__24532 = count__24437;
var G__24533 = (i__24438 + (1));
seq__24435 = G__24530;
chunk__24436 = G__24531;
count__24437 = G__24532;
i__24438 = G__24533;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24435);
if(temp__5753__auto__){
var seq__24435__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24435__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__24435__$1);
var G__24534 = cljs.core.chunk_rest(seq__24435__$1);
var G__24535 = c__4679__auto__;
var G__24536 = cljs.core.count(c__4679__auto__);
var G__24537 = (0);
seq__24435 = G__24534;
chunk__24436 = G__24535;
count__24437 = G__24536;
i__24438 = G__24537;
continue;
} else {
var event = cljs.core.first(seq__24435__$1);
re_frame.router.dispatch(event);


var G__24539 = cljs.core.next(seq__24435__$1);
var G__24540 = null;
var G__24541 = (0);
var G__24542 = (0);
seq__24435 = G__24539;
chunk__24436 = G__24540;
count__24437 = G__24541;
i__24438 = G__24542;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__24444 = cljs.core.seq(value);
var chunk__24445 = null;
var count__24446 = (0);
var i__24447 = (0);
while(true){
if((i__24447 < count__24446)){
var event = chunk__24445.cljs$core$IIndexed$_nth$arity$2(null,i__24447);
clear_event(event);


var G__24544 = seq__24444;
var G__24545 = chunk__24445;
var G__24546 = count__24446;
var G__24547 = (i__24447 + (1));
seq__24444 = G__24544;
chunk__24445 = G__24545;
count__24446 = G__24546;
i__24447 = G__24547;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__24444);
if(temp__5753__auto__){
var seq__24444__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24444__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__24444__$1);
var G__24548 = cljs.core.chunk_rest(seq__24444__$1);
var G__24549 = c__4679__auto__;
var G__24550 = cljs.core.count(c__4679__auto__);
var G__24551 = (0);
seq__24444 = G__24548;
chunk__24445 = G__24549;
count__24446 = G__24550;
i__24447 = G__24551;
continue;
} else {
var event = cljs.core.first(seq__24444__$1);
clear_event(event);


var G__24552 = cljs.core.next(seq__24444__$1);
var G__24553 = null;
var G__24554 = (0);
var G__24555 = (0);
seq__24444 = G__24552;
chunk__24445 = G__24553;
count__24446 = G__24554;
i__24447 = G__24555;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
