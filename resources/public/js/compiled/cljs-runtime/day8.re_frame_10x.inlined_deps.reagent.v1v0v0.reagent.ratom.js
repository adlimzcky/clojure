goog.provide('day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom');
goog.scope(function(){
  day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.goog$module$goog$object = goog.module.get('goog.object');
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.debug !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.debug = false;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.generation !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.generation = (0);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._running !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.reactive_QMARK_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$reactive_QMARK_(){
return (!((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null)));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.running = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$running(){
return (cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._running));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_len = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_eq = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$arr_eq(x,y){
var len = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_len(x);
var and__4251__auto__ = (len === day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_len(y));
if(and__4251__auto__){
var i = (0);
while(true){
var or__4253__auto__ = (i === len);
if(or__4253__auto__){
return or__4253__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__19879 = (i + (1));
i = G__19879;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__4251__auto__;
}
});
/**
 * When f is executed, if (f) derefs any ratoms, they are then added to 'obj.captured'(*ratom-context*).
 * 
 *   See function notify-deref-watcher! to know how *ratom-context* is updated
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.in_context = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR__orig_val__19814 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__19815 = obj;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__19815);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__19814);
}});
/**
 * Returns `(in-context f r)`.  Calls `_update-watching` on r with any
 *   `deref`ed atoms captured during `in-context`, if any differ from the
 *   `watching` field of r.  Clears the `dirty?` flag on r.
 * 
 *   Inside '_update-watching' along with adding the ratoms in 'r.watching' of reaction,
 *   the reaction is also added to the list of watches on each ratoms f derefs.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$deref_capture(f,r){
(r.captured = null);

(r.ratomGeneration = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.generation = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.generation + (1))));


var res = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.in_context(r,f);
var c = r.captured;
(r.dirty_QMARK_ = false);

if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.arr_eq(c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
/**
 * Add `derefed` to the `captured` field of `*ratom-context*`.
 * 
 *   See also `in-context`
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_deref_watcher_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5757__auto__ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto__ == null)){
return null;
} else {
var r = temp__5757__auto__;
var c = r.captured;
if((c == null)){
return (r.captured = [derefed]);
} else {
return c.push(derefed);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.check_watches = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$check_watches(old,new$){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count(new$) - cljs.core.count(old)));
} else {
}

return new$;
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
(this$.watches = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.check_watches(w,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(w,key,f)));

return (this$.watchesArr = null);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$remove_w(this$,key){
var w = this$.watches;
(this$.watches = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.check_watches(w,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(w,key)));

return (this$.watchesArr = null);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?(this$.watchesArr = cljs.core.reduce_kv((function (p1__19816_SHARP_,p2__19817_SHARP_,p3__19818_SHARP_){
var G__19819 = p1__19816_SHARP_;
G__19819.push(p2__19817_SHARP_);

G__19819.push(p3__19818_SHARP_);

return G__19819;
}),[],this$.watches)):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_19880 = (a[i]);
var f_19881 = (a[(i + (1))]);
(f_19881.cljs$core$IFn$_invoke$arity$4 ? f_19881.cljs$core$IFn$_invoke$arity$4(k_19880,this$,old,new$) : f_19881.call(null,k_19880,this$,old,new$));

var G__19882 = ((2) + i);
i = G__19882;
continue;
} else {
return null;
}
break;
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$pr_atom(a,writer,opts,s,v){
cljs.core._write(writer,["#object[day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer((function (){var _STAR_ratom_context_STAR__orig_val__19820 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__19821 = null;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__19821);

try{return v;
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__19820);
}})(),writer,opts);

return cljs.core._write(writer,"]");
});
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue = null;
}
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_enqueue = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$rea_enqueue(r){
if((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue == null)){
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue = []);

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.schedule();
} else {
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue.push(r);
});

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"RAtom",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null)], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(new_value) : self__.validator.call(null,new_value)))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
(self__.state = new_value);

if((self__.watches == null)){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(a__$1,old_value,new_value);
}

return new_value;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w(this$__$1,key);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/RAtom");

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/RAtom");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/RAtom.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RAtom = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$atom(var_args){
var G__19825 = arguments.length;
switch (G__19825) {
case 1:
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___19885 = arguments.length;
var i__4865__auto___19886 = (0);
while(true){
if((i__4865__auto___19886 < len__4864__auto___19885)){
args_arr__4885__auto__.push((arguments[i__4865__auto___19886]));

var G__19887 = (i__4865__auto___19886 + (1));
i__4865__auto___19886 = G__19887;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4886__auto__);

}
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RAtom(x,null,null,null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__19826){
var map__19827 = p__19826;
var map__19827__$1 = cljs.core.__destructure_map(map__19827);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19827__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19827__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RAtom(x,meta,validator,null);
}));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$lang$applyTo = (function (seq19823){
var G__19824 = cljs.core.first(seq19823);
var seq19823__$1 = cljs.core.next(seq19823);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19824,seq19823__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.atom.cljs$lang$maxFixedArity = (1));

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = o.reagReactionCache;
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = (m__$1.cljs$core$IFn$_invoke$arity$2 ? m__$1.cljs$core$IFn$_invoke$arity$2(k,null) : m__$1.call(null,k,null));
if((!((r == null)))){
return cljs.core._deref(r);
} else {
if((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var r__$1 = (function (){var G__19828 = f;
var G__19829 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__19830 = (function (x){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._running,cljs.core.dec);
} else {
}

var __19889 = o.reagReactionCache;
var __19890__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(__19889,k);
(o.reagReactionCache = __19890__$1);

if((!((obj == null)))){
(obj.reaction = null);
} else {
}

if((!((destroy == null)))){
return (destroy.cljs$core$IFn$_invoke$arity$1 ? destroy.cljs$core$IFn$_invoke$arity$1(x) : destroy.call(null,x));
} else {
return null;
}
});
return (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__19828,G__19829,G__19830) : day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,G__19828,G__19829,G__19830));
})();
var v = cljs.core._deref(r__$1);
(o.reagReactionCache = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,r__$1));

if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._running,cljs.core.inc);
} else {
}

if((!((obj == null)))){
(obj.reaction = r__$1);
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5755__auto__ = self__.reaction;
if((temp__5755__auto__ == null)){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.f,self__.args);
}),self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5755__auto__;
return cljs.core._deref(r);
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)))));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"Track",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"f","f",-1597136552),self__.f], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Track");

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Track");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Track.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Track = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_Track(f,args,reaction){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track(f,args,reaction));
});

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$make_track(f,args){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Track(f,args,null));
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$make_track_BANG_(f,args){
var t = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track(f,args);
var r = (function (){var G__19831 = (function (){
return t.cljs$core$IDeref$_deref$arity$1(null);
});
var G__19832 = new cljs.core.Keyword(null,"auto-run","auto-run",1958400437);
var G__19833 = true;
return (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__19831,G__19832,G__19833) : day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.call(null,G__19831,G__19832,G__19833));
})();
cljs.core.deref(r);

return r;
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$track(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19891 = arguments.length;
var i__4865__auto___19892 = (0);
while(true){
if((i__4865__auto___19892 < len__4864__auto___19891)){
args__4870__auto__.push((arguments[i__4865__auto___19892]));

var G__19893 = (i__4865__auto___19892 + (1));
i__4865__auto___19892 = G__19893;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track.cljs$lang$applyTo = (function (seq19834){
var G__19835 = cljs.core.first(seq19834);
var seq19834__$1 = cljs.core.next(seq19834);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19835,seq19834__$1);
}));

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$track_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19895 = arguments.length;
var i__4865__auto___19896 = (0);
while(true){
if((i__4865__auto___19896 < len__4864__auto___19895)){
args__4870__auto__.push((arguments[i__4865__auto___19896]));

var G__19897 = (i__4865__auto___19896 + (1));
i__4865__auto___19896 = G__19897;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_track_BANG_(f,args);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq19836){
var G__19837 = cljs.core.first(seq19836);
var seq19836__$1 = cljs.core.next(seq19836);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19837,seq19836__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__19838 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__19839 = null;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__19839);

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__19838);
}}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
(self__.state = newstate);

if((!((self__.watches == null)))){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$,oldstate,newstate);
} else {
return null;
}
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"RCursor",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"path","path",-188191168),self__.path], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom)))));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_(self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
(self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(self__.path,new_value) : self__.ratom.call(null,self__.path,new_value));
}

return new_value;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__19841 = a__$1._peek();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19841) : f.call(null,G__19841));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__19842 = a__$1._peek();
var G__19843 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19842,G__19843) : f.call(null,G__19842,G__19843));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__19844 = a__$1._peek();
var G__19845 = x;
var G__19846 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__19844,G__19845,G__19846) : f.call(null,G__19844,G__19845,G__19846));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a__$1._peek(),x,y,more));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w(this$__$1,key);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5755__auto__ = self__.reaction;
if((temp__5755__auto__ == null)){
var f = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom)))?(function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.ratom),self__.path);
}):(function (){
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(self__.path) : self__.ratom.call(null,self__.path));
}));
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction(f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5755__auto__;
return cljs.core._deref(r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/RCursor");

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/RCursor");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/RCursor.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RCursor = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.cursor = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$cursor(src,path){
if((function (){var or__4253__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom,src));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return ((cljs.core.ifn_QMARK_(src)) && ((!(cljs.core.vector_QMARK_(src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",["src must be a reactive atom or a function, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))," while attempting to get path: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))].join(''),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_RCursor(src,path,null,null,null);
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.with_let_destroy = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$with_let_destroy(v){
var temp__5757__auto__ = v.destroy;
if((temp__5757__auto__ == null)){
return null;
} else {
var f = temp__5757__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.with_let_values = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$with_let_values(key){
var temp__5755__auto__ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5755__auto__ == null)){
return [];
} else {
var c = temp__5755__auto__;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.cached_reaction(cljs.core.array,c,key,null,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IDisposable = function(){};

var day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$dyn_19904 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$dyn_19904(this$);
}
});

var day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$dyn_19906 = (function (this$,f){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4551__auto__.call(null,this$,f));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_on_dispose_BANG_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4549__auto__.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IDisposable.add-on-dispose!",this$);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_on_dispose_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$add_on_dispose_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
return day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$dyn_19906(this$,f);
}
});


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IRunnable = function(){};

var day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$dyn_19907 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.run[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.run["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.run = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$arity$1(this$);
} else {
return day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$dyn_19907(this$);
}
});

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.handle_reaction_change = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IRunnable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.IDisposable}
*/
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__19849 = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__19850 = null;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__19850);

try{return this$.cljs$core$IDeref$_deref$arity$1(null);
}finally {(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__19849);
}}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
(self__.dirty_QMARK_ = true);

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_enqueue(this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return (self__.auto_run.cljs$core$IFn$_invoke$arity$1 ? self__.auto_run.cljs$core$IFn$_invoke$arity$1(this$) : self__.auto_run.call(null,this$));
}
}
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set(derefed);
var old = cljs.core.set(self__.watching);
(self__.watching = derefed);

var seq__19851_19908 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new$,old));
var chunk__19852_19909 = null;
var count__19853_19910 = (0);
var i__19854_19911 = (0);
while(true){
if((i__19854_19911 < count__19853_19910)){
var w_19912 = chunk__19852_19909.cljs$core$IIndexed$_nth$arity$2(null,i__19854_19911);
cljs.core._add_watch(w_19912,this$,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.handle_reaction_change);


var G__19913 = seq__19851_19908;
var G__19914 = chunk__19852_19909;
var G__19915 = count__19853_19910;
var G__19916 = (i__19854_19911 + (1));
seq__19851_19908 = G__19913;
chunk__19852_19909 = G__19914;
count__19853_19910 = G__19915;
i__19854_19911 = G__19916;
continue;
} else {
var temp__5753__auto___19917 = cljs.core.seq(seq__19851_19908);
if(temp__5753__auto___19917){
var seq__19851_19918__$1 = temp__5753__auto___19917;
if(cljs.core.chunked_seq_QMARK_(seq__19851_19918__$1)){
var c__4679__auto___19919 = cljs.core.chunk_first(seq__19851_19918__$1);
var G__19920 = cljs.core.chunk_rest(seq__19851_19918__$1);
var G__19921 = c__4679__auto___19919;
var G__19922 = cljs.core.count(c__4679__auto___19919);
var G__19923 = (0);
seq__19851_19908 = G__19920;
chunk__19852_19909 = G__19921;
count__19853_19910 = G__19922;
i__19854_19911 = G__19923;
continue;
} else {
var w_19924 = cljs.core.first(seq__19851_19918__$1);
cljs.core._add_watch(w_19924,this$,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.handle_reaction_change);


var G__19925 = cljs.core.next(seq__19851_19918__$1);
var G__19926 = null;
var G__19927 = (0);
var G__19928 = (0);
seq__19851_19908 = G__19925;
chunk__19852_19909 = G__19926;
count__19853_19910 = G__19927;
i__19854_19911 = G__19928;
continue;
}
} else {
}
}
break;
}

var seq__19855 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__19856 = null;
var count__19857 = (0);
var i__19858 = (0);
while(true){
if((i__19858 < count__19857)){
var w = chunk__19856.cljs$core$IIndexed$_nth$arity$2(null,i__19858);
cljs.core._remove_watch(w,this$);


var G__19929 = seq__19855;
var G__19930 = chunk__19856;
var G__19931 = count__19857;
var G__19932 = (i__19858 + (1));
seq__19855 = G__19929;
chunk__19856 = G__19930;
count__19857 = G__19931;
i__19858 = G__19932;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__19855);
if(temp__5753__auto__){
var seq__19855__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19855__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__19855__$1);
var G__19934 = cljs.core.chunk_rest(seq__19855__$1);
var G__19935 = c__4679__auto__;
var G__19936 = cljs.core.count(c__4679__auto__);
var G__19937 = (0);
seq__19855 = G__19934;
chunk__19856 = G__19935;
count__19857 = G__19936;
i__19858 = G__19937;
continue;
} else {
var w = cljs.core.first(seq__19855__$1);
cljs.core._remove_watch(w,this$);


var G__19938 = cljs.core.next(seq__19855__$1);
var G__19939 = null;
var G__19940 = (0);
var G__19941 = (0);
seq__19855 = G__19938;
chunk__19856 = G__19939;
count__19857 = G__19940;
i__19858 = G__19941;
continue;
}
} else {
return null;
}
}
break;
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && ((!((self__.watching == null)))))){
return this$._run(true);
} else {
return null;
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{(self__.caught = null);

return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture(f__$1,this$);
}catch (e19859){var e = e19859;
(self__.state = e);

(self__.caught = e);

return (self__.dirty_QMARK_ = false);
}}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture(self__.f,this$));
if(self__.nocache_QMARK_){
} else {
(self__.state = res);

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate,res)))){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$,oldstate,res);
}
}

return res;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype._set_opts = (function (p__19860){
var self__ = this;
var map__19861 = p__19860;
var map__19861__$1 = cljs.core.__destructure_map(map__19861);
var auto_run__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19861__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19861__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19861__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19861__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if((!((auto_run__$1 == null)))){
(this$.auto_run = auto_run__$1);
} else {
}

if((!((on_set == null)))){
(this$.on_set = on_set);
} else {
}

if((!((on_dispose == null)))){
(this$.on_dispose = on_dispose);
} else {
}

if((!((no_cache == null)))){
return (this$.nocache_QMARK_ = no_cache);
} else {
return null;
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"Reaction",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null)], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
(self__.watching = null);

(self__.state = null);

(self__.auto_run = null);

(self__.dirty_QMARK_ = true);

var seq__19862_19942 = cljs.core.seq(cljs.core.set(wg));
var chunk__19863_19943 = null;
var count__19864_19944 = (0);
var i__19865_19945 = (0);
while(true){
if((i__19865_19945 < count__19864_19944)){
var w_19946 = chunk__19863_19943.cljs$core$IIndexed$_nth$arity$2(null,i__19865_19945);
cljs.core._remove_watch(w_19946,this$__$1);


var G__19947 = seq__19862_19942;
var G__19948 = chunk__19863_19943;
var G__19949 = count__19864_19944;
var G__19950 = (i__19865_19945 + (1));
seq__19862_19942 = G__19947;
chunk__19863_19943 = G__19948;
count__19864_19944 = G__19949;
i__19865_19945 = G__19950;
continue;
} else {
var temp__5753__auto___19951 = cljs.core.seq(seq__19862_19942);
if(temp__5753__auto___19951){
var seq__19862_19952__$1 = temp__5753__auto___19951;
if(cljs.core.chunked_seq_QMARK_(seq__19862_19952__$1)){
var c__4679__auto___19953 = cljs.core.chunk_first(seq__19862_19952__$1);
var G__19954 = cljs.core.chunk_rest(seq__19862_19952__$1);
var G__19955 = c__4679__auto___19953;
var G__19956 = cljs.core.count(c__4679__auto___19953);
var G__19957 = (0);
seq__19862_19942 = G__19954;
chunk__19863_19943 = G__19955;
count__19864_19944 = G__19956;
i__19865_19945 = G__19957;
continue;
} else {
var w_19958 = cljs.core.first(seq__19862_19952__$1);
cljs.core._remove_watch(w_19958,this$__$1);


var G__19959 = cljs.core.next(seq__19862_19952__$1);
var G__19960 = null;
var G__19961 = (0);
var G__19962 = (0);
seq__19862_19942 = G__19959;
chunk__19863_19943 = G__19960;
count__19864_19944 = G__19961;
i__19865_19945 = G__19962;
continue;
}
} else {
}
}
break;
}

if((!((this$__$1.on_dispose == null)))){
this$__$1.on_dispose(s);
} else {
}

var temp__5757__auto__ = this$__$1.on_dispose_arr;
if((temp__5757__auto__ == null)){
return null;
} else {
var a = temp__5757__auto__;
var n__4741__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4741__auto__)){
var fexpr__19866_19963 = (a[i]);
(fexpr__19866_19963.cljs$core$IFn$_invoke$arity$1 ? fexpr__19866_19963.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__19866_19963.call(null,this$__$1));

var G__19964 = (i + (1));
i = G__19964;
continue;
} else {
return null;
}
break;
}
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5755__auto__ = this$__$1.on_dispose_arr;
if((temp__5755__auto__ == null)){
return (this$__$1.on_dispose_arr = [f__$1]);
} else {
var a = temp__5755__auto__;
return a.push(f__$1);
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_(a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
(self__.state = newval);

a__$1.on_set(oldval,newval);

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(a__$1,oldval,newval);

return newval;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__19867 = a__$1._peek_at();
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__19867) : f__$1.call(null,G__19867));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__19868 = a__$1._peek_at();
var G__19869 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__19868,G__19869) : f__$1.call(null,G__19868,G__19869));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(function (){var G__19870 = a__$1._peek_at();
var G__19871 = x;
var G__19872 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__19870,G__19871,G__19872) : f__$1.call(null,G__19870,G__19871,G__19872));
})());
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,a__$1._peek_at(),x,y,more));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.call(null));

return this$__$1._run(false);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w(this$__$1,key,f__$1);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_(self__.watches);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w(this$__$1,key);

if((((!(was_empty))) && (((cljs.core.empty_QMARK_(self__.watches)) && ((self__.auto_run == null)))))){
return this$__$1.day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$IDisposable$dispose_BANG_$arity$1(null);
} else {
return null;
}
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5757__auto___19965 = self__.caught;
if((temp__5757__auto___19965 == null)){
} else {
var e_19966 = temp__5757__auto___19965;
throw e_19966;
}

var non_reactive_19967 = (day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_19967){
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_.call(null));
} else {
}

if(((non_reactive_19967) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_19968 = self__.state;
(self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null)));

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate_19968,self__.state)))){
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,oldstate_19968,self__.state);
}
} else {
}
} else {
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Reaction");

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Reaction");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Reaction.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Reaction = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_ = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$flush_BANG_(){
while(true){
var q = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.rea_queue = null);

var n__4741__auto___19969 = q.length;
var i_19970 = (0);
while(true){
if((i_19970 < n__4741__auto___19969)){
var r_19971 = (q[i_19970]);
r_19971._queued_run();

var G__19972 = (i_19970 + (1));
i_19970 = G__19972;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.batching.ratom_flush = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.flush_BANG_);
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$make_reaction(var_args){
var args__4870__auto__ = [];
var len__4864__auto___19973 = arguments.length;
var i__4865__auto___19974 = (0);
while(true){
if((i__4865__auto___19974 < len__4864__auto___19973)){
args__4870__auto__.push((arguments[i__4865__auto___19974]));

var G__19975 = (i__4865__auto___19974 + (1));
i__4865__auto___19974 = G__19975;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__19875){
var map__19876 = p__19875;
var map__19876__$1 = cljs.core.__destructure_map(map__19876);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19876__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19876__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19876__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Reaction(f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq19873){
var G__19874 = cljs.core.first(seq19873);
var seq19873__$1 = cljs.core.next(seq19873);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19874,seq19873__$1);
}));

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.temp_reaction = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction(null);
/**
 * Evaluates `f` and returns the result.  If `f` calls `deref` on any ratoms,
 * creates a new Reaction that watches those atoms and calls `run` whenever
 * any of those watched ratoms change.  Also, the new reaction is added to
 * list of 'watches' of each of the ratoms. The `run` parameter is a function
 * that should expect one argument.  It is passed `obj` when run.  The `opts`
 * are any options accepted by a Reaction and will be set on the newly created
 * Reaction. Sets the newly created Reaction to the `key` on `obj`.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.run_in_reaction = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.temp_reaction;
var res = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.deref_capture(f,r);
if((r.watching == null)){
} else {
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.temp_reaction = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_reaction(null));

r._set_opts(opts);

(r.f = f);

(r.auto_run = (function (){
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(obj) : run.call(null,obj));
}));

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.goog$module$goog$object.set(obj,key,r);
}

return res;
});
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.check_derefs = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$check_derefs(f){
var ctx = ({});
var res = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.in_context(ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(!((ctx.captured == null)))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && ((!((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom._STAR_ratom_context_STAR_ == null)))))){
if(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.has_console){
((day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.tracking)?day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0))].join(''));
} else {
}
} else {
}


return self__.state;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
(self__.changed = true);

(self__.state = newval);

if((!((self__.watches == null)))){
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,oldval,newval);
} else {
}

(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(newval) : self__.callback.call(null,newval));

return newval;
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return a__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper)) && ((((!(self__.changed))) && (((cljs.core.not(other.changed)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback)))))))));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.notify_w(this$__$1,old,new$);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.add_w(this$__$1,key,f);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.remove_w(this$__$1,key);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.pr_atom(a__$1,w,opts,"Wrapper",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",128701612),a__$1.cljs$core$IDeref$_deref$arity$1(null)], null));
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.cljs$lang$ctorStr = "day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Wrapper");

(day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Wrapper");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.reagent.v1v0v0.reagent.ratom/Wrapper.
 */
day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.Wrapper(state,callback,changed,watches));
});

day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.make_wrapper = (function day8$re_frame_10x$inlined_deps$reagent$v1v0v0$reagent$ratom$make_wrapper(value,callback_fn,args){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.__GT_Wrapper(value,day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.impl.util.make_partial_fn(callback_fn,args),false,null);
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.ratom.js.map
