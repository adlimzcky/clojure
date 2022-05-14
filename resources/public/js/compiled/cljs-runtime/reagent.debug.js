goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__23463__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__23463 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23464__i = 0, G__23464__a = new Array(arguments.length -  0);
while (G__23464__i < G__23464__a.length) {G__23464__a[G__23464__i] = arguments[G__23464__i + 0]; ++G__23464__i;}
  args = new cljs.core.IndexedSeq(G__23464__a,0,null);
} 
return G__23463__delegate.call(this,args);};
G__23463.cljs$lang$maxFixedArity = 0;
G__23463.cljs$lang$applyTo = (function (arglist__23465){
var args = cljs.core.seq(arglist__23465);
return G__23463__delegate(args);
});
G__23463.cljs$core$IFn$_invoke$arity$variadic = G__23463__delegate;
return G__23463;
})()
);

(o.error = (function() { 
var G__23466__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__23466 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23467__i = 0, G__23467__a = new Array(arguments.length -  0);
while (G__23467__i < G__23467__a.length) {G__23467__a[G__23467__i] = arguments[G__23467__i + 0]; ++G__23467__i;}
  args = new cljs.core.IndexedSeq(G__23467__a,0,null);
} 
return G__23466__delegate.call(this,args);};
G__23466.cljs$lang$maxFixedArity = 0;
G__23466.cljs$lang$applyTo = (function (arglist__23468){
var args = cljs.core.seq(arglist__23468);
return G__23466__delegate(args);
});
G__23466.cljs$core$IFn$_invoke$arity$variadic = G__23466__delegate;
return G__23466;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
