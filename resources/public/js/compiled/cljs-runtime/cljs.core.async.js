goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32170 = arguments.length;
switch (G__32170) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32171 = (function (f,blockable,meta32172){
this.f = f;
this.blockable = blockable;
this.meta32172 = meta32172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32173,meta32172__$1){
var self__ = this;
var _32173__$1 = this;
return (new cljs.core.async.t_cljs$core$async32171(self__.f,self__.blockable,meta32172__$1));
}));

(cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32173){
var self__ = this;
var _32173__$1 = this;
return self__.meta32172;
}));

(cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32171.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32172","meta32172",-1684646642,null)], null);
}));

(cljs.core.async.t_cljs$core$async32171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32171");

(cljs.core.async.t_cljs$core$async32171.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32171.
 */
cljs.core.async.__GT_t_cljs$core$async32171 = (function cljs$core$async$__GT_t_cljs$core$async32171(f__$1,blockable__$1,meta32172){
return (new cljs.core.async.t_cljs$core$async32171(f__$1,blockable__$1,meta32172));
});

}

return (new cljs.core.async.t_cljs$core$async32171(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32186 = arguments.length;
switch (G__32186) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32206 = arguments.length;
switch (G__32206) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32222 = arguments.length;
switch (G__32222) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33682 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33682) : fn1.call(null,val_33682));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33682) : fn1.call(null,val_33682));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32230 = arguments.length;
switch (G__32230) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___33684 = n;
var x_33685 = (0);
while(true){
if((x_33685 < n__4741__auto___33684)){
(a[x_33685] = x_33685);

var G__33686 = (x_33685 + (1));
x_33685 = G__33686;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32240 = (function (flag,meta32241){
this.flag = flag;
this.meta32241 = meta32241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32242,meta32241__$1){
var self__ = this;
var _32242__$1 = this;
return (new cljs.core.async.t_cljs$core$async32240(self__.flag,meta32241__$1));
}));

(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32242){
var self__ = this;
var _32242__$1 = this;
return self__.meta32241;
}));

(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32241","meta32241",1138622907,null)], null);
}));

(cljs.core.async.t_cljs$core$async32240.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32240");

(cljs.core.async.t_cljs$core$async32240.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32240");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32240.
 */
cljs.core.async.__GT_t_cljs$core$async32240 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32240(flag__$1,meta32241){
return (new cljs.core.async.t_cljs$core$async32240(flag__$1,meta32241));
});

}

return (new cljs.core.async.t_cljs$core$async32240(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32247 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32247 = (function (flag,cb,meta32248){
this.flag = flag;
this.cb = cb;
this.meta32248 = meta32248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32249,meta32248__$1){
var self__ = this;
var _32249__$1 = this;
return (new cljs.core.async.t_cljs$core$async32247(self__.flag,self__.cb,meta32248__$1));
}));

(cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32249){
var self__ = this;
var _32249__$1 = this;
return self__.meta32248;
}));

(cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32247.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32248","meta32248",-1983991994,null)], null);
}));

(cljs.core.async.t_cljs$core$async32247.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32247");

(cljs.core.async.t_cljs$core$async32247.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32247");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32247.
 */
cljs.core.async.__GT_t_cljs$core$async32247 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32247(flag__$1,cb__$1,meta32248){
return (new cljs.core.async.t_cljs$core$async32247(flag__$1,cb__$1,meta32248));
});

}

return (new cljs.core.async.t_cljs$core$async32247(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32256_SHARP_){
var G__32259 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32256_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32259) : fret.call(null,G__32259));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32258_SHARP_){
var G__32260 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32258_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32260) : fret.call(null,G__32260));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33689 = (i + (1));
i = G__33689;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___33691 = arguments.length;
var i__4865__auto___33692 = (0);
while(true){
if((i__4865__auto___33692 < len__4864__auto___33691)){
args__4870__auto__.push((arguments[i__4865__auto___33692]));

var G__33693 = (i__4865__auto___33692 + (1));
i__4865__auto___33692 = G__33693;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32263){
var map__32264 = p__32263;
var map__32264__$1 = cljs.core.__destructure_map(map__32264);
var opts = map__32264__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32261){
var G__32262 = cljs.core.first(seq32261);
var seq32261__$1 = cljs.core.next(seq32261);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32262,seq32261__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32266 = arguments.length;
switch (G__32266) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32102__auto___33698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_32290){
var state_val_32291 = (state_32290[(1)]);
if((state_val_32291 === (7))){
var inst_32286 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
var statearr_32292_33700 = state_32290__$1;
(statearr_32292_33700[(2)] = inst_32286);

(statearr_32292_33700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (1))){
var state_32290__$1 = state_32290;
var statearr_32293_33701 = state_32290__$1;
(statearr_32293_33701[(2)] = null);

(statearr_32293_33701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (4))){
var inst_32269 = (state_32290[(7)]);
var inst_32269__$1 = (state_32290[(2)]);
var inst_32270 = (inst_32269__$1 == null);
var state_32290__$1 = (function (){var statearr_32294 = state_32290;
(statearr_32294[(7)] = inst_32269__$1);

return statearr_32294;
})();
if(cljs.core.truth_(inst_32270)){
var statearr_32295_33702 = state_32290__$1;
(statearr_32295_33702[(1)] = (5));

} else {
var statearr_32296_33703 = state_32290__$1;
(statearr_32296_33703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (13))){
var state_32290__$1 = state_32290;
var statearr_32297_33705 = state_32290__$1;
(statearr_32297_33705[(2)] = null);

(statearr_32297_33705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (6))){
var inst_32269 = (state_32290[(7)]);
var state_32290__$1 = state_32290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32290__$1,(11),to,inst_32269);
} else {
if((state_val_32291 === (3))){
var inst_32288 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32290__$1,inst_32288);
} else {
if((state_val_32291 === (12))){
var state_32290__$1 = state_32290;
var statearr_32298_33707 = state_32290__$1;
(statearr_32298_33707[(2)] = null);

(statearr_32298_33707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (2))){
var state_32290__$1 = state_32290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32290__$1,(4),from);
} else {
if((state_val_32291 === (11))){
var inst_32279 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
if(cljs.core.truth_(inst_32279)){
var statearr_32299_33708 = state_32290__$1;
(statearr_32299_33708[(1)] = (12));

} else {
var statearr_32300_33709 = state_32290__$1;
(statearr_32300_33709[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (9))){
var state_32290__$1 = state_32290;
var statearr_32301_33710 = state_32290__$1;
(statearr_32301_33710[(2)] = null);

(statearr_32301_33710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (5))){
var state_32290__$1 = state_32290;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32302_33712 = state_32290__$1;
(statearr_32302_33712[(1)] = (8));

} else {
var statearr_32303_33714 = state_32290__$1;
(statearr_32303_33714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (14))){
var inst_32284 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
var statearr_32304_33715 = state_32290__$1;
(statearr_32304_33715[(2)] = inst_32284);

(statearr_32304_33715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (10))){
var inst_32276 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
var statearr_32305_33716 = state_32290__$1;
(statearr_32305_33716[(2)] = inst_32276);

(statearr_32305_33716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32291 === (8))){
var inst_32273 = cljs.core.async.close_BANG_(to);
var state_32290__$1 = state_32290;
var statearr_32306_33717 = state_32290__$1;
(statearr_32306_33717[(2)] = inst_32273);

(statearr_32306_33717[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32042__auto__ = null;
var cljs$core$async$state_machine__32042__auto____0 = (function (){
var statearr_32307 = [null,null,null,null,null,null,null,null];
(statearr_32307[(0)] = cljs$core$async$state_machine__32042__auto__);

(statearr_32307[(1)] = (1));

return statearr_32307;
});
var cljs$core$async$state_machine__32042__auto____1 = (function (state_32290){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_32290);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e32308){var ex__32045__auto__ = e32308;
var statearr_32309_33718 = state_32290;
(statearr_32309_33718[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_32290[(4)]))){
var statearr_32310_33719 = state_32290;
(statearr_32310_33719[(1)] = cljs.core.first((state_32290[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33720 = state_32290;
state_32290 = G__33720;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$state_machine__32042__auto__ = function(state_32290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32042__auto____1.call(this,state_32290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32042__auto____0;
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32042__auto____1;
return cljs$core$async$state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_32311 = f__32103__auto__();
(statearr_32311[(6)] = c__32102__auto___33698);

return statearr_32311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32312){
var vec__32313 = p__32312;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32313,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32313,(1),null);
var job = vec__32313;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32102__auto___33723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_32320){
var state_val_32321 = (state_32320[(1)]);
if((state_val_32321 === (1))){
var state_32320__$1 = state_32320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32320__$1,(2),res,v);
} else {
if((state_val_32321 === (2))){
var inst_32317 = (state_32320[(2)]);
var inst_32318 = cljs.core.async.close_BANG_(res);
var state_32320__$1 = (function (){var statearr_32322 = state_32320;
(statearr_32322[(7)] = inst_32317);

return statearr_32322;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32320__$1,inst_32318);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0 = (function (){
var statearr_32323 = [null,null,null,null,null,null,null,null];
(statearr_32323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__);

(statearr_32323[(1)] = (1));

return statearr_32323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1 = (function (state_32320){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_32320);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e32324){var ex__32045__auto__ = e32324;
var statearr_32325_33724 = state_32320;
(statearr_32325_33724[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_32320[(4)]))){
var statearr_32326_33725 = state_32320;
(statearr_32326_33725[(1)] = cljs.core.first((state_32320[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33726 = state_32320;
state_32320 = G__33726;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__ = function(state_32320){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1.call(this,state_32320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_32327 = f__32103__auto__();
(statearr_32327[(6)] = c__32102__auto___33723);

return statearr_32327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32328){
var vec__32329 = p__32328;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32329,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32329,(1),null);
var job = vec__32329;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___33728 = n;
var __33729 = (0);
while(true){
if((__33729 < n__4741__auto___33728)){
var G__32332_33731 = type;
var G__32332_33732__$1 = (((G__32332_33731 instanceof cljs.core.Keyword))?G__32332_33731.fqn:null);
switch (G__32332_33732__$1) {
case "compute":
var c__32102__auto___33734 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33729,c__32102__auto___33734,G__32332_33731,G__32332_33732__$1,n__4741__auto___33728,jobs,results,process,async){
return (function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = ((function (__33729,c__32102__auto___33734,G__32332_33731,G__32332_33732__$1,n__4741__auto___33728,jobs,results,process,async){
return (function (state_32345){
var state_val_32346 = (state_32345[(1)]);
if((state_val_32346 === (1))){
var state_32345__$1 = state_32345;
var statearr_32347_33735 = state_32345__$1;
(statearr_32347_33735[(2)] = null);

(statearr_32347_33735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (2))){
var state_32345__$1 = state_32345;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32345__$1,(4),jobs);
} else {
if((state_val_32346 === (3))){
var inst_32343 = (state_32345[(2)]);
var state_32345__$1 = state_32345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32345__$1,inst_32343);
} else {
if((state_val_32346 === (4))){
var inst_32335 = (state_32345[(2)]);
var inst_32336 = process(inst_32335);
var state_32345__$1 = state_32345;
if(cljs.core.truth_(inst_32336)){
var statearr_32348_33736 = state_32345__$1;
(statearr_32348_33736[(1)] = (5));

} else {
var statearr_32349_33737 = state_32345__$1;
(statearr_32349_33737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (5))){
var state_32345__$1 = state_32345;
var statearr_32350_33738 = state_32345__$1;
(statearr_32350_33738[(2)] = null);

(statearr_32350_33738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (6))){
var state_32345__$1 = state_32345;
var statearr_32351_33739 = state_32345__$1;
(statearr_32351_33739[(2)] = null);

(statearr_32351_33739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32346 === (7))){
var inst_32341 = (state_32345[(2)]);
var state_32345__$1 = state_32345;
var statearr_32352_33740 = state_32345__$1;
(statearr_32352_33740[(2)] = inst_32341);

(statearr_32352_33740[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33729,c__32102__auto___33734,G__32332_33731,G__32332_33732__$1,n__4741__auto___33728,jobs,results,process,async))
;
return ((function (__33729,switch__32041__auto__,c__32102__auto___33734,G__32332_33731,G__32332_33732__$1,n__4741__auto___33728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0 = (function (){
var statearr_32353 = [null,null,null,null,null,null,null];
(statearr_32353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__);

(statearr_32353[(1)] = (1));

return statearr_32353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1 = (function (state_32345){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_32345);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e32354){var ex__32045__auto__ = e32354;
var statearr_32355_33741 = state_32345;
(statearr_32355_33741[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_32345[(4)]))){
var statearr_32356_33742 = state_32345;
(statearr_32356_33742[(1)] = cljs.core.first((state_32345[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33743 = state_32345;
state_32345 = G__33743;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__ = function(state_32345){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1.call(this,state_32345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__;
})()
;})(__33729,switch__32041__auto__,c__32102__auto___33734,G__32332_33731,G__32332_33732__$1,n__4741__auto___33728,jobs,results,process,async))
})();
var state__32104__auto__ = (function (){var statearr_32357 = f__32103__auto__();
(statearr_32357[(6)] = c__32102__auto___33734);

return statearr_32357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
});})(__33729,c__32102__auto___33734,G__32332_33731,G__32332_33732__$1,n__4741__auto___33728,jobs,results,process,async))
);


break;
case "async":
var c__32102__auto___33745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33729,c__32102__auto___33745,G__32332_33731,G__32332_33732__$1,n__4741__auto___33728,jobs,results,process,async){
return (function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = ((function (__33729,c__32102__auto___33745,G__32332_33731,G__32332_33732__$1,n__4741__auto___33728,jobs,results,process,async){
return (function (state_32370){
var state_val_32371 = (state_32370[(1)]);
if((state_val_32371 === (1))){
var state_32370__$1 = state_32370;
var statearr_32372_33746 = state_32370__$1;
(statearr_32372_33746[(2)] = null);

(statearr_32372_33746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (2))){
var state_32370__$1 = state_32370;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32370__$1,(4),jobs);
} else {
if((state_val_32371 === (3))){
var inst_32368 = (state_32370[(2)]);
var state_32370__$1 = state_32370;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32370__$1,inst_32368);
} else {
if((state_val_32371 === (4))){
var inst_32360 = (state_32370[(2)]);
var inst_32361 = async(inst_32360);
var state_32370__$1 = state_32370;
if(cljs.core.truth_(inst_32361)){
var statearr_32373_33747 = state_32370__$1;
(statearr_32373_33747[(1)] = (5));

} else {
var statearr_32374_33748 = state_32370__$1;
(statearr_32374_33748[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (5))){
var state_32370__$1 = state_32370;
var statearr_32375_33749 = state_32370__$1;
(statearr_32375_33749[(2)] = null);

(statearr_32375_33749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (6))){
var state_32370__$1 = state_32370;
var statearr_32376_33750 = state_32370__$1;
(statearr_32376_33750[(2)] = null);

(statearr_32376_33750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32371 === (7))){
var inst_32366 = (state_32370[(2)]);
var state_32370__$1 = state_32370;
var statearr_32377_33755 = state_32370__$1;
(statearr_32377_33755[(2)] = inst_32366);

(statearr_32377_33755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33729,c__32102__auto___33745,G__32332_33731,G__32332_33732__$1,n__4741__auto___33728,jobs,results,process,async))
;
return ((function (__33729,switch__32041__auto__,c__32102__auto___33745,G__32332_33731,G__32332_33732__$1,n__4741__auto___33728,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0 = (function (){
var statearr_32378 = [null,null,null,null,null,null,null];
(statearr_32378[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__);

(statearr_32378[(1)] = (1));

return statearr_32378;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1 = (function (state_32370){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_32370);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e32379){var ex__32045__auto__ = e32379;
var statearr_32380_33756 = state_32370;
(statearr_32380_33756[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_32370[(4)]))){
var statearr_32381_33757 = state_32370;
(statearr_32381_33757[(1)] = cljs.core.first((state_32370[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33758 = state_32370;
state_32370 = G__33758;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__ = function(state_32370){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1.call(this,state_32370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__;
})()
;})(__33729,switch__32041__auto__,c__32102__auto___33745,G__32332_33731,G__32332_33732__$1,n__4741__auto___33728,jobs,results,process,async))
})();
var state__32104__auto__ = (function (){var statearr_32382 = f__32103__auto__();
(statearr_32382[(6)] = c__32102__auto___33745);

return statearr_32382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
});})(__33729,c__32102__auto___33745,G__32332_33731,G__32332_33732__$1,n__4741__auto___33728,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32332_33732__$1)].join('')));

}

var G__33759 = (__33729 + (1));
__33729 = G__33759;
continue;
} else {
}
break;
}

var c__32102__auto___33760 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_32404){
var state_val_32405 = (state_32404[(1)]);
if((state_val_32405 === (7))){
var inst_32400 = (state_32404[(2)]);
var state_32404__$1 = state_32404;
var statearr_32406_33761 = state_32404__$1;
(statearr_32406_33761[(2)] = inst_32400);

(statearr_32406_33761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (1))){
var state_32404__$1 = state_32404;
var statearr_32407_33762 = state_32404__$1;
(statearr_32407_33762[(2)] = null);

(statearr_32407_33762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (4))){
var inst_32385 = (state_32404[(7)]);
var inst_32385__$1 = (state_32404[(2)]);
var inst_32386 = (inst_32385__$1 == null);
var state_32404__$1 = (function (){var statearr_32408 = state_32404;
(statearr_32408[(7)] = inst_32385__$1);

return statearr_32408;
})();
if(cljs.core.truth_(inst_32386)){
var statearr_32409_33763 = state_32404__$1;
(statearr_32409_33763[(1)] = (5));

} else {
var statearr_32410_33764 = state_32404__$1;
(statearr_32410_33764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (6))){
var inst_32385 = (state_32404[(7)]);
var inst_32390 = (state_32404[(8)]);
var inst_32390__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32391 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32392 = [inst_32385,inst_32390__$1];
var inst_32393 = (new cljs.core.PersistentVector(null,2,(5),inst_32391,inst_32392,null));
var state_32404__$1 = (function (){var statearr_32411 = state_32404;
(statearr_32411[(8)] = inst_32390__$1);

return statearr_32411;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32404__$1,(8),jobs,inst_32393);
} else {
if((state_val_32405 === (3))){
var inst_32402 = (state_32404[(2)]);
var state_32404__$1 = state_32404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32404__$1,inst_32402);
} else {
if((state_val_32405 === (2))){
var state_32404__$1 = state_32404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32404__$1,(4),from);
} else {
if((state_val_32405 === (9))){
var inst_32397 = (state_32404[(2)]);
var state_32404__$1 = (function (){var statearr_32412 = state_32404;
(statearr_32412[(9)] = inst_32397);

return statearr_32412;
})();
var statearr_32413_33765 = state_32404__$1;
(statearr_32413_33765[(2)] = null);

(statearr_32413_33765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (5))){
var inst_32388 = cljs.core.async.close_BANG_(jobs);
var state_32404__$1 = state_32404;
var statearr_32414_33766 = state_32404__$1;
(statearr_32414_33766[(2)] = inst_32388);

(statearr_32414_33766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32405 === (8))){
var inst_32390 = (state_32404[(8)]);
var inst_32395 = (state_32404[(2)]);
var state_32404__$1 = (function (){var statearr_32415 = state_32404;
(statearr_32415[(10)] = inst_32395);

return statearr_32415;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32404__$1,(9),results,inst_32390);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0 = (function (){
var statearr_32416 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32416[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__);

(statearr_32416[(1)] = (1));

return statearr_32416;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1 = (function (state_32404){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_32404);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e32417){var ex__32045__auto__ = e32417;
var statearr_32418_33767 = state_32404;
(statearr_32418_33767[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_32404[(4)]))){
var statearr_32419_33768 = state_32404;
(statearr_32419_33768[(1)] = cljs.core.first((state_32404[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33769 = state_32404;
state_32404 = G__33769;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__ = function(state_32404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1.call(this,state_32404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_32420 = f__32103__auto__();
(statearr_32420[(6)] = c__32102__auto___33760);

return statearr_32420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));


var c__32102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_32458){
var state_val_32459 = (state_32458[(1)]);
if((state_val_32459 === (7))){
var inst_32454 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
var statearr_32460_33772 = state_32458__$1;
(statearr_32460_33772[(2)] = inst_32454);

(statearr_32460_33772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (20))){
var state_32458__$1 = state_32458;
var statearr_32461_33773 = state_32458__$1;
(statearr_32461_33773[(2)] = null);

(statearr_32461_33773[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (1))){
var state_32458__$1 = state_32458;
var statearr_32462_33774 = state_32458__$1;
(statearr_32462_33774[(2)] = null);

(statearr_32462_33774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (4))){
var inst_32423 = (state_32458[(7)]);
var inst_32423__$1 = (state_32458[(2)]);
var inst_32424 = (inst_32423__$1 == null);
var state_32458__$1 = (function (){var statearr_32463 = state_32458;
(statearr_32463[(7)] = inst_32423__$1);

return statearr_32463;
})();
if(cljs.core.truth_(inst_32424)){
var statearr_32464_33775 = state_32458__$1;
(statearr_32464_33775[(1)] = (5));

} else {
var statearr_32465_33776 = state_32458__$1;
(statearr_32465_33776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (15))){
var inst_32436 = (state_32458[(8)]);
var state_32458__$1 = state_32458;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32458__$1,(18),to,inst_32436);
} else {
if((state_val_32459 === (21))){
var inst_32449 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
var statearr_32466_33777 = state_32458__$1;
(statearr_32466_33777[(2)] = inst_32449);

(statearr_32466_33777[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (13))){
var inst_32451 = (state_32458[(2)]);
var state_32458__$1 = (function (){var statearr_32467 = state_32458;
(statearr_32467[(9)] = inst_32451);

return statearr_32467;
})();
var statearr_32468_33778 = state_32458__$1;
(statearr_32468_33778[(2)] = null);

(statearr_32468_33778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (6))){
var inst_32423 = (state_32458[(7)]);
var state_32458__$1 = state_32458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32458__$1,(11),inst_32423);
} else {
if((state_val_32459 === (17))){
var inst_32444 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
if(cljs.core.truth_(inst_32444)){
var statearr_32469_33779 = state_32458__$1;
(statearr_32469_33779[(1)] = (19));

} else {
var statearr_32470_33780 = state_32458__$1;
(statearr_32470_33780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (3))){
var inst_32456 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32458__$1,inst_32456);
} else {
if((state_val_32459 === (12))){
var inst_32433 = (state_32458[(10)]);
var state_32458__$1 = state_32458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32458__$1,(14),inst_32433);
} else {
if((state_val_32459 === (2))){
var state_32458__$1 = state_32458;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32458__$1,(4),results);
} else {
if((state_val_32459 === (19))){
var state_32458__$1 = state_32458;
var statearr_32471_33781 = state_32458__$1;
(statearr_32471_33781[(2)] = null);

(statearr_32471_33781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (11))){
var inst_32433 = (state_32458[(2)]);
var state_32458__$1 = (function (){var statearr_32472 = state_32458;
(statearr_32472[(10)] = inst_32433);

return statearr_32472;
})();
var statearr_32473_33786 = state_32458__$1;
(statearr_32473_33786[(2)] = null);

(statearr_32473_33786[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (9))){
var state_32458__$1 = state_32458;
var statearr_32474_33790 = state_32458__$1;
(statearr_32474_33790[(2)] = null);

(statearr_32474_33790[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (5))){
var state_32458__$1 = state_32458;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32475_33791 = state_32458__$1;
(statearr_32475_33791[(1)] = (8));

} else {
var statearr_32476_33792 = state_32458__$1;
(statearr_32476_33792[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (14))){
var inst_32436 = (state_32458[(8)]);
var inst_32438 = (state_32458[(11)]);
var inst_32436__$1 = (state_32458[(2)]);
var inst_32437 = (inst_32436__$1 == null);
var inst_32438__$1 = cljs.core.not(inst_32437);
var state_32458__$1 = (function (){var statearr_32477 = state_32458;
(statearr_32477[(8)] = inst_32436__$1);

(statearr_32477[(11)] = inst_32438__$1);

return statearr_32477;
})();
if(inst_32438__$1){
var statearr_32478_33793 = state_32458__$1;
(statearr_32478_33793[(1)] = (15));

} else {
var statearr_32479_33797 = state_32458__$1;
(statearr_32479_33797[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (16))){
var inst_32438 = (state_32458[(11)]);
var state_32458__$1 = state_32458;
var statearr_32480_33798 = state_32458__$1;
(statearr_32480_33798[(2)] = inst_32438);

(statearr_32480_33798[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (10))){
var inst_32430 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
var statearr_32481_33799 = state_32458__$1;
(statearr_32481_33799[(2)] = inst_32430);

(statearr_32481_33799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (18))){
var inst_32441 = (state_32458[(2)]);
var state_32458__$1 = state_32458;
var statearr_32482_33803 = state_32458__$1;
(statearr_32482_33803[(2)] = inst_32441);

(statearr_32482_33803[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32459 === (8))){
var inst_32427 = cljs.core.async.close_BANG_(to);
var state_32458__$1 = state_32458;
var statearr_32483_33804 = state_32458__$1;
(statearr_32483_33804[(2)] = inst_32427);

(statearr_32483_33804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0 = (function (){
var statearr_32484 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__);

(statearr_32484[(1)] = (1));

return statearr_32484;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1 = (function (state_32458){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_32458);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e32485){var ex__32045__auto__ = e32485;
var statearr_32486_33808 = state_32458;
(statearr_32486_33808[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_32458[(4)]))){
var statearr_32487_33809 = state_32458;
(statearr_32487_33809[(1)] = cljs.core.first((state_32458[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33810 = state_32458;
state_32458 = G__33810;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__ = function(state_32458){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1.call(this,state_32458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32042__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_32488 = f__32103__auto__();
(statearr_32488[(6)] = c__32102__auto__);

return statearr_32488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));

return c__32102__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32490 = arguments.length;
switch (G__32490) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32492 = arguments.length;
switch (G__32492) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32494 = arguments.length;
switch (G__32494) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32102__auto___33830 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_32520){
var state_val_32521 = (state_32520[(1)]);
if((state_val_32521 === (7))){
var inst_32516 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32522_33831 = state_32520__$1;
(statearr_32522_33831[(2)] = inst_32516);

(statearr_32522_33831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (1))){
var state_32520__$1 = state_32520;
var statearr_32523_33832 = state_32520__$1;
(statearr_32523_33832[(2)] = null);

(statearr_32523_33832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (4))){
var inst_32497 = (state_32520[(7)]);
var inst_32497__$1 = (state_32520[(2)]);
var inst_32498 = (inst_32497__$1 == null);
var state_32520__$1 = (function (){var statearr_32524 = state_32520;
(statearr_32524[(7)] = inst_32497__$1);

return statearr_32524;
})();
if(cljs.core.truth_(inst_32498)){
var statearr_32525_33833 = state_32520__$1;
(statearr_32525_33833[(1)] = (5));

} else {
var statearr_32526_33835 = state_32520__$1;
(statearr_32526_33835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (13))){
var state_32520__$1 = state_32520;
var statearr_32527_33836 = state_32520__$1;
(statearr_32527_33836[(2)] = null);

(statearr_32527_33836[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (6))){
var inst_32497 = (state_32520[(7)]);
var inst_32503 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32497) : p.call(null,inst_32497));
var state_32520__$1 = state_32520;
if(cljs.core.truth_(inst_32503)){
var statearr_32528_33837 = state_32520__$1;
(statearr_32528_33837[(1)] = (9));

} else {
var statearr_32529_33838 = state_32520__$1;
(statearr_32529_33838[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (3))){
var inst_32518 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32520__$1,inst_32518);
} else {
if((state_val_32521 === (12))){
var state_32520__$1 = state_32520;
var statearr_32530_33839 = state_32520__$1;
(statearr_32530_33839[(2)] = null);

(statearr_32530_33839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (2))){
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32520__$1,(4),ch);
} else {
if((state_val_32521 === (11))){
var inst_32497 = (state_32520[(7)]);
var inst_32507 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32520__$1,(8),inst_32507,inst_32497);
} else {
if((state_val_32521 === (9))){
var state_32520__$1 = state_32520;
var statearr_32531_33840 = state_32520__$1;
(statearr_32531_33840[(2)] = tc);

(statearr_32531_33840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (5))){
var inst_32500 = cljs.core.async.close_BANG_(tc);
var inst_32501 = cljs.core.async.close_BANG_(fc);
var state_32520__$1 = (function (){var statearr_32532 = state_32520;
(statearr_32532[(8)] = inst_32500);

return statearr_32532;
})();
var statearr_32533_33841 = state_32520__$1;
(statearr_32533_33841[(2)] = inst_32501);

(statearr_32533_33841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (14))){
var inst_32514 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
var statearr_32534_33842 = state_32520__$1;
(statearr_32534_33842[(2)] = inst_32514);

(statearr_32534_33842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (10))){
var state_32520__$1 = state_32520;
var statearr_32535_33843 = state_32520__$1;
(statearr_32535_33843[(2)] = fc);

(statearr_32535_33843[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32521 === (8))){
var inst_32509 = (state_32520[(2)]);
var state_32520__$1 = state_32520;
if(cljs.core.truth_(inst_32509)){
var statearr_32536_33844 = state_32520__$1;
(statearr_32536_33844[(1)] = (12));

} else {
var statearr_32537_33845 = state_32520__$1;
(statearr_32537_33845[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32042__auto__ = null;
var cljs$core$async$state_machine__32042__auto____0 = (function (){
var statearr_32538 = [null,null,null,null,null,null,null,null,null];
(statearr_32538[(0)] = cljs$core$async$state_machine__32042__auto__);

(statearr_32538[(1)] = (1));

return statearr_32538;
});
var cljs$core$async$state_machine__32042__auto____1 = (function (state_32520){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_32520);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e32539){var ex__32045__auto__ = e32539;
var statearr_32540_33846 = state_32520;
(statearr_32540_33846[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_32520[(4)]))){
var statearr_32541_33847 = state_32520;
(statearr_32541_33847[(1)] = cljs.core.first((state_32520[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33848 = state_32520;
state_32520 = G__33848;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$state_machine__32042__auto__ = function(state_32520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32042__auto____1.call(this,state_32520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32042__auto____0;
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32042__auto____1;
return cljs$core$async$state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_32542 = f__32103__auto__();
(statearr_32542[(6)] = c__32102__auto___33830);

return statearr_32542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_32564){
var state_val_32565 = (state_32564[(1)]);
if((state_val_32565 === (7))){
var inst_32560 = (state_32564[(2)]);
var state_32564__$1 = state_32564;
var statearr_32566_33849 = state_32564__$1;
(statearr_32566_33849[(2)] = inst_32560);

(statearr_32566_33849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (1))){
var inst_32543 = init;
var inst_32544 = inst_32543;
var state_32564__$1 = (function (){var statearr_32567 = state_32564;
(statearr_32567[(7)] = inst_32544);

return statearr_32567;
})();
var statearr_32568_33850 = state_32564__$1;
(statearr_32568_33850[(2)] = null);

(statearr_32568_33850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (4))){
var inst_32547 = (state_32564[(8)]);
var inst_32547__$1 = (state_32564[(2)]);
var inst_32548 = (inst_32547__$1 == null);
var state_32564__$1 = (function (){var statearr_32569 = state_32564;
(statearr_32569[(8)] = inst_32547__$1);

return statearr_32569;
})();
if(cljs.core.truth_(inst_32548)){
var statearr_32570_33851 = state_32564__$1;
(statearr_32570_33851[(1)] = (5));

} else {
var statearr_32571_33852 = state_32564__$1;
(statearr_32571_33852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (6))){
var inst_32551 = (state_32564[(9)]);
var inst_32544 = (state_32564[(7)]);
var inst_32547 = (state_32564[(8)]);
var inst_32551__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32544,inst_32547) : f.call(null,inst_32544,inst_32547));
var inst_32552 = cljs.core.reduced_QMARK_(inst_32551__$1);
var state_32564__$1 = (function (){var statearr_32572 = state_32564;
(statearr_32572[(9)] = inst_32551__$1);

return statearr_32572;
})();
if(inst_32552){
var statearr_32573_33853 = state_32564__$1;
(statearr_32573_33853[(1)] = (8));

} else {
var statearr_32574_33854 = state_32564__$1;
(statearr_32574_33854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (3))){
var inst_32562 = (state_32564[(2)]);
var state_32564__$1 = state_32564;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32564__$1,inst_32562);
} else {
if((state_val_32565 === (2))){
var state_32564__$1 = state_32564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32564__$1,(4),ch);
} else {
if((state_val_32565 === (9))){
var inst_32551 = (state_32564[(9)]);
var inst_32544 = inst_32551;
var state_32564__$1 = (function (){var statearr_32575 = state_32564;
(statearr_32575[(7)] = inst_32544);

return statearr_32575;
})();
var statearr_32576_33855 = state_32564__$1;
(statearr_32576_33855[(2)] = null);

(statearr_32576_33855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (5))){
var inst_32544 = (state_32564[(7)]);
var state_32564__$1 = state_32564;
var statearr_32577_33856 = state_32564__$1;
(statearr_32577_33856[(2)] = inst_32544);

(statearr_32577_33856[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (10))){
var inst_32558 = (state_32564[(2)]);
var state_32564__$1 = state_32564;
var statearr_32578_33857 = state_32564__$1;
(statearr_32578_33857[(2)] = inst_32558);

(statearr_32578_33857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32565 === (8))){
var inst_32551 = (state_32564[(9)]);
var inst_32554 = cljs.core.deref(inst_32551);
var state_32564__$1 = state_32564;
var statearr_32579_33858 = state_32564__$1;
(statearr_32579_33858[(2)] = inst_32554);

(statearr_32579_33858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32042__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32042__auto____0 = (function (){
var statearr_32580 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32580[(0)] = cljs$core$async$reduce_$_state_machine__32042__auto__);

(statearr_32580[(1)] = (1));

return statearr_32580;
});
var cljs$core$async$reduce_$_state_machine__32042__auto____1 = (function (state_32564){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_32564);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e32581){var ex__32045__auto__ = e32581;
var statearr_32582_33861 = state_32564;
(statearr_32582_33861[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_32564[(4)]))){
var statearr_32583_33862 = state_32564;
(statearr_32583_33862[(1)] = cljs.core.first((state_32564[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33863 = state_32564;
state_32564 = G__33863;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32042__auto__ = function(state_32564){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32042__auto____1.call(this,state_32564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32042__auto____0;
cljs$core$async$reduce_$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32042__auto____1;
return cljs$core$async$reduce_$_state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_32584 = f__32103__auto__();
(statearr_32584[(6)] = c__32102__auto__);

return statearr_32584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));

return c__32102__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_32590){
var state_val_32591 = (state_32590[(1)]);
if((state_val_32591 === (1))){
var inst_32585 = cljs.core.async.reduce(f__$1,init,ch);
var state_32590__$1 = state_32590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32590__$1,(2),inst_32585);
} else {
if((state_val_32591 === (2))){
var inst_32587 = (state_32590[(2)]);
var inst_32588 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32587) : f__$1.call(null,inst_32587));
var state_32590__$1 = state_32590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32590__$1,inst_32588);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32042__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32042__auto____0 = (function (){
var statearr_32592 = [null,null,null,null,null,null,null];
(statearr_32592[(0)] = cljs$core$async$transduce_$_state_machine__32042__auto__);

(statearr_32592[(1)] = (1));

return statearr_32592;
});
var cljs$core$async$transduce_$_state_machine__32042__auto____1 = (function (state_32590){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_32590);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e32593){var ex__32045__auto__ = e32593;
var statearr_32594_33868 = state_32590;
(statearr_32594_33868[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_32590[(4)]))){
var statearr_32595_33869 = state_32590;
(statearr_32595_33869[(1)] = cljs.core.first((state_32590[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33870 = state_32590;
state_32590 = G__33870;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32042__auto__ = function(state_32590){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32042__auto____1.call(this,state_32590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32042__auto____0;
cljs$core$async$transduce_$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32042__auto____1;
return cljs$core$async$transduce_$_state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_32596 = f__32103__auto__();
(statearr_32596[(6)] = c__32102__auto__);

return statearr_32596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));

return c__32102__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32598 = arguments.length;
switch (G__32598) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_32623){
var state_val_32624 = (state_32623[(1)]);
if((state_val_32624 === (7))){
var inst_32605 = (state_32623[(2)]);
var state_32623__$1 = state_32623;
var statearr_32625_33874 = state_32623__$1;
(statearr_32625_33874[(2)] = inst_32605);

(statearr_32625_33874[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (1))){
var inst_32599 = cljs.core.seq(coll);
var inst_32600 = inst_32599;
var state_32623__$1 = (function (){var statearr_32626 = state_32623;
(statearr_32626[(7)] = inst_32600);

return statearr_32626;
})();
var statearr_32627_33875 = state_32623__$1;
(statearr_32627_33875[(2)] = null);

(statearr_32627_33875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (4))){
var inst_32600 = (state_32623[(7)]);
var inst_32603 = cljs.core.first(inst_32600);
var state_32623__$1 = state_32623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32623__$1,(7),ch,inst_32603);
} else {
if((state_val_32624 === (13))){
var inst_32617 = (state_32623[(2)]);
var state_32623__$1 = state_32623;
var statearr_32628_33876 = state_32623__$1;
(statearr_32628_33876[(2)] = inst_32617);

(statearr_32628_33876[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (6))){
var inst_32608 = (state_32623[(2)]);
var state_32623__$1 = state_32623;
if(cljs.core.truth_(inst_32608)){
var statearr_32629_33877 = state_32623__$1;
(statearr_32629_33877[(1)] = (8));

} else {
var statearr_32630_33878 = state_32623__$1;
(statearr_32630_33878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (3))){
var inst_32621 = (state_32623[(2)]);
var state_32623__$1 = state_32623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32623__$1,inst_32621);
} else {
if((state_val_32624 === (12))){
var state_32623__$1 = state_32623;
var statearr_32631_33879 = state_32623__$1;
(statearr_32631_33879[(2)] = null);

(statearr_32631_33879[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (2))){
var inst_32600 = (state_32623[(7)]);
var state_32623__$1 = state_32623;
if(cljs.core.truth_(inst_32600)){
var statearr_32632_33880 = state_32623__$1;
(statearr_32632_33880[(1)] = (4));

} else {
var statearr_32633_33881 = state_32623__$1;
(statearr_32633_33881[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (11))){
var inst_32614 = cljs.core.async.close_BANG_(ch);
var state_32623__$1 = state_32623;
var statearr_32634_33882 = state_32623__$1;
(statearr_32634_33882[(2)] = inst_32614);

(statearr_32634_33882[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (9))){
var state_32623__$1 = state_32623;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32635_33883 = state_32623__$1;
(statearr_32635_33883[(1)] = (11));

} else {
var statearr_32636_33884 = state_32623__$1;
(statearr_32636_33884[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (5))){
var inst_32600 = (state_32623[(7)]);
var state_32623__$1 = state_32623;
var statearr_32637_33886 = state_32623__$1;
(statearr_32637_33886[(2)] = inst_32600);

(statearr_32637_33886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (10))){
var inst_32619 = (state_32623[(2)]);
var state_32623__$1 = state_32623;
var statearr_32638_33890 = state_32623__$1;
(statearr_32638_33890[(2)] = inst_32619);

(statearr_32638_33890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32624 === (8))){
var inst_32600 = (state_32623[(7)]);
var inst_32610 = cljs.core.next(inst_32600);
var inst_32600__$1 = inst_32610;
var state_32623__$1 = (function (){var statearr_32639 = state_32623;
(statearr_32639[(7)] = inst_32600__$1);

return statearr_32639;
})();
var statearr_32640_33891 = state_32623__$1;
(statearr_32640_33891[(2)] = null);

(statearr_32640_33891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32042__auto__ = null;
var cljs$core$async$state_machine__32042__auto____0 = (function (){
var statearr_32641 = [null,null,null,null,null,null,null,null];
(statearr_32641[(0)] = cljs$core$async$state_machine__32042__auto__);

(statearr_32641[(1)] = (1));

return statearr_32641;
});
var cljs$core$async$state_machine__32042__auto____1 = (function (state_32623){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_32623);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e32642){var ex__32045__auto__ = e32642;
var statearr_32643_33896 = state_32623;
(statearr_32643_33896[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_32623[(4)]))){
var statearr_32644_33897 = state_32623;
(statearr_32644_33897[(1)] = cljs.core.first((state_32623[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33898 = state_32623;
state_32623 = G__33898;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$state_machine__32042__auto__ = function(state_32623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32042__auto____1.call(this,state_32623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32042__auto____0;
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32042__auto____1;
return cljs$core$async$state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_32645 = f__32103__auto__();
(statearr_32645[(6)] = c__32102__auto__);

return statearr_32645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));

return c__32102__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32647 = arguments.length;
switch (G__32647) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_33913 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_33913(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_33914 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_33914(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_33915 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_33915(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_33916 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_33916(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32648 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32648 = (function (ch,cs,meta32649){
this.ch = ch;
this.cs = cs;
this.meta32649 = meta32649;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32648.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32650,meta32649__$1){
var self__ = this;
var _32650__$1 = this;
return (new cljs.core.async.t_cljs$core$async32648(self__.ch,self__.cs,meta32649__$1));
}));

(cljs.core.async.t_cljs$core$async32648.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32650){
var self__ = this;
var _32650__$1 = this;
return self__.meta32649;
}));

(cljs.core.async.t_cljs$core$async32648.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32648.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32648.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32648.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32648.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32648.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32648.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32649","meta32649",-510881765,null)], null);
}));

(cljs.core.async.t_cljs$core$async32648.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32648.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32648");

(cljs.core.async.t_cljs$core$async32648.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32648");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32648.
 */
cljs.core.async.__GT_t_cljs$core$async32648 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32648(ch__$1,cs__$1,meta32649){
return (new cljs.core.async.t_cljs$core$async32648(ch__$1,cs__$1,meta32649));
});

}

return (new cljs.core.async.t_cljs$core$async32648(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32102__auto___33923 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_32783){
var state_val_32784 = (state_32783[(1)]);
if((state_val_32784 === (7))){
var inst_32779 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
var statearr_32785_33924 = state_32783__$1;
(statearr_32785_33924[(2)] = inst_32779);

(statearr_32785_33924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (20))){
var inst_32684 = (state_32783[(7)]);
var inst_32696 = cljs.core.first(inst_32684);
var inst_32697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32696,(0),null);
var inst_32698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32696,(1),null);
var state_32783__$1 = (function (){var statearr_32786 = state_32783;
(statearr_32786[(8)] = inst_32697);

return statearr_32786;
})();
if(cljs.core.truth_(inst_32698)){
var statearr_32787_33925 = state_32783__$1;
(statearr_32787_33925[(1)] = (22));

} else {
var statearr_32788_33926 = state_32783__$1;
(statearr_32788_33926[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (27))){
var inst_32728 = (state_32783[(9)]);
var inst_32653 = (state_32783[(10)]);
var inst_32726 = (state_32783[(11)]);
var inst_32733 = (state_32783[(12)]);
var inst_32733__$1 = cljs.core._nth(inst_32726,inst_32728);
var inst_32734 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32733__$1,inst_32653,done);
var state_32783__$1 = (function (){var statearr_32789 = state_32783;
(statearr_32789[(12)] = inst_32733__$1);

return statearr_32789;
})();
if(cljs.core.truth_(inst_32734)){
var statearr_32790_33933 = state_32783__$1;
(statearr_32790_33933[(1)] = (30));

} else {
var statearr_32791_33934 = state_32783__$1;
(statearr_32791_33934[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (1))){
var state_32783__$1 = state_32783;
var statearr_32792_33935 = state_32783__$1;
(statearr_32792_33935[(2)] = null);

(statearr_32792_33935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (24))){
var inst_32684 = (state_32783[(7)]);
var inst_32703 = (state_32783[(2)]);
var inst_32704 = cljs.core.next(inst_32684);
var inst_32662 = inst_32704;
var inst_32663 = null;
var inst_32664 = (0);
var inst_32665 = (0);
var state_32783__$1 = (function (){var statearr_32793 = state_32783;
(statearr_32793[(13)] = inst_32663);

(statearr_32793[(14)] = inst_32664);

(statearr_32793[(15)] = inst_32703);

(statearr_32793[(16)] = inst_32662);

(statearr_32793[(17)] = inst_32665);

return statearr_32793;
})();
var statearr_32794_33936 = state_32783__$1;
(statearr_32794_33936[(2)] = null);

(statearr_32794_33936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (39))){
var state_32783__$1 = state_32783;
var statearr_32798_33937 = state_32783__$1;
(statearr_32798_33937[(2)] = null);

(statearr_32798_33937[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (4))){
var inst_32653 = (state_32783[(10)]);
var inst_32653__$1 = (state_32783[(2)]);
var inst_32654 = (inst_32653__$1 == null);
var state_32783__$1 = (function (){var statearr_32799 = state_32783;
(statearr_32799[(10)] = inst_32653__$1);

return statearr_32799;
})();
if(cljs.core.truth_(inst_32654)){
var statearr_32800_33938 = state_32783__$1;
(statearr_32800_33938[(1)] = (5));

} else {
var statearr_32801_33939 = state_32783__$1;
(statearr_32801_33939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (15))){
var inst_32663 = (state_32783[(13)]);
var inst_32664 = (state_32783[(14)]);
var inst_32662 = (state_32783[(16)]);
var inst_32665 = (state_32783[(17)]);
var inst_32680 = (state_32783[(2)]);
var inst_32681 = (inst_32665 + (1));
var tmp32795 = inst_32663;
var tmp32796 = inst_32664;
var tmp32797 = inst_32662;
var inst_32662__$1 = tmp32797;
var inst_32663__$1 = tmp32795;
var inst_32664__$1 = tmp32796;
var inst_32665__$1 = inst_32681;
var state_32783__$1 = (function (){var statearr_32802 = state_32783;
(statearr_32802[(13)] = inst_32663__$1);

(statearr_32802[(14)] = inst_32664__$1);

(statearr_32802[(18)] = inst_32680);

(statearr_32802[(16)] = inst_32662__$1);

(statearr_32802[(17)] = inst_32665__$1);

return statearr_32802;
})();
var statearr_32803_33946 = state_32783__$1;
(statearr_32803_33946[(2)] = null);

(statearr_32803_33946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (21))){
var inst_32707 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
var statearr_32807_33947 = state_32783__$1;
(statearr_32807_33947[(2)] = inst_32707);

(statearr_32807_33947[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (31))){
var inst_32733 = (state_32783[(12)]);
var inst_32737 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32733);
var state_32783__$1 = state_32783;
var statearr_32808_33948 = state_32783__$1;
(statearr_32808_33948[(2)] = inst_32737);

(statearr_32808_33948[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (32))){
var inst_32725 = (state_32783[(19)]);
var inst_32728 = (state_32783[(9)]);
var inst_32727 = (state_32783[(20)]);
var inst_32726 = (state_32783[(11)]);
var inst_32739 = (state_32783[(2)]);
var inst_32740 = (inst_32728 + (1));
var tmp32804 = inst_32725;
var tmp32805 = inst_32727;
var tmp32806 = inst_32726;
var inst_32725__$1 = tmp32804;
var inst_32726__$1 = tmp32806;
var inst_32727__$1 = tmp32805;
var inst_32728__$1 = inst_32740;
var state_32783__$1 = (function (){var statearr_32809 = state_32783;
(statearr_32809[(21)] = inst_32739);

(statearr_32809[(19)] = inst_32725__$1);

(statearr_32809[(9)] = inst_32728__$1);

(statearr_32809[(20)] = inst_32727__$1);

(statearr_32809[(11)] = inst_32726__$1);

return statearr_32809;
})();
var statearr_32810_33949 = state_32783__$1;
(statearr_32810_33949[(2)] = null);

(statearr_32810_33949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (40))){
var inst_32752 = (state_32783[(22)]);
var inst_32756 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32752);
var state_32783__$1 = state_32783;
var statearr_32811_33950 = state_32783__$1;
(statearr_32811_33950[(2)] = inst_32756);

(statearr_32811_33950[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (33))){
var inst_32743 = (state_32783[(23)]);
var inst_32745 = cljs.core.chunked_seq_QMARK_(inst_32743);
var state_32783__$1 = state_32783;
if(inst_32745){
var statearr_32812_33951 = state_32783__$1;
(statearr_32812_33951[(1)] = (36));

} else {
var statearr_32813_33952 = state_32783__$1;
(statearr_32813_33952[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (13))){
var inst_32674 = (state_32783[(24)]);
var inst_32677 = cljs.core.async.close_BANG_(inst_32674);
var state_32783__$1 = state_32783;
var statearr_32814_33953 = state_32783__$1;
(statearr_32814_33953[(2)] = inst_32677);

(statearr_32814_33953[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (22))){
var inst_32697 = (state_32783[(8)]);
var inst_32700 = cljs.core.async.close_BANG_(inst_32697);
var state_32783__$1 = state_32783;
var statearr_32815_33954 = state_32783__$1;
(statearr_32815_33954[(2)] = inst_32700);

(statearr_32815_33954[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (36))){
var inst_32743 = (state_32783[(23)]);
var inst_32747 = cljs.core.chunk_first(inst_32743);
var inst_32748 = cljs.core.chunk_rest(inst_32743);
var inst_32749 = cljs.core.count(inst_32747);
var inst_32725 = inst_32748;
var inst_32726 = inst_32747;
var inst_32727 = inst_32749;
var inst_32728 = (0);
var state_32783__$1 = (function (){var statearr_32816 = state_32783;
(statearr_32816[(19)] = inst_32725);

(statearr_32816[(9)] = inst_32728);

(statearr_32816[(20)] = inst_32727);

(statearr_32816[(11)] = inst_32726);

return statearr_32816;
})();
var statearr_32817_33955 = state_32783__$1;
(statearr_32817_33955[(2)] = null);

(statearr_32817_33955[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (41))){
var inst_32743 = (state_32783[(23)]);
var inst_32758 = (state_32783[(2)]);
var inst_32759 = cljs.core.next(inst_32743);
var inst_32725 = inst_32759;
var inst_32726 = null;
var inst_32727 = (0);
var inst_32728 = (0);
var state_32783__$1 = (function (){var statearr_32818 = state_32783;
(statearr_32818[(19)] = inst_32725);

(statearr_32818[(25)] = inst_32758);

(statearr_32818[(9)] = inst_32728);

(statearr_32818[(20)] = inst_32727);

(statearr_32818[(11)] = inst_32726);

return statearr_32818;
})();
var statearr_32819_33956 = state_32783__$1;
(statearr_32819_33956[(2)] = null);

(statearr_32819_33956[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (43))){
var state_32783__$1 = state_32783;
var statearr_32820_33957 = state_32783__$1;
(statearr_32820_33957[(2)] = null);

(statearr_32820_33957[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (29))){
var inst_32767 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
var statearr_32821_33958 = state_32783__$1;
(statearr_32821_33958[(2)] = inst_32767);

(statearr_32821_33958[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (44))){
var inst_32776 = (state_32783[(2)]);
var state_32783__$1 = (function (){var statearr_32822 = state_32783;
(statearr_32822[(26)] = inst_32776);

return statearr_32822;
})();
var statearr_32823_33960 = state_32783__$1;
(statearr_32823_33960[(2)] = null);

(statearr_32823_33960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (6))){
var inst_32717 = (state_32783[(27)]);
var inst_32716 = cljs.core.deref(cs);
var inst_32717__$1 = cljs.core.keys(inst_32716);
var inst_32718 = cljs.core.count(inst_32717__$1);
var inst_32719 = cljs.core.reset_BANG_(dctr,inst_32718);
var inst_32724 = cljs.core.seq(inst_32717__$1);
var inst_32725 = inst_32724;
var inst_32726 = null;
var inst_32727 = (0);
var inst_32728 = (0);
var state_32783__$1 = (function (){var statearr_32824 = state_32783;
(statearr_32824[(28)] = inst_32719);

(statearr_32824[(19)] = inst_32725);

(statearr_32824[(9)] = inst_32728);

(statearr_32824[(20)] = inst_32727);

(statearr_32824[(27)] = inst_32717__$1);

(statearr_32824[(11)] = inst_32726);

return statearr_32824;
})();
var statearr_32825_33965 = state_32783__$1;
(statearr_32825_33965[(2)] = null);

(statearr_32825_33965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (28))){
var inst_32725 = (state_32783[(19)]);
var inst_32743 = (state_32783[(23)]);
var inst_32743__$1 = cljs.core.seq(inst_32725);
var state_32783__$1 = (function (){var statearr_32826 = state_32783;
(statearr_32826[(23)] = inst_32743__$1);

return statearr_32826;
})();
if(inst_32743__$1){
var statearr_32827_33966 = state_32783__$1;
(statearr_32827_33966[(1)] = (33));

} else {
var statearr_32828_33967 = state_32783__$1;
(statearr_32828_33967[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (25))){
var inst_32728 = (state_32783[(9)]);
var inst_32727 = (state_32783[(20)]);
var inst_32730 = (inst_32728 < inst_32727);
var inst_32731 = inst_32730;
var state_32783__$1 = state_32783;
if(cljs.core.truth_(inst_32731)){
var statearr_32829_33968 = state_32783__$1;
(statearr_32829_33968[(1)] = (27));

} else {
var statearr_32830_33969 = state_32783__$1;
(statearr_32830_33969[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (34))){
var state_32783__$1 = state_32783;
var statearr_32831_33970 = state_32783__$1;
(statearr_32831_33970[(2)] = null);

(statearr_32831_33970[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (17))){
var state_32783__$1 = state_32783;
var statearr_32832_33971 = state_32783__$1;
(statearr_32832_33971[(2)] = null);

(statearr_32832_33971[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (3))){
var inst_32781 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32783__$1,inst_32781);
} else {
if((state_val_32784 === (12))){
var inst_32712 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
var statearr_32833_33974 = state_32783__$1;
(statearr_32833_33974[(2)] = inst_32712);

(statearr_32833_33974[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (2))){
var state_32783__$1 = state_32783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32783__$1,(4),ch);
} else {
if((state_val_32784 === (23))){
var state_32783__$1 = state_32783;
var statearr_32834_33975 = state_32783__$1;
(statearr_32834_33975[(2)] = null);

(statearr_32834_33975[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (35))){
var inst_32765 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
var statearr_32835_33976 = state_32783__$1;
(statearr_32835_33976[(2)] = inst_32765);

(statearr_32835_33976[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (19))){
var inst_32684 = (state_32783[(7)]);
var inst_32688 = cljs.core.chunk_first(inst_32684);
var inst_32689 = cljs.core.chunk_rest(inst_32684);
var inst_32690 = cljs.core.count(inst_32688);
var inst_32662 = inst_32689;
var inst_32663 = inst_32688;
var inst_32664 = inst_32690;
var inst_32665 = (0);
var state_32783__$1 = (function (){var statearr_32836 = state_32783;
(statearr_32836[(13)] = inst_32663);

(statearr_32836[(14)] = inst_32664);

(statearr_32836[(16)] = inst_32662);

(statearr_32836[(17)] = inst_32665);

return statearr_32836;
})();
var statearr_32837_33979 = state_32783__$1;
(statearr_32837_33979[(2)] = null);

(statearr_32837_33979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (11))){
var inst_32684 = (state_32783[(7)]);
var inst_32662 = (state_32783[(16)]);
var inst_32684__$1 = cljs.core.seq(inst_32662);
var state_32783__$1 = (function (){var statearr_32838 = state_32783;
(statearr_32838[(7)] = inst_32684__$1);

return statearr_32838;
})();
if(inst_32684__$1){
var statearr_32839_33980 = state_32783__$1;
(statearr_32839_33980[(1)] = (16));

} else {
var statearr_32840_33981 = state_32783__$1;
(statearr_32840_33981[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (9))){
var inst_32714 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
var statearr_32841_33982 = state_32783__$1;
(statearr_32841_33982[(2)] = inst_32714);

(statearr_32841_33982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (5))){
var inst_32660 = cljs.core.deref(cs);
var inst_32661 = cljs.core.seq(inst_32660);
var inst_32662 = inst_32661;
var inst_32663 = null;
var inst_32664 = (0);
var inst_32665 = (0);
var state_32783__$1 = (function (){var statearr_32842 = state_32783;
(statearr_32842[(13)] = inst_32663);

(statearr_32842[(14)] = inst_32664);

(statearr_32842[(16)] = inst_32662);

(statearr_32842[(17)] = inst_32665);

return statearr_32842;
})();
var statearr_32843_33983 = state_32783__$1;
(statearr_32843_33983[(2)] = null);

(statearr_32843_33983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (14))){
var state_32783__$1 = state_32783;
var statearr_32844_33984 = state_32783__$1;
(statearr_32844_33984[(2)] = null);

(statearr_32844_33984[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (45))){
var inst_32773 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
var statearr_32845_33985 = state_32783__$1;
(statearr_32845_33985[(2)] = inst_32773);

(statearr_32845_33985[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (26))){
var inst_32717 = (state_32783[(27)]);
var inst_32769 = (state_32783[(2)]);
var inst_32770 = cljs.core.seq(inst_32717);
var state_32783__$1 = (function (){var statearr_32846 = state_32783;
(statearr_32846[(29)] = inst_32769);

return statearr_32846;
})();
if(inst_32770){
var statearr_32847_33988 = state_32783__$1;
(statearr_32847_33988[(1)] = (42));

} else {
var statearr_32848_33989 = state_32783__$1;
(statearr_32848_33989[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (16))){
var inst_32684 = (state_32783[(7)]);
var inst_32686 = cljs.core.chunked_seq_QMARK_(inst_32684);
var state_32783__$1 = state_32783;
if(inst_32686){
var statearr_32849_33990 = state_32783__$1;
(statearr_32849_33990[(1)] = (19));

} else {
var statearr_32850_33991 = state_32783__$1;
(statearr_32850_33991[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (38))){
var inst_32762 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
var statearr_32851_33992 = state_32783__$1;
(statearr_32851_33992[(2)] = inst_32762);

(statearr_32851_33992[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (30))){
var state_32783__$1 = state_32783;
var statearr_32852_33993 = state_32783__$1;
(statearr_32852_33993[(2)] = null);

(statearr_32852_33993[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (10))){
var inst_32663 = (state_32783[(13)]);
var inst_32665 = (state_32783[(17)]);
var inst_32673 = cljs.core._nth(inst_32663,inst_32665);
var inst_32674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32673,(0),null);
var inst_32675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32673,(1),null);
var state_32783__$1 = (function (){var statearr_32853 = state_32783;
(statearr_32853[(24)] = inst_32674);

return statearr_32853;
})();
if(cljs.core.truth_(inst_32675)){
var statearr_32854_33994 = state_32783__$1;
(statearr_32854_33994[(1)] = (13));

} else {
var statearr_32855_33995 = state_32783__$1;
(statearr_32855_33995[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (18))){
var inst_32710 = (state_32783[(2)]);
var state_32783__$1 = state_32783;
var statearr_32856_33996 = state_32783__$1;
(statearr_32856_33996[(2)] = inst_32710);

(statearr_32856_33996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (42))){
var state_32783__$1 = state_32783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32783__$1,(45),dchan);
} else {
if((state_val_32784 === (37))){
var inst_32743 = (state_32783[(23)]);
var inst_32653 = (state_32783[(10)]);
var inst_32752 = (state_32783[(22)]);
var inst_32752__$1 = cljs.core.first(inst_32743);
var inst_32753 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32752__$1,inst_32653,done);
var state_32783__$1 = (function (){var statearr_32857 = state_32783;
(statearr_32857[(22)] = inst_32752__$1);

return statearr_32857;
})();
if(cljs.core.truth_(inst_32753)){
var statearr_32858_33997 = state_32783__$1;
(statearr_32858_33997[(1)] = (39));

} else {
var statearr_32859_33998 = state_32783__$1;
(statearr_32859_33998[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32784 === (8))){
var inst_32664 = (state_32783[(14)]);
var inst_32665 = (state_32783[(17)]);
var inst_32667 = (inst_32665 < inst_32664);
var inst_32668 = inst_32667;
var state_32783__$1 = state_32783;
if(cljs.core.truth_(inst_32668)){
var statearr_32860_33999 = state_32783__$1;
(statearr_32860_33999[(1)] = (10));

} else {
var statearr_32861_34000 = state_32783__$1;
(statearr_32861_34000[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32042__auto__ = null;
var cljs$core$async$mult_$_state_machine__32042__auto____0 = (function (){
var statearr_32862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32862[(0)] = cljs$core$async$mult_$_state_machine__32042__auto__);

(statearr_32862[(1)] = (1));

return statearr_32862;
});
var cljs$core$async$mult_$_state_machine__32042__auto____1 = (function (state_32783){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_32783);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e32863){var ex__32045__auto__ = e32863;
var statearr_32864_34002 = state_32783;
(statearr_32864_34002[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_32783[(4)]))){
var statearr_32865_34003 = state_32783;
(statearr_32865_34003[(1)] = cljs.core.first((state_32783[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34004 = state_32783;
state_32783 = G__34004;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32042__auto__ = function(state_32783){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32042__auto____1.call(this,state_32783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32042__auto____0;
cljs$core$async$mult_$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32042__auto____1;
return cljs$core$async$mult_$_state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_32866 = f__32103__auto__();
(statearr_32866[(6)] = c__32102__auto___33923);

return statearr_32866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32868 = arguments.length;
switch (G__32868) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34010 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34010(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34011 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34011(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34012 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34012(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34013 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34013(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34014 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34014(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34022 = arguments.length;
var i__4865__auto___34023 = (0);
while(true){
if((i__4865__auto___34023 < len__4864__auto___34022)){
args__4870__auto__.push((arguments[i__4865__auto___34023]));

var G__34024 = (i__4865__auto___34023 + (1));
i__4865__auto___34023 = G__34024;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32873){
var map__32874 = p__32873;
var map__32874__$1 = cljs.core.__destructure_map(map__32874);
var opts = map__32874__$1;
var statearr_32875_34025 = state;
(statearr_32875_34025[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32876_34029 = state;
(statearr_32876_34029[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_32877_34030 = state;
(statearr_32877_34030[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32869){
var G__32870 = cljs.core.first(seq32869);
var seq32869__$1 = cljs.core.next(seq32869);
var G__32871 = cljs.core.first(seq32869__$1);
var seq32869__$2 = cljs.core.next(seq32869__$1);
var G__32872 = cljs.core.first(seq32869__$2);
var seq32869__$3 = cljs.core.next(seq32869__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32870,G__32871,G__32872,seq32869__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32878 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32878 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32879){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32879 = meta32879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32880,meta32879__$1){
var self__ = this;
var _32880__$1 = this;
return (new cljs.core.async.t_cljs$core$async32878(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32879__$1));
}));

(cljs.core.async.t_cljs$core$async32878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32880){
var self__ = this;
var _32880__$1 = this;
return self__.meta32879;
}));

(cljs.core.async.t_cljs$core$async32878.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32878.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32878.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32878.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32878.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32878.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32878.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32878.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32878.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32879","meta32879",-278245698,null)], null);
}));

(cljs.core.async.t_cljs$core$async32878.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32878.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32878");

(cljs.core.async.t_cljs$core$async32878.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32878");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32878.
 */
cljs.core.async.__GT_t_cljs$core$async32878 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32878(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32879){
return (new cljs.core.async.t_cljs$core$async32878(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32879));
});

}

return (new cljs.core.async.t_cljs$core$async32878(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32102__auto___34041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_32948){
var state_val_32949 = (state_32948[(1)]);
if((state_val_32949 === (7))){
var inst_32908 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
if(cljs.core.truth_(inst_32908)){
var statearr_32950_34043 = state_32948__$1;
(statearr_32950_34043[(1)] = (8));

} else {
var statearr_32951_34044 = state_32948__$1;
(statearr_32951_34044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (20))){
var inst_32901 = (state_32948[(7)]);
var state_32948__$1 = state_32948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32948__$1,(23),out,inst_32901);
} else {
if((state_val_32949 === (1))){
var inst_32884 = calc_state();
var inst_32885 = cljs.core.__destructure_map(inst_32884);
var inst_32886 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32885,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32885,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32885,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32889 = inst_32884;
var state_32948__$1 = (function (){var statearr_32952 = state_32948;
(statearr_32952[(8)] = inst_32888);

(statearr_32952[(9)] = inst_32889);

(statearr_32952[(10)] = inst_32887);

(statearr_32952[(11)] = inst_32886);

return statearr_32952;
})();
var statearr_32953_34046 = state_32948__$1;
(statearr_32953_34046[(2)] = null);

(statearr_32953_34046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (24))){
var inst_32892 = (state_32948[(12)]);
var inst_32889 = inst_32892;
var state_32948__$1 = (function (){var statearr_32954 = state_32948;
(statearr_32954[(9)] = inst_32889);

return statearr_32954;
})();
var statearr_32955_34047 = state_32948__$1;
(statearr_32955_34047[(2)] = null);

(statearr_32955_34047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (4))){
var inst_32901 = (state_32948[(7)]);
var inst_32903 = (state_32948[(13)]);
var inst_32900 = (state_32948[(2)]);
var inst_32901__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32900,(0),null);
var inst_32902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32900,(1),null);
var inst_32903__$1 = (inst_32901__$1 == null);
var state_32948__$1 = (function (){var statearr_32956 = state_32948;
(statearr_32956[(14)] = inst_32902);

(statearr_32956[(7)] = inst_32901__$1);

(statearr_32956[(13)] = inst_32903__$1);

return statearr_32956;
})();
if(cljs.core.truth_(inst_32903__$1)){
var statearr_32957_34048 = state_32948__$1;
(statearr_32957_34048[(1)] = (5));

} else {
var statearr_32958_34049 = state_32948__$1;
(statearr_32958_34049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (15))){
var inst_32922 = (state_32948[(15)]);
var inst_32893 = (state_32948[(16)]);
var inst_32922__$1 = cljs.core.empty_QMARK_(inst_32893);
var state_32948__$1 = (function (){var statearr_32959 = state_32948;
(statearr_32959[(15)] = inst_32922__$1);

return statearr_32959;
})();
if(inst_32922__$1){
var statearr_32960_34050 = state_32948__$1;
(statearr_32960_34050[(1)] = (17));

} else {
var statearr_32961_34051 = state_32948__$1;
(statearr_32961_34051[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (21))){
var inst_32892 = (state_32948[(12)]);
var inst_32889 = inst_32892;
var state_32948__$1 = (function (){var statearr_32962 = state_32948;
(statearr_32962[(9)] = inst_32889);

return statearr_32962;
})();
var statearr_32963_34052 = state_32948__$1;
(statearr_32963_34052[(2)] = null);

(statearr_32963_34052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (13))){
var inst_32915 = (state_32948[(2)]);
var inst_32916 = calc_state();
var inst_32889 = inst_32916;
var state_32948__$1 = (function (){var statearr_32964 = state_32948;
(statearr_32964[(17)] = inst_32915);

(statearr_32964[(9)] = inst_32889);

return statearr_32964;
})();
var statearr_32965_34053 = state_32948__$1;
(statearr_32965_34053[(2)] = null);

(statearr_32965_34053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (22))){
var inst_32942 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
var statearr_32966_34054 = state_32948__$1;
(statearr_32966_34054[(2)] = inst_32942);

(statearr_32966_34054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (6))){
var inst_32902 = (state_32948[(14)]);
var inst_32906 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32902,change);
var state_32948__$1 = state_32948;
var statearr_32967_34055 = state_32948__$1;
(statearr_32967_34055[(2)] = inst_32906);

(statearr_32967_34055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (25))){
var state_32948__$1 = state_32948;
var statearr_32968_34056 = state_32948__$1;
(statearr_32968_34056[(2)] = null);

(statearr_32968_34056[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (17))){
var inst_32894 = (state_32948[(18)]);
var inst_32902 = (state_32948[(14)]);
var inst_32924 = (inst_32894.cljs$core$IFn$_invoke$arity$1 ? inst_32894.cljs$core$IFn$_invoke$arity$1(inst_32902) : inst_32894.call(null,inst_32902));
var inst_32925 = cljs.core.not(inst_32924);
var state_32948__$1 = state_32948;
var statearr_32969_34057 = state_32948__$1;
(statearr_32969_34057[(2)] = inst_32925);

(statearr_32969_34057[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (3))){
var inst_32946 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32948__$1,inst_32946);
} else {
if((state_val_32949 === (12))){
var state_32948__$1 = state_32948;
var statearr_32970_34058 = state_32948__$1;
(statearr_32970_34058[(2)] = null);

(statearr_32970_34058[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (2))){
var inst_32892 = (state_32948[(12)]);
var inst_32889 = (state_32948[(9)]);
var inst_32892__$1 = cljs.core.__destructure_map(inst_32889);
var inst_32893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32892__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32892__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32892__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32948__$1 = (function (){var statearr_32971 = state_32948;
(statearr_32971[(12)] = inst_32892__$1);

(statearr_32971[(16)] = inst_32893);

(statearr_32971[(18)] = inst_32894);

return statearr_32971;
})();
return cljs.core.async.ioc_alts_BANG_(state_32948__$1,(4),inst_32895);
} else {
if((state_val_32949 === (23))){
var inst_32933 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
if(cljs.core.truth_(inst_32933)){
var statearr_32972_34059 = state_32948__$1;
(statearr_32972_34059[(1)] = (24));

} else {
var statearr_32973_34060 = state_32948__$1;
(statearr_32973_34060[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (19))){
var inst_32928 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
var statearr_32974_34062 = state_32948__$1;
(statearr_32974_34062[(2)] = inst_32928);

(statearr_32974_34062[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (11))){
var inst_32902 = (state_32948[(14)]);
var inst_32912 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32902);
var state_32948__$1 = state_32948;
var statearr_32975_34066 = state_32948__$1;
(statearr_32975_34066[(2)] = inst_32912);

(statearr_32975_34066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (9))){
var inst_32893 = (state_32948[(16)]);
var inst_32919 = (state_32948[(19)]);
var inst_32902 = (state_32948[(14)]);
var inst_32919__$1 = (inst_32893.cljs$core$IFn$_invoke$arity$1 ? inst_32893.cljs$core$IFn$_invoke$arity$1(inst_32902) : inst_32893.call(null,inst_32902));
var state_32948__$1 = (function (){var statearr_32976 = state_32948;
(statearr_32976[(19)] = inst_32919__$1);

return statearr_32976;
})();
if(cljs.core.truth_(inst_32919__$1)){
var statearr_32977_34067 = state_32948__$1;
(statearr_32977_34067[(1)] = (14));

} else {
var statearr_32978_34068 = state_32948__$1;
(statearr_32978_34068[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (5))){
var inst_32903 = (state_32948[(13)]);
var state_32948__$1 = state_32948;
var statearr_32979_34069 = state_32948__$1;
(statearr_32979_34069[(2)] = inst_32903);

(statearr_32979_34069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (14))){
var inst_32919 = (state_32948[(19)]);
var state_32948__$1 = state_32948;
var statearr_32980_34070 = state_32948__$1;
(statearr_32980_34070[(2)] = inst_32919);

(statearr_32980_34070[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (26))){
var inst_32938 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
var statearr_32981_34071 = state_32948__$1;
(statearr_32981_34071[(2)] = inst_32938);

(statearr_32981_34071[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (16))){
var inst_32930 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
if(cljs.core.truth_(inst_32930)){
var statearr_32982_34072 = state_32948__$1;
(statearr_32982_34072[(1)] = (20));

} else {
var statearr_32983_34073 = state_32948__$1;
(statearr_32983_34073[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (10))){
var inst_32944 = (state_32948[(2)]);
var state_32948__$1 = state_32948;
var statearr_32984_34074 = state_32948__$1;
(statearr_32984_34074[(2)] = inst_32944);

(statearr_32984_34074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (18))){
var inst_32922 = (state_32948[(15)]);
var state_32948__$1 = state_32948;
var statearr_32985_34075 = state_32948__$1;
(statearr_32985_34075[(2)] = inst_32922);

(statearr_32985_34075[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32949 === (8))){
var inst_32901 = (state_32948[(7)]);
var inst_32910 = (inst_32901 == null);
var state_32948__$1 = state_32948;
if(cljs.core.truth_(inst_32910)){
var statearr_32986_34076 = state_32948__$1;
(statearr_32986_34076[(1)] = (11));

} else {
var statearr_32987_34077 = state_32948__$1;
(statearr_32987_34077[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32042__auto__ = null;
var cljs$core$async$mix_$_state_machine__32042__auto____0 = (function (){
var statearr_32988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32988[(0)] = cljs$core$async$mix_$_state_machine__32042__auto__);

(statearr_32988[(1)] = (1));

return statearr_32988;
});
var cljs$core$async$mix_$_state_machine__32042__auto____1 = (function (state_32948){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_32948);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e32989){var ex__32045__auto__ = e32989;
var statearr_32990_34078 = state_32948;
(statearr_32990_34078[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_32948[(4)]))){
var statearr_32991_34079 = state_32948;
(statearr_32991_34079[(1)] = cljs.core.first((state_32948[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34080 = state_32948;
state_32948 = G__34080;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32042__auto__ = function(state_32948){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32042__auto____1.call(this,state_32948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32042__auto____0;
cljs$core$async$mix_$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32042__auto____1;
return cljs$core$async$mix_$_state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_32992 = f__32103__auto__();
(statearr_32992[(6)] = c__32102__auto___34041);

return statearr_32992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34085 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34085(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34087 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34087(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34088 = (function() {
var G__34089 = null;
var G__34089__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34089__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34089 = function(p,v){
switch(arguments.length){
case 1:
return G__34089__1.call(this,p);
case 2:
return G__34089__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34089.cljs$core$IFn$_invoke$arity$1 = G__34089__1;
G__34089.cljs$core$IFn$_invoke$arity$2 = G__34089__2;
return G__34089;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32994 = arguments.length;
switch (G__32994) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34088(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34088(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32997 = arguments.length;
switch (G__32997) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32995_SHARP_){
if(cljs.core.truth_((p1__32995_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32995_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32995_SHARP_.call(null,topic)))){
return p1__32995_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32995_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32998 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32998 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32999){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32999 = meta32999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33000,meta32999__$1){
var self__ = this;
var _33000__$1 = this;
return (new cljs.core.async.t_cljs$core$async32998(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32999__$1));
}));

(cljs.core.async.t_cljs$core$async32998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33000){
var self__ = this;
var _33000__$1 = this;
return self__.meta32999;
}));

(cljs.core.async.t_cljs$core$async32998.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32998.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32998.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32998.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32998.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32998.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32998.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32999","meta32999",-1821665903,null)], null);
}));

(cljs.core.async.t_cljs$core$async32998.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32998");

(cljs.core.async.t_cljs$core$async32998.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32998");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32998.
 */
cljs.core.async.__GT_t_cljs$core$async32998 = (function cljs$core$async$__GT_t_cljs$core$async32998(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32999){
return (new cljs.core.async.t_cljs$core$async32998(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32999));
});

}

return (new cljs.core.async.t_cljs$core$async32998(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32102__auto___34097 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_33072){
var state_val_33073 = (state_33072[(1)]);
if((state_val_33073 === (7))){
var inst_33068 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33074_34098 = state_33072__$1;
(statearr_33074_34098[(2)] = inst_33068);

(statearr_33074_34098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (20))){
var state_33072__$1 = state_33072;
var statearr_33075_34099 = state_33072__$1;
(statearr_33075_34099[(2)] = null);

(statearr_33075_34099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (1))){
var state_33072__$1 = state_33072;
var statearr_33076_34100 = state_33072__$1;
(statearr_33076_34100[(2)] = null);

(statearr_33076_34100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (24))){
var inst_33051 = (state_33072[(7)]);
var inst_33060 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33051);
var state_33072__$1 = state_33072;
var statearr_33077_34101 = state_33072__$1;
(statearr_33077_34101[(2)] = inst_33060);

(statearr_33077_34101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (4))){
var inst_33003 = (state_33072[(8)]);
var inst_33003__$1 = (state_33072[(2)]);
var inst_33004 = (inst_33003__$1 == null);
var state_33072__$1 = (function (){var statearr_33078 = state_33072;
(statearr_33078[(8)] = inst_33003__$1);

return statearr_33078;
})();
if(cljs.core.truth_(inst_33004)){
var statearr_33079_34102 = state_33072__$1;
(statearr_33079_34102[(1)] = (5));

} else {
var statearr_33080_34103 = state_33072__$1;
(statearr_33080_34103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (15))){
var inst_33045 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33081_34104 = state_33072__$1;
(statearr_33081_34104[(2)] = inst_33045);

(statearr_33081_34104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (21))){
var inst_33065 = (state_33072[(2)]);
var state_33072__$1 = (function (){var statearr_33082 = state_33072;
(statearr_33082[(9)] = inst_33065);

return statearr_33082;
})();
var statearr_33083_34105 = state_33072__$1;
(statearr_33083_34105[(2)] = null);

(statearr_33083_34105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (13))){
var inst_33027 = (state_33072[(10)]);
var inst_33029 = cljs.core.chunked_seq_QMARK_(inst_33027);
var state_33072__$1 = state_33072;
if(inst_33029){
var statearr_33084_34106 = state_33072__$1;
(statearr_33084_34106[(1)] = (16));

} else {
var statearr_33085_34107 = state_33072__$1;
(statearr_33085_34107[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (22))){
var inst_33057 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
if(cljs.core.truth_(inst_33057)){
var statearr_33086_34109 = state_33072__$1;
(statearr_33086_34109[(1)] = (23));

} else {
var statearr_33087_34110 = state_33072__$1;
(statearr_33087_34110[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (6))){
var inst_33003 = (state_33072[(8)]);
var inst_33051 = (state_33072[(7)]);
var inst_33053 = (state_33072[(11)]);
var inst_33051__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33003) : topic_fn.call(null,inst_33003));
var inst_33052 = cljs.core.deref(mults);
var inst_33053__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33052,inst_33051__$1);
var state_33072__$1 = (function (){var statearr_33088 = state_33072;
(statearr_33088[(7)] = inst_33051__$1);

(statearr_33088[(11)] = inst_33053__$1);

return statearr_33088;
})();
if(cljs.core.truth_(inst_33053__$1)){
var statearr_33089_34114 = state_33072__$1;
(statearr_33089_34114[(1)] = (19));

} else {
var statearr_33090_34115 = state_33072__$1;
(statearr_33090_34115[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (25))){
var inst_33062 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33091_34116 = state_33072__$1;
(statearr_33091_34116[(2)] = inst_33062);

(statearr_33091_34116[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (17))){
var inst_33027 = (state_33072[(10)]);
var inst_33036 = cljs.core.first(inst_33027);
var inst_33037 = cljs.core.async.muxch_STAR_(inst_33036);
var inst_33038 = cljs.core.async.close_BANG_(inst_33037);
var inst_33039 = cljs.core.next(inst_33027);
var inst_33013 = inst_33039;
var inst_33014 = null;
var inst_33015 = (0);
var inst_33016 = (0);
var state_33072__$1 = (function (){var statearr_33092 = state_33072;
(statearr_33092[(12)] = inst_33015);

(statearr_33092[(13)] = inst_33013);

(statearr_33092[(14)] = inst_33038);

(statearr_33092[(15)] = inst_33016);

(statearr_33092[(16)] = inst_33014);

return statearr_33092;
})();
var statearr_33093_34117 = state_33072__$1;
(statearr_33093_34117[(2)] = null);

(statearr_33093_34117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (3))){
var inst_33070 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33072__$1,inst_33070);
} else {
if((state_val_33073 === (12))){
var inst_33047 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33094_34118 = state_33072__$1;
(statearr_33094_34118[(2)] = inst_33047);

(statearr_33094_34118[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (2))){
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33072__$1,(4),ch);
} else {
if((state_val_33073 === (23))){
var state_33072__$1 = state_33072;
var statearr_33095_34119 = state_33072__$1;
(statearr_33095_34119[(2)] = null);

(statearr_33095_34119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (19))){
var inst_33003 = (state_33072[(8)]);
var inst_33053 = (state_33072[(11)]);
var inst_33055 = cljs.core.async.muxch_STAR_(inst_33053);
var state_33072__$1 = state_33072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33072__$1,(22),inst_33055,inst_33003);
} else {
if((state_val_33073 === (11))){
var inst_33013 = (state_33072[(13)]);
var inst_33027 = (state_33072[(10)]);
var inst_33027__$1 = cljs.core.seq(inst_33013);
var state_33072__$1 = (function (){var statearr_33096 = state_33072;
(statearr_33096[(10)] = inst_33027__$1);

return statearr_33096;
})();
if(inst_33027__$1){
var statearr_33097_34120 = state_33072__$1;
(statearr_33097_34120[(1)] = (13));

} else {
var statearr_33098_34121 = state_33072__$1;
(statearr_33098_34121[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (9))){
var inst_33049 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33099_34122 = state_33072__$1;
(statearr_33099_34122[(2)] = inst_33049);

(statearr_33099_34122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (5))){
var inst_33010 = cljs.core.deref(mults);
var inst_33011 = cljs.core.vals(inst_33010);
var inst_33012 = cljs.core.seq(inst_33011);
var inst_33013 = inst_33012;
var inst_33014 = null;
var inst_33015 = (0);
var inst_33016 = (0);
var state_33072__$1 = (function (){var statearr_33100 = state_33072;
(statearr_33100[(12)] = inst_33015);

(statearr_33100[(13)] = inst_33013);

(statearr_33100[(15)] = inst_33016);

(statearr_33100[(16)] = inst_33014);

return statearr_33100;
})();
var statearr_33101_34124 = state_33072__$1;
(statearr_33101_34124[(2)] = null);

(statearr_33101_34124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (14))){
var state_33072__$1 = state_33072;
var statearr_33105_34125 = state_33072__$1;
(statearr_33105_34125[(2)] = null);

(statearr_33105_34125[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (16))){
var inst_33027 = (state_33072[(10)]);
var inst_33031 = cljs.core.chunk_first(inst_33027);
var inst_33032 = cljs.core.chunk_rest(inst_33027);
var inst_33033 = cljs.core.count(inst_33031);
var inst_33013 = inst_33032;
var inst_33014 = inst_33031;
var inst_33015 = inst_33033;
var inst_33016 = (0);
var state_33072__$1 = (function (){var statearr_33106 = state_33072;
(statearr_33106[(12)] = inst_33015);

(statearr_33106[(13)] = inst_33013);

(statearr_33106[(15)] = inst_33016);

(statearr_33106[(16)] = inst_33014);

return statearr_33106;
})();
var statearr_33107_34126 = state_33072__$1;
(statearr_33107_34126[(2)] = null);

(statearr_33107_34126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (10))){
var inst_33015 = (state_33072[(12)]);
var inst_33013 = (state_33072[(13)]);
var inst_33016 = (state_33072[(15)]);
var inst_33014 = (state_33072[(16)]);
var inst_33021 = cljs.core._nth(inst_33014,inst_33016);
var inst_33022 = cljs.core.async.muxch_STAR_(inst_33021);
var inst_33023 = cljs.core.async.close_BANG_(inst_33022);
var inst_33024 = (inst_33016 + (1));
var tmp33102 = inst_33015;
var tmp33103 = inst_33013;
var tmp33104 = inst_33014;
var inst_33013__$1 = tmp33103;
var inst_33014__$1 = tmp33104;
var inst_33015__$1 = tmp33102;
var inst_33016__$1 = inst_33024;
var state_33072__$1 = (function (){var statearr_33108 = state_33072;
(statearr_33108[(12)] = inst_33015__$1);

(statearr_33108[(13)] = inst_33013__$1);

(statearr_33108[(15)] = inst_33016__$1);

(statearr_33108[(16)] = inst_33014__$1);

(statearr_33108[(17)] = inst_33023);

return statearr_33108;
})();
var statearr_33109_34131 = state_33072__$1;
(statearr_33109_34131[(2)] = null);

(statearr_33109_34131[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (18))){
var inst_33042 = (state_33072[(2)]);
var state_33072__$1 = state_33072;
var statearr_33110_34133 = state_33072__$1;
(statearr_33110_34133[(2)] = inst_33042);

(statearr_33110_34133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33073 === (8))){
var inst_33015 = (state_33072[(12)]);
var inst_33016 = (state_33072[(15)]);
var inst_33018 = (inst_33016 < inst_33015);
var inst_33019 = inst_33018;
var state_33072__$1 = state_33072;
if(cljs.core.truth_(inst_33019)){
var statearr_33111_34134 = state_33072__$1;
(statearr_33111_34134[(1)] = (10));

} else {
var statearr_33112_34135 = state_33072__$1;
(statearr_33112_34135[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32042__auto__ = null;
var cljs$core$async$state_machine__32042__auto____0 = (function (){
var statearr_33113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33113[(0)] = cljs$core$async$state_machine__32042__auto__);

(statearr_33113[(1)] = (1));

return statearr_33113;
});
var cljs$core$async$state_machine__32042__auto____1 = (function (state_33072){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_33072);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e33114){var ex__32045__auto__ = e33114;
var statearr_33115_34137 = state_33072;
(statearr_33115_34137[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_33072[(4)]))){
var statearr_33116_34138 = state_33072;
(statearr_33116_34138[(1)] = cljs.core.first((state_33072[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34139 = state_33072;
state_33072 = G__34139;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$state_machine__32042__auto__ = function(state_33072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32042__auto____1.call(this,state_33072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32042__auto____0;
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32042__auto____1;
return cljs$core$async$state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_33117 = f__32103__auto__();
(statearr_33117[(6)] = c__32102__auto___34097);

return statearr_33117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33119 = arguments.length;
switch (G__33119) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33121 = arguments.length;
switch (G__33121) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33123 = arguments.length;
switch (G__33123) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__32102__auto___34147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_33166){
var state_val_33167 = (state_33166[(1)]);
if((state_val_33167 === (7))){
var state_33166__$1 = state_33166;
var statearr_33168_34148 = state_33166__$1;
(statearr_33168_34148[(2)] = null);

(statearr_33168_34148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (1))){
var state_33166__$1 = state_33166;
var statearr_33169_34149 = state_33166__$1;
(statearr_33169_34149[(2)] = null);

(statearr_33169_34149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (4))){
var inst_33126 = (state_33166[(7)]);
var inst_33127 = (state_33166[(8)]);
var inst_33129 = (inst_33127 < inst_33126);
var state_33166__$1 = state_33166;
if(cljs.core.truth_(inst_33129)){
var statearr_33170_34150 = state_33166__$1;
(statearr_33170_34150[(1)] = (6));

} else {
var statearr_33171_34151 = state_33166__$1;
(statearr_33171_34151[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (15))){
var inst_33152 = (state_33166[(9)]);
var inst_33157 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33152);
var state_33166__$1 = state_33166;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33166__$1,(17),out,inst_33157);
} else {
if((state_val_33167 === (13))){
var inst_33152 = (state_33166[(9)]);
var inst_33152__$1 = (state_33166[(2)]);
var inst_33153 = cljs.core.some(cljs.core.nil_QMARK_,inst_33152__$1);
var state_33166__$1 = (function (){var statearr_33172 = state_33166;
(statearr_33172[(9)] = inst_33152__$1);

return statearr_33172;
})();
if(cljs.core.truth_(inst_33153)){
var statearr_33173_34152 = state_33166__$1;
(statearr_33173_34152[(1)] = (14));

} else {
var statearr_33174_34153 = state_33166__$1;
(statearr_33174_34153[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (6))){
var state_33166__$1 = state_33166;
var statearr_33175_34154 = state_33166__$1;
(statearr_33175_34154[(2)] = null);

(statearr_33175_34154[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (17))){
var inst_33159 = (state_33166[(2)]);
var state_33166__$1 = (function (){var statearr_33177 = state_33166;
(statearr_33177[(10)] = inst_33159);

return statearr_33177;
})();
var statearr_33178_34155 = state_33166__$1;
(statearr_33178_34155[(2)] = null);

(statearr_33178_34155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (3))){
var inst_33164 = (state_33166[(2)]);
var state_33166__$1 = state_33166;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33166__$1,inst_33164);
} else {
if((state_val_33167 === (12))){
var _ = (function (){var statearr_33179 = state_33166;
(statearr_33179[(4)] = cljs.core.rest((state_33166[(4)])));

return statearr_33179;
})();
var state_33166__$1 = state_33166;
var ex33176 = (state_33166__$1[(2)]);
var statearr_33180_34156 = state_33166__$1;
(statearr_33180_34156[(5)] = ex33176);


if((ex33176 instanceof Object)){
var statearr_33181_34157 = state_33166__$1;
(statearr_33181_34157[(1)] = (11));

(statearr_33181_34157[(5)] = null);

} else {
throw ex33176;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (2))){
var inst_33125 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33126 = cnt;
var inst_33127 = (0);
var state_33166__$1 = (function (){var statearr_33182 = state_33166;
(statearr_33182[(7)] = inst_33126);

(statearr_33182[(11)] = inst_33125);

(statearr_33182[(8)] = inst_33127);

return statearr_33182;
})();
var statearr_33183_34158 = state_33166__$1;
(statearr_33183_34158[(2)] = null);

(statearr_33183_34158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (11))){
var inst_33131 = (state_33166[(2)]);
var inst_33132 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33166__$1 = (function (){var statearr_33184 = state_33166;
(statearr_33184[(12)] = inst_33131);

return statearr_33184;
})();
var statearr_33185_34159 = state_33166__$1;
(statearr_33185_34159[(2)] = inst_33132);

(statearr_33185_34159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (9))){
var inst_33127 = (state_33166[(8)]);
var _ = (function (){var statearr_33186 = state_33166;
(statearr_33186[(4)] = cljs.core.cons((12),(state_33166[(4)])));

return statearr_33186;
})();
var inst_33138 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33127) : chs__$1.call(null,inst_33127));
var inst_33139 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33127) : done.call(null,inst_33127));
var inst_33140 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33138,inst_33139);
var ___$1 = (function (){var statearr_33187 = state_33166;
(statearr_33187[(4)] = cljs.core.rest((state_33166[(4)])));

return statearr_33187;
})();
var state_33166__$1 = state_33166;
var statearr_33188_34161 = state_33166__$1;
(statearr_33188_34161[(2)] = inst_33140);

(statearr_33188_34161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (5))){
var inst_33150 = (state_33166[(2)]);
var state_33166__$1 = (function (){var statearr_33189 = state_33166;
(statearr_33189[(13)] = inst_33150);

return statearr_33189;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33166__$1,(13),dchan);
} else {
if((state_val_33167 === (14))){
var inst_33155 = cljs.core.async.close_BANG_(out);
var state_33166__$1 = state_33166;
var statearr_33190_34165 = state_33166__$1;
(statearr_33190_34165[(2)] = inst_33155);

(statearr_33190_34165[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (16))){
var inst_33162 = (state_33166[(2)]);
var state_33166__$1 = state_33166;
var statearr_33191_34166 = state_33166__$1;
(statearr_33191_34166[(2)] = inst_33162);

(statearr_33191_34166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (10))){
var inst_33127 = (state_33166[(8)]);
var inst_33143 = (state_33166[(2)]);
var inst_33144 = (inst_33127 + (1));
var inst_33127__$1 = inst_33144;
var state_33166__$1 = (function (){var statearr_33192 = state_33166;
(statearr_33192[(8)] = inst_33127__$1);

(statearr_33192[(14)] = inst_33143);

return statearr_33192;
})();
var statearr_33193_34167 = state_33166__$1;
(statearr_33193_34167[(2)] = null);

(statearr_33193_34167[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33167 === (8))){
var inst_33148 = (state_33166[(2)]);
var state_33166__$1 = state_33166;
var statearr_33194_34168 = state_33166__$1;
(statearr_33194_34168[(2)] = inst_33148);

(statearr_33194_34168[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32042__auto__ = null;
var cljs$core$async$state_machine__32042__auto____0 = (function (){
var statearr_33195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33195[(0)] = cljs$core$async$state_machine__32042__auto__);

(statearr_33195[(1)] = (1));

return statearr_33195;
});
var cljs$core$async$state_machine__32042__auto____1 = (function (state_33166){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_33166);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e33196){var ex__32045__auto__ = e33196;
var statearr_33197_34169 = state_33166;
(statearr_33197_34169[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_33166[(4)]))){
var statearr_33198_34170 = state_33166;
(statearr_33198_34170[(1)] = cljs.core.first((state_33166[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34171 = state_33166;
state_33166 = G__34171;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$state_machine__32042__auto__ = function(state_33166){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32042__auto____1.call(this,state_33166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32042__auto____0;
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32042__auto____1;
return cljs$core$async$state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_33199 = f__32103__auto__();
(statearr_33199[(6)] = c__32102__auto___34147);

return statearr_33199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33202 = arguments.length;
switch (G__33202) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32102__auto___34173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_33234){
var state_val_33235 = (state_33234[(1)]);
if((state_val_33235 === (7))){
var inst_33213 = (state_33234[(7)]);
var inst_33214 = (state_33234[(8)]);
var inst_33213__$1 = (state_33234[(2)]);
var inst_33214__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33213__$1,(0),null);
var inst_33215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33213__$1,(1),null);
var inst_33216 = (inst_33214__$1 == null);
var state_33234__$1 = (function (){var statearr_33236 = state_33234;
(statearr_33236[(9)] = inst_33215);

(statearr_33236[(7)] = inst_33213__$1);

(statearr_33236[(8)] = inst_33214__$1);

return statearr_33236;
})();
if(cljs.core.truth_(inst_33216)){
var statearr_33237_34174 = state_33234__$1;
(statearr_33237_34174[(1)] = (8));

} else {
var statearr_33238_34175 = state_33234__$1;
(statearr_33238_34175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33235 === (1))){
var inst_33203 = cljs.core.vec(chs);
var inst_33204 = inst_33203;
var state_33234__$1 = (function (){var statearr_33239 = state_33234;
(statearr_33239[(10)] = inst_33204);

return statearr_33239;
})();
var statearr_33240_34177 = state_33234__$1;
(statearr_33240_34177[(2)] = null);

(statearr_33240_34177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33235 === (4))){
var inst_33204 = (state_33234[(10)]);
var state_33234__$1 = state_33234;
return cljs.core.async.ioc_alts_BANG_(state_33234__$1,(7),inst_33204);
} else {
if((state_val_33235 === (6))){
var inst_33230 = (state_33234[(2)]);
var state_33234__$1 = state_33234;
var statearr_33241_34178 = state_33234__$1;
(statearr_33241_34178[(2)] = inst_33230);

(statearr_33241_34178[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33235 === (3))){
var inst_33232 = (state_33234[(2)]);
var state_33234__$1 = state_33234;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33234__$1,inst_33232);
} else {
if((state_val_33235 === (2))){
var inst_33204 = (state_33234[(10)]);
var inst_33206 = cljs.core.count(inst_33204);
var inst_33207 = (inst_33206 > (0));
var state_33234__$1 = state_33234;
if(cljs.core.truth_(inst_33207)){
var statearr_33243_34179 = state_33234__$1;
(statearr_33243_34179[(1)] = (4));

} else {
var statearr_33244_34180 = state_33234__$1;
(statearr_33244_34180[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33235 === (11))){
var inst_33204 = (state_33234[(10)]);
var inst_33223 = (state_33234[(2)]);
var tmp33242 = inst_33204;
var inst_33204__$1 = tmp33242;
var state_33234__$1 = (function (){var statearr_33245 = state_33234;
(statearr_33245[(11)] = inst_33223);

(statearr_33245[(10)] = inst_33204__$1);

return statearr_33245;
})();
var statearr_33246_34181 = state_33234__$1;
(statearr_33246_34181[(2)] = null);

(statearr_33246_34181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33235 === (9))){
var inst_33214 = (state_33234[(8)]);
var state_33234__$1 = state_33234;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33234__$1,(11),out,inst_33214);
} else {
if((state_val_33235 === (5))){
var inst_33228 = cljs.core.async.close_BANG_(out);
var state_33234__$1 = state_33234;
var statearr_33247_34182 = state_33234__$1;
(statearr_33247_34182[(2)] = inst_33228);

(statearr_33247_34182[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33235 === (10))){
var inst_33226 = (state_33234[(2)]);
var state_33234__$1 = state_33234;
var statearr_33248_34183 = state_33234__$1;
(statearr_33248_34183[(2)] = inst_33226);

(statearr_33248_34183[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33235 === (8))){
var inst_33215 = (state_33234[(9)]);
var inst_33213 = (state_33234[(7)]);
var inst_33214 = (state_33234[(8)]);
var inst_33204 = (state_33234[(10)]);
var inst_33218 = (function (){var cs = inst_33204;
var vec__33209 = inst_33213;
var v = inst_33214;
var c = inst_33215;
return (function (p1__33200_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33200_SHARP_);
});
})();
var inst_33219 = cljs.core.filterv(inst_33218,inst_33204);
var inst_33204__$1 = inst_33219;
var state_33234__$1 = (function (){var statearr_33249 = state_33234;
(statearr_33249[(10)] = inst_33204__$1);

return statearr_33249;
})();
var statearr_33250_34184 = state_33234__$1;
(statearr_33250_34184[(2)] = null);

(statearr_33250_34184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32042__auto__ = null;
var cljs$core$async$state_machine__32042__auto____0 = (function (){
var statearr_33251 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33251[(0)] = cljs$core$async$state_machine__32042__auto__);

(statearr_33251[(1)] = (1));

return statearr_33251;
});
var cljs$core$async$state_machine__32042__auto____1 = (function (state_33234){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_33234);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e33252){var ex__32045__auto__ = e33252;
var statearr_33253_34185 = state_33234;
(statearr_33253_34185[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_33234[(4)]))){
var statearr_33254_34186 = state_33234;
(statearr_33254_34186[(1)] = cljs.core.first((state_33234[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34187 = state_33234;
state_33234 = G__34187;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$state_machine__32042__auto__ = function(state_33234){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32042__auto____1.call(this,state_33234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32042__auto____0;
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32042__auto____1;
return cljs$core$async$state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_33255 = f__32103__auto__();
(statearr_33255[(6)] = c__32102__auto___34173);

return statearr_33255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33257 = arguments.length;
switch (G__33257) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32102__auto___34189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_33281){
var state_val_33282 = (state_33281[(1)]);
if((state_val_33282 === (7))){
var inst_33263 = (state_33281[(7)]);
var inst_33263__$1 = (state_33281[(2)]);
var inst_33264 = (inst_33263__$1 == null);
var inst_33265 = cljs.core.not(inst_33264);
var state_33281__$1 = (function (){var statearr_33283 = state_33281;
(statearr_33283[(7)] = inst_33263__$1);

return statearr_33283;
})();
if(inst_33265){
var statearr_33284_34190 = state_33281__$1;
(statearr_33284_34190[(1)] = (8));

} else {
var statearr_33285_34192 = state_33281__$1;
(statearr_33285_34192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (1))){
var inst_33258 = (0);
var state_33281__$1 = (function (){var statearr_33286 = state_33281;
(statearr_33286[(8)] = inst_33258);

return statearr_33286;
})();
var statearr_33287_34196 = state_33281__$1;
(statearr_33287_34196[(2)] = null);

(statearr_33287_34196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (4))){
var state_33281__$1 = state_33281;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33281__$1,(7),ch);
} else {
if((state_val_33282 === (6))){
var inst_33276 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
var statearr_33288_34197 = state_33281__$1;
(statearr_33288_34197[(2)] = inst_33276);

(statearr_33288_34197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (3))){
var inst_33278 = (state_33281[(2)]);
var inst_33279 = cljs.core.async.close_BANG_(out);
var state_33281__$1 = (function (){var statearr_33289 = state_33281;
(statearr_33289[(9)] = inst_33278);

return statearr_33289;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33281__$1,inst_33279);
} else {
if((state_val_33282 === (2))){
var inst_33258 = (state_33281[(8)]);
var inst_33260 = (inst_33258 < n);
var state_33281__$1 = state_33281;
if(cljs.core.truth_(inst_33260)){
var statearr_33290_34202 = state_33281__$1;
(statearr_33290_34202[(1)] = (4));

} else {
var statearr_33291_34203 = state_33281__$1;
(statearr_33291_34203[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (11))){
var inst_33258 = (state_33281[(8)]);
var inst_33268 = (state_33281[(2)]);
var inst_33269 = (inst_33258 + (1));
var inst_33258__$1 = inst_33269;
var state_33281__$1 = (function (){var statearr_33292 = state_33281;
(statearr_33292[(10)] = inst_33268);

(statearr_33292[(8)] = inst_33258__$1);

return statearr_33292;
})();
var statearr_33293_34204 = state_33281__$1;
(statearr_33293_34204[(2)] = null);

(statearr_33293_34204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (9))){
var state_33281__$1 = state_33281;
var statearr_33294_34206 = state_33281__$1;
(statearr_33294_34206[(2)] = null);

(statearr_33294_34206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (5))){
var state_33281__$1 = state_33281;
var statearr_33295_34207 = state_33281__$1;
(statearr_33295_34207[(2)] = null);

(statearr_33295_34207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (10))){
var inst_33273 = (state_33281[(2)]);
var state_33281__$1 = state_33281;
var statearr_33296_34209 = state_33281__$1;
(statearr_33296_34209[(2)] = inst_33273);

(statearr_33296_34209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33282 === (8))){
var inst_33263 = (state_33281[(7)]);
var state_33281__$1 = state_33281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33281__$1,(11),out,inst_33263);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32042__auto__ = null;
var cljs$core$async$state_machine__32042__auto____0 = (function (){
var statearr_33297 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33297[(0)] = cljs$core$async$state_machine__32042__auto__);

(statearr_33297[(1)] = (1));

return statearr_33297;
});
var cljs$core$async$state_machine__32042__auto____1 = (function (state_33281){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_33281);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e33298){var ex__32045__auto__ = e33298;
var statearr_33299_34210 = state_33281;
(statearr_33299_34210[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_33281[(4)]))){
var statearr_33300_34211 = state_33281;
(statearr_33300_34211[(1)] = cljs.core.first((state_33281[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34212 = state_33281;
state_33281 = G__34212;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$state_machine__32042__auto__ = function(state_33281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32042__auto____1.call(this,state_33281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32042__auto____0;
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32042__auto____1;
return cljs$core$async$state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_33301 = f__32103__auto__();
(statearr_33301[(6)] = c__32102__auto___34189);

return statearr_33301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33303 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33303 = (function (f,ch,meta33304){
this.f = f;
this.ch = ch;
this.meta33304 = meta33304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33305,meta33304__$1){
var self__ = this;
var _33305__$1 = this;
return (new cljs.core.async.t_cljs$core$async33303(self__.f,self__.ch,meta33304__$1));
}));

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33305){
var self__ = this;
var _33305__$1 = this;
return self__.meta33304;
}));

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33306 = (function (f,ch,meta33304,_,fn1,meta33307){
this.f = f;
this.ch = ch;
this.meta33304 = meta33304;
this._ = _;
this.fn1 = fn1;
this.meta33307 = meta33307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33308,meta33307__$1){
var self__ = this;
var _33308__$1 = this;
return (new cljs.core.async.t_cljs$core$async33306(self__.f,self__.ch,self__.meta33304,self__._,self__.fn1,meta33307__$1));
}));

(cljs.core.async.t_cljs$core$async33306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33308){
var self__ = this;
var _33308__$1 = this;
return self__.meta33307;
}));

(cljs.core.async.t_cljs$core$async33306.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33306.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33302_SHARP_){
var G__33309 = (((p1__33302_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33302_SHARP_) : self__.f.call(null,p1__33302_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33309) : f1.call(null,G__33309));
});
}));

(cljs.core.async.t_cljs$core$async33306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33304","meta33304",-1671634224,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33303","cljs.core.async/t_cljs$core$async33303",-73134696,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33307","meta33307",1579055410,null)], null);
}));

(cljs.core.async.t_cljs$core$async33306.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33306");

(cljs.core.async.t_cljs$core$async33306.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33306");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33306.
 */
cljs.core.async.__GT_t_cljs$core$async33306 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33306(f__$1,ch__$1,meta33304__$1,___$2,fn1__$1,meta33307){
return (new cljs.core.async.t_cljs$core$async33306(f__$1,ch__$1,meta33304__$1,___$2,fn1__$1,meta33307));
});

}

return (new cljs.core.async.t_cljs$core$async33306(self__.f,self__.ch,self__.meta33304,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33310 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33310) : self__.f.call(null,G__33310));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33304","meta33304",-1671634224,null)], null);
}));

(cljs.core.async.t_cljs$core$async33303.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33303");

(cljs.core.async.t_cljs$core$async33303.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33303");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33303.
 */
cljs.core.async.__GT_t_cljs$core$async33303 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33303(f__$1,ch__$1,meta33304){
return (new cljs.core.async.t_cljs$core$async33303(f__$1,ch__$1,meta33304));
});

}

return (new cljs.core.async.t_cljs$core$async33303(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33311 = (function (f,ch,meta33312){
this.f = f;
this.ch = ch;
this.meta33312 = meta33312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33313,meta33312__$1){
var self__ = this;
var _33313__$1 = this;
return (new cljs.core.async.t_cljs$core$async33311(self__.f,self__.ch,meta33312__$1));
}));

(cljs.core.async.t_cljs$core$async33311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33313){
var self__ = this;
var _33313__$1 = this;
return self__.meta33312;
}));

(cljs.core.async.t_cljs$core$async33311.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33311.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33311.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33311.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33311.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33311.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33312","meta33312",-112836915,null)], null);
}));

(cljs.core.async.t_cljs$core$async33311.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33311");

(cljs.core.async.t_cljs$core$async33311.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33311");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33311.
 */
cljs.core.async.__GT_t_cljs$core$async33311 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33311(f__$1,ch__$1,meta33312){
return (new cljs.core.async.t_cljs$core$async33311(f__$1,ch__$1,meta33312));
});

}

return (new cljs.core.async.t_cljs$core$async33311(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33314 = (function (p,ch,meta33315){
this.p = p;
this.ch = ch;
this.meta33315 = meta33315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33316,meta33315__$1){
var self__ = this;
var _33316__$1 = this;
return (new cljs.core.async.t_cljs$core$async33314(self__.p,self__.ch,meta33315__$1));
}));

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33316){
var self__ = this;
var _33316__$1 = this;
return self__.meta33315;
}));

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33314.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33315","meta33315",-1858914558,null)], null);
}));

(cljs.core.async.t_cljs$core$async33314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33314");

(cljs.core.async.t_cljs$core$async33314.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33314.
 */
cljs.core.async.__GT_t_cljs$core$async33314 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33314(p__$1,ch__$1,meta33315){
return (new cljs.core.async.t_cljs$core$async33314(p__$1,ch__$1,meta33315));
});

}

return (new cljs.core.async.t_cljs$core$async33314(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33318 = arguments.length;
switch (G__33318) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32102__auto___34224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_33339){
var state_val_33340 = (state_33339[(1)]);
if((state_val_33340 === (7))){
var inst_33335 = (state_33339[(2)]);
var state_33339__$1 = state_33339;
var statearr_33341_34228 = state_33339__$1;
(statearr_33341_34228[(2)] = inst_33335);

(statearr_33341_34228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (1))){
var state_33339__$1 = state_33339;
var statearr_33342_34229 = state_33339__$1;
(statearr_33342_34229[(2)] = null);

(statearr_33342_34229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (4))){
var inst_33321 = (state_33339[(7)]);
var inst_33321__$1 = (state_33339[(2)]);
var inst_33322 = (inst_33321__$1 == null);
var state_33339__$1 = (function (){var statearr_33343 = state_33339;
(statearr_33343[(7)] = inst_33321__$1);

return statearr_33343;
})();
if(cljs.core.truth_(inst_33322)){
var statearr_33344_34230 = state_33339__$1;
(statearr_33344_34230[(1)] = (5));

} else {
var statearr_33345_34231 = state_33339__$1;
(statearr_33345_34231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (6))){
var inst_33321 = (state_33339[(7)]);
var inst_33326 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33321) : p.call(null,inst_33321));
var state_33339__$1 = state_33339;
if(cljs.core.truth_(inst_33326)){
var statearr_33346_34232 = state_33339__$1;
(statearr_33346_34232[(1)] = (8));

} else {
var statearr_33347_34236 = state_33339__$1;
(statearr_33347_34236[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (3))){
var inst_33337 = (state_33339[(2)]);
var state_33339__$1 = state_33339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33339__$1,inst_33337);
} else {
if((state_val_33340 === (2))){
var state_33339__$1 = state_33339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33339__$1,(4),ch);
} else {
if((state_val_33340 === (11))){
var inst_33329 = (state_33339[(2)]);
var state_33339__$1 = state_33339;
var statearr_33348_34237 = state_33339__$1;
(statearr_33348_34237[(2)] = inst_33329);

(statearr_33348_34237[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (9))){
var state_33339__$1 = state_33339;
var statearr_33349_34238 = state_33339__$1;
(statearr_33349_34238[(2)] = null);

(statearr_33349_34238[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (5))){
var inst_33324 = cljs.core.async.close_BANG_(out);
var state_33339__$1 = state_33339;
var statearr_33350_34239 = state_33339__$1;
(statearr_33350_34239[(2)] = inst_33324);

(statearr_33350_34239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (10))){
var inst_33332 = (state_33339[(2)]);
var state_33339__$1 = (function (){var statearr_33351 = state_33339;
(statearr_33351[(8)] = inst_33332);

return statearr_33351;
})();
var statearr_33352_34240 = state_33339__$1;
(statearr_33352_34240[(2)] = null);

(statearr_33352_34240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33340 === (8))){
var inst_33321 = (state_33339[(7)]);
var state_33339__$1 = state_33339;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33339__$1,(11),out,inst_33321);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32042__auto__ = null;
var cljs$core$async$state_machine__32042__auto____0 = (function (){
var statearr_33353 = [null,null,null,null,null,null,null,null,null];
(statearr_33353[(0)] = cljs$core$async$state_machine__32042__auto__);

(statearr_33353[(1)] = (1));

return statearr_33353;
});
var cljs$core$async$state_machine__32042__auto____1 = (function (state_33339){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_33339);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e33354){var ex__32045__auto__ = e33354;
var statearr_33355_34244 = state_33339;
(statearr_33355_34244[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_33339[(4)]))){
var statearr_33356_34245 = state_33339;
(statearr_33356_34245[(1)] = cljs.core.first((state_33339[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34246 = state_33339;
state_33339 = G__34246;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$state_machine__32042__auto__ = function(state_33339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32042__auto____1.call(this,state_33339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32042__auto____0;
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32042__auto____1;
return cljs$core$async$state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_33357 = f__32103__auto__();
(statearr_33357[(6)] = c__32102__auto___34224);

return statearr_33357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33359 = arguments.length;
switch (G__33359) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32102__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_33421){
var state_val_33422 = (state_33421[(1)]);
if((state_val_33422 === (7))){
var inst_33417 = (state_33421[(2)]);
var state_33421__$1 = state_33421;
var statearr_33423_34249 = state_33421__$1;
(statearr_33423_34249[(2)] = inst_33417);

(statearr_33423_34249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (20))){
var inst_33387 = (state_33421[(7)]);
var inst_33398 = (state_33421[(2)]);
var inst_33399 = cljs.core.next(inst_33387);
var inst_33373 = inst_33399;
var inst_33374 = null;
var inst_33375 = (0);
var inst_33376 = (0);
var state_33421__$1 = (function (){var statearr_33424 = state_33421;
(statearr_33424[(8)] = inst_33375);

(statearr_33424[(9)] = inst_33373);

(statearr_33424[(10)] = inst_33398);

(statearr_33424[(11)] = inst_33376);

(statearr_33424[(12)] = inst_33374);

return statearr_33424;
})();
var statearr_33425_34259 = state_33421__$1;
(statearr_33425_34259[(2)] = null);

(statearr_33425_34259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (1))){
var state_33421__$1 = state_33421;
var statearr_33426_34260 = state_33421__$1;
(statearr_33426_34260[(2)] = null);

(statearr_33426_34260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (4))){
var inst_33362 = (state_33421[(13)]);
var inst_33362__$1 = (state_33421[(2)]);
var inst_33363 = (inst_33362__$1 == null);
var state_33421__$1 = (function (){var statearr_33427 = state_33421;
(statearr_33427[(13)] = inst_33362__$1);

return statearr_33427;
})();
if(cljs.core.truth_(inst_33363)){
var statearr_33428_34261 = state_33421__$1;
(statearr_33428_34261[(1)] = (5));

} else {
var statearr_33429_34262 = state_33421__$1;
(statearr_33429_34262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (15))){
var state_33421__$1 = state_33421;
var statearr_33433_34269 = state_33421__$1;
(statearr_33433_34269[(2)] = null);

(statearr_33433_34269[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (21))){
var state_33421__$1 = state_33421;
var statearr_33434_34270 = state_33421__$1;
(statearr_33434_34270[(2)] = null);

(statearr_33434_34270[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (13))){
var inst_33375 = (state_33421[(8)]);
var inst_33373 = (state_33421[(9)]);
var inst_33376 = (state_33421[(11)]);
var inst_33374 = (state_33421[(12)]);
var inst_33383 = (state_33421[(2)]);
var inst_33384 = (inst_33376 + (1));
var tmp33430 = inst_33375;
var tmp33431 = inst_33373;
var tmp33432 = inst_33374;
var inst_33373__$1 = tmp33431;
var inst_33374__$1 = tmp33432;
var inst_33375__$1 = tmp33430;
var inst_33376__$1 = inst_33384;
var state_33421__$1 = (function (){var statearr_33435 = state_33421;
(statearr_33435[(8)] = inst_33375__$1);

(statearr_33435[(14)] = inst_33383);

(statearr_33435[(9)] = inst_33373__$1);

(statearr_33435[(11)] = inst_33376__$1);

(statearr_33435[(12)] = inst_33374__$1);

return statearr_33435;
})();
var statearr_33436_34271 = state_33421__$1;
(statearr_33436_34271[(2)] = null);

(statearr_33436_34271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (22))){
var state_33421__$1 = state_33421;
var statearr_33437_34272 = state_33421__$1;
(statearr_33437_34272[(2)] = null);

(statearr_33437_34272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (6))){
var inst_33362 = (state_33421[(13)]);
var inst_33371 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33362) : f.call(null,inst_33362));
var inst_33372 = cljs.core.seq(inst_33371);
var inst_33373 = inst_33372;
var inst_33374 = null;
var inst_33375 = (0);
var inst_33376 = (0);
var state_33421__$1 = (function (){var statearr_33438 = state_33421;
(statearr_33438[(8)] = inst_33375);

(statearr_33438[(9)] = inst_33373);

(statearr_33438[(11)] = inst_33376);

(statearr_33438[(12)] = inst_33374);

return statearr_33438;
})();
var statearr_33439_34273 = state_33421__$1;
(statearr_33439_34273[(2)] = null);

(statearr_33439_34273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (17))){
var inst_33387 = (state_33421[(7)]);
var inst_33391 = cljs.core.chunk_first(inst_33387);
var inst_33392 = cljs.core.chunk_rest(inst_33387);
var inst_33393 = cljs.core.count(inst_33391);
var inst_33373 = inst_33392;
var inst_33374 = inst_33391;
var inst_33375 = inst_33393;
var inst_33376 = (0);
var state_33421__$1 = (function (){var statearr_33440 = state_33421;
(statearr_33440[(8)] = inst_33375);

(statearr_33440[(9)] = inst_33373);

(statearr_33440[(11)] = inst_33376);

(statearr_33440[(12)] = inst_33374);

return statearr_33440;
})();
var statearr_33441_34274 = state_33421__$1;
(statearr_33441_34274[(2)] = null);

(statearr_33441_34274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (3))){
var inst_33419 = (state_33421[(2)]);
var state_33421__$1 = state_33421;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33421__$1,inst_33419);
} else {
if((state_val_33422 === (12))){
var inst_33407 = (state_33421[(2)]);
var state_33421__$1 = state_33421;
var statearr_33442_34275 = state_33421__$1;
(statearr_33442_34275[(2)] = inst_33407);

(statearr_33442_34275[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (2))){
var state_33421__$1 = state_33421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33421__$1,(4),in$);
} else {
if((state_val_33422 === (23))){
var inst_33415 = (state_33421[(2)]);
var state_33421__$1 = state_33421;
var statearr_33443_34276 = state_33421__$1;
(statearr_33443_34276[(2)] = inst_33415);

(statearr_33443_34276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (19))){
var inst_33402 = (state_33421[(2)]);
var state_33421__$1 = state_33421;
var statearr_33444_34277 = state_33421__$1;
(statearr_33444_34277[(2)] = inst_33402);

(statearr_33444_34277[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (11))){
var inst_33373 = (state_33421[(9)]);
var inst_33387 = (state_33421[(7)]);
var inst_33387__$1 = cljs.core.seq(inst_33373);
var state_33421__$1 = (function (){var statearr_33445 = state_33421;
(statearr_33445[(7)] = inst_33387__$1);

return statearr_33445;
})();
if(inst_33387__$1){
var statearr_33446_34278 = state_33421__$1;
(statearr_33446_34278[(1)] = (14));

} else {
var statearr_33447_34279 = state_33421__$1;
(statearr_33447_34279[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (9))){
var inst_33409 = (state_33421[(2)]);
var inst_33410 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33421__$1 = (function (){var statearr_33448 = state_33421;
(statearr_33448[(15)] = inst_33409);

return statearr_33448;
})();
if(cljs.core.truth_(inst_33410)){
var statearr_33449_34285 = state_33421__$1;
(statearr_33449_34285[(1)] = (21));

} else {
var statearr_33450_34287 = state_33421__$1;
(statearr_33450_34287[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (5))){
var inst_33365 = cljs.core.async.close_BANG_(out);
var state_33421__$1 = state_33421;
var statearr_33451_34288 = state_33421__$1;
(statearr_33451_34288[(2)] = inst_33365);

(statearr_33451_34288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (14))){
var inst_33387 = (state_33421[(7)]);
var inst_33389 = cljs.core.chunked_seq_QMARK_(inst_33387);
var state_33421__$1 = state_33421;
if(inst_33389){
var statearr_33452_34289 = state_33421__$1;
(statearr_33452_34289[(1)] = (17));

} else {
var statearr_33453_34290 = state_33421__$1;
(statearr_33453_34290[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (16))){
var inst_33405 = (state_33421[(2)]);
var state_33421__$1 = state_33421;
var statearr_33454_34291 = state_33421__$1;
(statearr_33454_34291[(2)] = inst_33405);

(statearr_33454_34291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33422 === (10))){
var inst_33376 = (state_33421[(11)]);
var inst_33374 = (state_33421[(12)]);
var inst_33381 = cljs.core._nth(inst_33374,inst_33376);
var state_33421__$1 = state_33421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33421__$1,(13),out,inst_33381);
} else {
if((state_val_33422 === (18))){
var inst_33387 = (state_33421[(7)]);
var inst_33396 = cljs.core.first(inst_33387);
var state_33421__$1 = state_33421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33421__$1,(20),out,inst_33396);
} else {
if((state_val_33422 === (8))){
var inst_33375 = (state_33421[(8)]);
var inst_33376 = (state_33421[(11)]);
var inst_33378 = (inst_33376 < inst_33375);
var inst_33379 = inst_33378;
var state_33421__$1 = state_33421;
if(cljs.core.truth_(inst_33379)){
var statearr_33455_34292 = state_33421__$1;
(statearr_33455_34292[(1)] = (10));

} else {
var statearr_33456_34293 = state_33421__$1;
(statearr_33456_34293[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32042__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32042__auto____0 = (function (){
var statearr_33457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33457[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32042__auto__);

(statearr_33457[(1)] = (1));

return statearr_33457;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32042__auto____1 = (function (state_33421){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_33421);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e33458){var ex__32045__auto__ = e33458;
var statearr_33459_34294 = state_33421;
(statearr_33459_34294[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_33421[(4)]))){
var statearr_33460_34295 = state_33421;
(statearr_33460_34295[(1)] = cljs.core.first((state_33421[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34296 = state_33421;
state_33421 = G__34296;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32042__auto__ = function(state_33421){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32042__auto____1.call(this,state_33421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32042__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32042__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_33461 = f__32103__auto__();
(statearr_33461[(6)] = c__32102__auto__);

return statearr_33461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));

return c__32102__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33463 = arguments.length;
switch (G__33463) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33465 = arguments.length;
switch (G__33465) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33467 = arguments.length;
switch (G__33467) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32102__auto___34306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_33491){
var state_val_33492 = (state_33491[(1)]);
if((state_val_33492 === (7))){
var inst_33486 = (state_33491[(2)]);
var state_33491__$1 = state_33491;
var statearr_33493_34307 = state_33491__$1;
(statearr_33493_34307[(2)] = inst_33486);

(statearr_33493_34307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33492 === (1))){
var inst_33468 = null;
var state_33491__$1 = (function (){var statearr_33494 = state_33491;
(statearr_33494[(7)] = inst_33468);

return statearr_33494;
})();
var statearr_33495_34308 = state_33491__$1;
(statearr_33495_34308[(2)] = null);

(statearr_33495_34308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33492 === (4))){
var inst_33471 = (state_33491[(8)]);
var inst_33471__$1 = (state_33491[(2)]);
var inst_33472 = (inst_33471__$1 == null);
var inst_33473 = cljs.core.not(inst_33472);
var state_33491__$1 = (function (){var statearr_33496 = state_33491;
(statearr_33496[(8)] = inst_33471__$1);

return statearr_33496;
})();
if(inst_33473){
var statearr_33497_34309 = state_33491__$1;
(statearr_33497_34309[(1)] = (5));

} else {
var statearr_33498_34310 = state_33491__$1;
(statearr_33498_34310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33492 === (6))){
var state_33491__$1 = state_33491;
var statearr_33499_34311 = state_33491__$1;
(statearr_33499_34311[(2)] = null);

(statearr_33499_34311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33492 === (3))){
var inst_33488 = (state_33491[(2)]);
var inst_33489 = cljs.core.async.close_BANG_(out);
var state_33491__$1 = (function (){var statearr_33500 = state_33491;
(statearr_33500[(9)] = inst_33488);

return statearr_33500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33491__$1,inst_33489);
} else {
if((state_val_33492 === (2))){
var state_33491__$1 = state_33491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33491__$1,(4),ch);
} else {
if((state_val_33492 === (11))){
var inst_33471 = (state_33491[(8)]);
var inst_33480 = (state_33491[(2)]);
var inst_33468 = inst_33471;
var state_33491__$1 = (function (){var statearr_33501 = state_33491;
(statearr_33501[(7)] = inst_33468);

(statearr_33501[(10)] = inst_33480);

return statearr_33501;
})();
var statearr_33502_34312 = state_33491__$1;
(statearr_33502_34312[(2)] = null);

(statearr_33502_34312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33492 === (9))){
var inst_33471 = (state_33491[(8)]);
var state_33491__$1 = state_33491;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33491__$1,(11),out,inst_33471);
} else {
if((state_val_33492 === (5))){
var inst_33468 = (state_33491[(7)]);
var inst_33471 = (state_33491[(8)]);
var inst_33475 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33471,inst_33468);
var state_33491__$1 = state_33491;
if(inst_33475){
var statearr_33504_34313 = state_33491__$1;
(statearr_33504_34313[(1)] = (8));

} else {
var statearr_33505_34314 = state_33491__$1;
(statearr_33505_34314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33492 === (10))){
var inst_33483 = (state_33491[(2)]);
var state_33491__$1 = state_33491;
var statearr_33506_34315 = state_33491__$1;
(statearr_33506_34315[(2)] = inst_33483);

(statearr_33506_34315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33492 === (8))){
var inst_33468 = (state_33491[(7)]);
var tmp33503 = inst_33468;
var inst_33468__$1 = tmp33503;
var state_33491__$1 = (function (){var statearr_33507 = state_33491;
(statearr_33507[(7)] = inst_33468__$1);

return statearr_33507;
})();
var statearr_33508_34316 = state_33491__$1;
(statearr_33508_34316[(2)] = null);

(statearr_33508_34316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32042__auto__ = null;
var cljs$core$async$state_machine__32042__auto____0 = (function (){
var statearr_33509 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33509[(0)] = cljs$core$async$state_machine__32042__auto__);

(statearr_33509[(1)] = (1));

return statearr_33509;
});
var cljs$core$async$state_machine__32042__auto____1 = (function (state_33491){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_33491);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e33510){var ex__32045__auto__ = e33510;
var statearr_33511_34317 = state_33491;
(statearr_33511_34317[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_33491[(4)]))){
var statearr_33512_34324 = state_33491;
(statearr_33512_34324[(1)] = cljs.core.first((state_33491[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34325 = state_33491;
state_33491 = G__34325;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$state_machine__32042__auto__ = function(state_33491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32042__auto____1.call(this,state_33491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32042__auto____0;
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32042__auto____1;
return cljs$core$async$state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_33513 = f__32103__auto__();
(statearr_33513[(6)] = c__32102__auto___34306);

return statearr_33513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33515 = arguments.length;
switch (G__33515) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32102__auto___34327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_33553){
var state_val_33554 = (state_33553[(1)]);
if((state_val_33554 === (7))){
var inst_33549 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33555_34328 = state_33553__$1;
(statearr_33555_34328[(2)] = inst_33549);

(statearr_33555_34328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (1))){
var inst_33516 = (new Array(n));
var inst_33517 = inst_33516;
var inst_33518 = (0);
var state_33553__$1 = (function (){var statearr_33556 = state_33553;
(statearr_33556[(7)] = inst_33518);

(statearr_33556[(8)] = inst_33517);

return statearr_33556;
})();
var statearr_33557_34329 = state_33553__$1;
(statearr_33557_34329[(2)] = null);

(statearr_33557_34329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (4))){
var inst_33521 = (state_33553[(9)]);
var inst_33521__$1 = (state_33553[(2)]);
var inst_33522 = (inst_33521__$1 == null);
var inst_33523 = cljs.core.not(inst_33522);
var state_33553__$1 = (function (){var statearr_33558 = state_33553;
(statearr_33558[(9)] = inst_33521__$1);

return statearr_33558;
})();
if(inst_33523){
var statearr_33559_34330 = state_33553__$1;
(statearr_33559_34330[(1)] = (5));

} else {
var statearr_33560_34331 = state_33553__$1;
(statearr_33560_34331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (15))){
var inst_33543 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33561_34332 = state_33553__$1;
(statearr_33561_34332[(2)] = inst_33543);

(statearr_33561_34332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (13))){
var state_33553__$1 = state_33553;
var statearr_33562_34333 = state_33553__$1;
(statearr_33562_34333[(2)] = null);

(statearr_33562_34333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (6))){
var inst_33518 = (state_33553[(7)]);
var inst_33539 = (inst_33518 > (0));
var state_33553__$1 = state_33553;
if(cljs.core.truth_(inst_33539)){
var statearr_33563_34334 = state_33553__$1;
(statearr_33563_34334[(1)] = (12));

} else {
var statearr_33564_34335 = state_33553__$1;
(statearr_33564_34335[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (3))){
var inst_33551 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33553__$1,inst_33551);
} else {
if((state_val_33554 === (12))){
var inst_33517 = (state_33553[(8)]);
var inst_33541 = cljs.core.vec(inst_33517);
var state_33553__$1 = state_33553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33553__$1,(15),out,inst_33541);
} else {
if((state_val_33554 === (2))){
var state_33553__$1 = state_33553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33553__$1,(4),ch);
} else {
if((state_val_33554 === (11))){
var inst_33533 = (state_33553[(2)]);
var inst_33534 = (new Array(n));
var inst_33517 = inst_33534;
var inst_33518 = (0);
var state_33553__$1 = (function (){var statearr_33565 = state_33553;
(statearr_33565[(7)] = inst_33518);

(statearr_33565[(10)] = inst_33533);

(statearr_33565[(8)] = inst_33517);

return statearr_33565;
})();
var statearr_33566_34336 = state_33553__$1;
(statearr_33566_34336[(2)] = null);

(statearr_33566_34336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (9))){
var inst_33517 = (state_33553[(8)]);
var inst_33531 = cljs.core.vec(inst_33517);
var state_33553__$1 = state_33553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33553__$1,(11),out,inst_33531);
} else {
if((state_val_33554 === (5))){
var inst_33526 = (state_33553[(11)]);
var inst_33518 = (state_33553[(7)]);
var inst_33517 = (state_33553[(8)]);
var inst_33521 = (state_33553[(9)]);
var inst_33525 = (inst_33517[inst_33518] = inst_33521);
var inst_33526__$1 = (inst_33518 + (1));
var inst_33527 = (inst_33526__$1 < n);
var state_33553__$1 = (function (){var statearr_33567 = state_33553;
(statearr_33567[(11)] = inst_33526__$1);

(statearr_33567[(12)] = inst_33525);

return statearr_33567;
})();
if(cljs.core.truth_(inst_33527)){
var statearr_33568_34337 = state_33553__$1;
(statearr_33568_34337[(1)] = (8));

} else {
var statearr_33569_34338 = state_33553__$1;
(statearr_33569_34338[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (14))){
var inst_33546 = (state_33553[(2)]);
var inst_33547 = cljs.core.async.close_BANG_(out);
var state_33553__$1 = (function (){var statearr_33571 = state_33553;
(statearr_33571[(13)] = inst_33546);

return statearr_33571;
})();
var statearr_33572_34339 = state_33553__$1;
(statearr_33572_34339[(2)] = inst_33547);

(statearr_33572_34339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (10))){
var inst_33537 = (state_33553[(2)]);
var state_33553__$1 = state_33553;
var statearr_33573_34340 = state_33553__$1;
(statearr_33573_34340[(2)] = inst_33537);

(statearr_33573_34340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33554 === (8))){
var inst_33526 = (state_33553[(11)]);
var inst_33517 = (state_33553[(8)]);
var tmp33570 = inst_33517;
var inst_33517__$1 = tmp33570;
var inst_33518 = inst_33526;
var state_33553__$1 = (function (){var statearr_33574 = state_33553;
(statearr_33574[(7)] = inst_33518);

(statearr_33574[(8)] = inst_33517__$1);

return statearr_33574;
})();
var statearr_33575_34343 = state_33553__$1;
(statearr_33575_34343[(2)] = null);

(statearr_33575_34343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32042__auto__ = null;
var cljs$core$async$state_machine__32042__auto____0 = (function (){
var statearr_33576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33576[(0)] = cljs$core$async$state_machine__32042__auto__);

(statearr_33576[(1)] = (1));

return statearr_33576;
});
var cljs$core$async$state_machine__32042__auto____1 = (function (state_33553){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_33553);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e33577){var ex__32045__auto__ = e33577;
var statearr_33578_34344 = state_33553;
(statearr_33578_34344[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_33553[(4)]))){
var statearr_33579_34345 = state_33553;
(statearr_33579_34345[(1)] = cljs.core.first((state_33553[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34346 = state_33553;
state_33553 = G__34346;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$state_machine__32042__auto__ = function(state_33553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32042__auto____1.call(this,state_33553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32042__auto____0;
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32042__auto____1;
return cljs$core$async$state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_33580 = f__32103__auto__();
(statearr_33580[(6)] = c__32102__auto___34327);

return statearr_33580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33582 = arguments.length;
switch (G__33582) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32102__auto___34348 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_33627){
var state_val_33628 = (state_33627[(1)]);
if((state_val_33628 === (7))){
var inst_33623 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33629_34349 = state_33627__$1;
(statearr_33629_34349[(2)] = inst_33623);

(statearr_33629_34349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (1))){
var inst_33583 = [];
var inst_33584 = inst_33583;
var inst_33585 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33627__$1 = (function (){var statearr_33630 = state_33627;
(statearr_33630[(7)] = inst_33584);

(statearr_33630[(8)] = inst_33585);

return statearr_33630;
})();
var statearr_33631_34351 = state_33627__$1;
(statearr_33631_34351[(2)] = null);

(statearr_33631_34351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (4))){
var inst_33588 = (state_33627[(9)]);
var inst_33588__$1 = (state_33627[(2)]);
var inst_33589 = (inst_33588__$1 == null);
var inst_33590 = cljs.core.not(inst_33589);
var state_33627__$1 = (function (){var statearr_33632 = state_33627;
(statearr_33632[(9)] = inst_33588__$1);

return statearr_33632;
})();
if(inst_33590){
var statearr_33633_34353 = state_33627__$1;
(statearr_33633_34353[(1)] = (5));

} else {
var statearr_33634_34354 = state_33627__$1;
(statearr_33634_34354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (15))){
var inst_33584 = (state_33627[(7)]);
var inst_33615 = cljs.core.vec(inst_33584);
var state_33627__$1 = state_33627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33627__$1,(18),out,inst_33615);
} else {
if((state_val_33628 === (13))){
var inst_33610 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33635_34355 = state_33627__$1;
(statearr_33635_34355[(2)] = inst_33610);

(statearr_33635_34355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (6))){
var inst_33584 = (state_33627[(7)]);
var inst_33612 = inst_33584.length;
var inst_33613 = (inst_33612 > (0));
var state_33627__$1 = state_33627;
if(cljs.core.truth_(inst_33613)){
var statearr_33636_34356 = state_33627__$1;
(statearr_33636_34356[(1)] = (15));

} else {
var statearr_33637_34357 = state_33627__$1;
(statearr_33637_34357[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (17))){
var inst_33620 = (state_33627[(2)]);
var inst_33621 = cljs.core.async.close_BANG_(out);
var state_33627__$1 = (function (){var statearr_33638 = state_33627;
(statearr_33638[(10)] = inst_33620);

return statearr_33638;
})();
var statearr_33639_34358 = state_33627__$1;
(statearr_33639_34358[(2)] = inst_33621);

(statearr_33639_34358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (3))){
var inst_33625 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33627__$1,inst_33625);
} else {
if((state_val_33628 === (12))){
var inst_33584 = (state_33627[(7)]);
var inst_33603 = cljs.core.vec(inst_33584);
var state_33627__$1 = state_33627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33627__$1,(14),out,inst_33603);
} else {
if((state_val_33628 === (2))){
var state_33627__$1 = state_33627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33627__$1,(4),ch);
} else {
if((state_val_33628 === (11))){
var inst_33588 = (state_33627[(9)]);
var inst_33584 = (state_33627[(7)]);
var inst_33592 = (state_33627[(11)]);
var inst_33600 = inst_33584.push(inst_33588);
var tmp33640 = inst_33584;
var inst_33584__$1 = tmp33640;
var inst_33585 = inst_33592;
var state_33627__$1 = (function (){var statearr_33641 = state_33627;
(statearr_33641[(7)] = inst_33584__$1);

(statearr_33641[(12)] = inst_33600);

(statearr_33641[(8)] = inst_33585);

return statearr_33641;
})();
var statearr_33642_34359 = state_33627__$1;
(statearr_33642_34359[(2)] = null);

(statearr_33642_34359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (9))){
var inst_33585 = (state_33627[(8)]);
var inst_33596 = cljs.core.keyword_identical_QMARK_(inst_33585,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33627__$1 = state_33627;
var statearr_33643_34366 = state_33627__$1;
(statearr_33643_34366[(2)] = inst_33596);

(statearr_33643_34366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (5))){
var inst_33588 = (state_33627[(9)]);
var inst_33593 = (state_33627[(13)]);
var inst_33592 = (state_33627[(11)]);
var inst_33585 = (state_33627[(8)]);
var inst_33592__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33588) : f.call(null,inst_33588));
var inst_33593__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33592__$1,inst_33585);
var state_33627__$1 = (function (){var statearr_33644 = state_33627;
(statearr_33644[(13)] = inst_33593__$1);

(statearr_33644[(11)] = inst_33592__$1);

return statearr_33644;
})();
if(inst_33593__$1){
var statearr_33645_34367 = state_33627__$1;
(statearr_33645_34367[(1)] = (8));

} else {
var statearr_33646_34368 = state_33627__$1;
(statearr_33646_34368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (14))){
var inst_33588 = (state_33627[(9)]);
var inst_33592 = (state_33627[(11)]);
var inst_33605 = (state_33627[(2)]);
var inst_33606 = [];
var inst_33607 = inst_33606.push(inst_33588);
var inst_33584 = inst_33606;
var inst_33585 = inst_33592;
var state_33627__$1 = (function (){var statearr_33647 = state_33627;
(statearr_33647[(14)] = inst_33605);

(statearr_33647[(7)] = inst_33584);

(statearr_33647[(8)] = inst_33585);

(statearr_33647[(15)] = inst_33607);

return statearr_33647;
})();
var statearr_33648_34370 = state_33627__$1;
(statearr_33648_34370[(2)] = null);

(statearr_33648_34370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (16))){
var state_33627__$1 = state_33627;
var statearr_33649_34371 = state_33627__$1;
(statearr_33649_34371[(2)] = null);

(statearr_33649_34371[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (10))){
var inst_33598 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
if(cljs.core.truth_(inst_33598)){
var statearr_33650_34373 = state_33627__$1;
(statearr_33650_34373[(1)] = (11));

} else {
var statearr_33651_34374 = state_33627__$1;
(statearr_33651_34374[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (18))){
var inst_33617 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33652_34376 = state_33627__$1;
(statearr_33652_34376[(2)] = inst_33617);

(statearr_33652_34376[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (8))){
var inst_33593 = (state_33627[(13)]);
var state_33627__$1 = state_33627;
var statearr_33653_34378 = state_33627__$1;
(statearr_33653_34378[(2)] = inst_33593);

(statearr_33653_34378[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32042__auto__ = null;
var cljs$core$async$state_machine__32042__auto____0 = (function (){
var statearr_33654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33654[(0)] = cljs$core$async$state_machine__32042__auto__);

(statearr_33654[(1)] = (1));

return statearr_33654;
});
var cljs$core$async$state_machine__32042__auto____1 = (function (state_33627){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_33627);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e33655){var ex__32045__auto__ = e33655;
var statearr_33656_34381 = state_33627;
(statearr_33656_34381[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_33627[(4)]))){
var statearr_33657_34382 = state_33627;
(statearr_33657_34382[(1)] = cljs.core.first((state_33627[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34383 = state_33627;
state_33627 = G__34383;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
cljs$core$async$state_machine__32042__auto__ = function(state_33627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32042__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32042__auto____1.call(this,state_33627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32042__auto____0;
cljs$core$async$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32042__auto____1;
return cljs$core$async$state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_33658 = f__32103__auto__();
(statearr_33658[(6)] = c__32102__auto___34348);

return statearr_33658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
