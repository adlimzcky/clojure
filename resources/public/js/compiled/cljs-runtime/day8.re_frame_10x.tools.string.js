goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29980 = arguments.length;
var i__4865__auto___29981 = (0);
while(true){
if((i__4865__auto___29981 < len__4864__auto___29980)){
args__4870__auto__.push((arguments[i__4865__auto___29981]));

var G__29982 = (i__4865__auto___29981 + (1));
i__4865__auto___29981 = G__29982;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__29969){
var vec__29970 = p__29969;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29970,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__4253__auto__ = plural;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq29966){
var G__29967 = cljs.core.first(seq29966);
var seq29966__$1 = cljs.core.next(seq29966);
var G__29968 = cljs.core.first(seq29966__$1);
var seq29966__$2 = cljs.core.next(seq29966__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29967,G__29968,seq29966__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___29983 = arguments.length;
var i__4865__auto___29984 = (0);
while(true){
if((i__4865__auto___29984 < len__4864__auto___29983)){
args__4870__auto__.push((arguments[i__4865__auto___29984]));

var G__29985 = (i__4865__auto___29984 + (1));
i__4865__auto___29984 = G__29985;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__29976){
var vec__29977 = p__29976;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29977,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__4253__auto__ = plural;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq29973){
var G__29974 = cljs.core.first(seq29973);
var seq29973__$1 = cljs.core.next(seq29973);
var G__29975 = cljs.core.first(seq29973__$1);
var seq29973__$2 = cljs.core.next(seq29973__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29974,G__29975,seq29973__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
