goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35488){
var map__35489 = p__35488;
var map__35489__$1 = cljs.core.__destructure_map(map__35489);
var m = map__35489__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35489__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35489__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35495_35653 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35496_35654 = null;
var count__35497_35655 = (0);
var i__35498_35656 = (0);
while(true){
if((i__35498_35656 < count__35497_35655)){
var f_35657 = chunk__35496_35654.cljs$core$IIndexed$_nth$arity$2(null,i__35498_35656);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35657], 0));


var G__35658 = seq__35495_35653;
var G__35659 = chunk__35496_35654;
var G__35660 = count__35497_35655;
var G__35661 = (i__35498_35656 + (1));
seq__35495_35653 = G__35658;
chunk__35496_35654 = G__35659;
count__35497_35655 = G__35660;
i__35498_35656 = G__35661;
continue;
} else {
var temp__5753__auto___35662 = cljs.core.seq(seq__35495_35653);
if(temp__5753__auto___35662){
var seq__35495_35663__$1 = temp__5753__auto___35662;
if(cljs.core.chunked_seq_QMARK_(seq__35495_35663__$1)){
var c__4679__auto___35664 = cljs.core.chunk_first(seq__35495_35663__$1);
var G__35665 = cljs.core.chunk_rest(seq__35495_35663__$1);
var G__35666 = c__4679__auto___35664;
var G__35667 = cljs.core.count(c__4679__auto___35664);
var G__35668 = (0);
seq__35495_35653 = G__35665;
chunk__35496_35654 = G__35666;
count__35497_35655 = G__35667;
i__35498_35656 = G__35668;
continue;
} else {
var f_35669 = cljs.core.first(seq__35495_35663__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_35669], 0));


var G__35670 = cljs.core.next(seq__35495_35663__$1);
var G__35671 = null;
var G__35672 = (0);
var G__35673 = (0);
seq__35495_35653 = G__35670;
chunk__35496_35654 = G__35671;
count__35497_35655 = G__35672;
i__35498_35656 = G__35673;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35674 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_35674], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_35674)))?cljs.core.second(arglists_35674):arglists_35674)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35507_35677 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35508_35678 = null;
var count__35509_35679 = (0);
var i__35510_35680 = (0);
while(true){
if((i__35510_35680 < count__35509_35679)){
var vec__35532_35683 = chunk__35508_35678.cljs$core$IIndexed$_nth$arity$2(null,i__35510_35680);
var name_35684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35532_35683,(0),null);
var map__35535_35685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35532_35683,(1),null);
var map__35535_35686__$1 = cljs.core.__destructure_map(map__35535_35685);
var doc_35687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35535_35686__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35535_35686__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35684], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35688], 0));

if(cljs.core.truth_(doc_35687)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35687], 0));
} else {
}


var G__35690 = seq__35507_35677;
var G__35691 = chunk__35508_35678;
var G__35692 = count__35509_35679;
var G__35693 = (i__35510_35680 + (1));
seq__35507_35677 = G__35690;
chunk__35508_35678 = G__35691;
count__35509_35679 = G__35692;
i__35510_35680 = G__35693;
continue;
} else {
var temp__5753__auto___35694 = cljs.core.seq(seq__35507_35677);
if(temp__5753__auto___35694){
var seq__35507_35695__$1 = temp__5753__auto___35694;
if(cljs.core.chunked_seq_QMARK_(seq__35507_35695__$1)){
var c__4679__auto___35696 = cljs.core.chunk_first(seq__35507_35695__$1);
var G__35697 = cljs.core.chunk_rest(seq__35507_35695__$1);
var G__35698 = c__4679__auto___35696;
var G__35699 = cljs.core.count(c__4679__auto___35696);
var G__35700 = (0);
seq__35507_35677 = G__35697;
chunk__35508_35678 = G__35698;
count__35509_35679 = G__35699;
i__35510_35680 = G__35700;
continue;
} else {
var vec__35537_35701 = cljs.core.first(seq__35507_35695__$1);
var name_35702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35537_35701,(0),null);
var map__35540_35703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35537_35701,(1),null);
var map__35540_35704__$1 = cljs.core.__destructure_map(map__35540_35703);
var doc_35705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35540_35704__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35540_35704__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_35702], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_35706], 0));

if(cljs.core.truth_(doc_35705)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_35705], 0));
} else {
}


var G__35707 = cljs.core.next(seq__35507_35695__$1);
var G__35708 = null;
var G__35709 = (0);
var G__35710 = (0);
seq__35507_35677 = G__35707;
chunk__35508_35678 = G__35708;
count__35509_35679 = G__35709;
i__35510_35680 = G__35710;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__35542 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35543 = null;
var count__35544 = (0);
var i__35545 = (0);
while(true){
if((i__35545 < count__35544)){
var role = chunk__35543.cljs$core$IIndexed$_nth$arity$2(null,i__35545);
var temp__5753__auto___35711__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35711__$1)){
var spec_35713 = temp__5753__auto___35711__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35713)], 0));
} else {
}


var G__35714 = seq__35542;
var G__35715 = chunk__35543;
var G__35716 = count__35544;
var G__35717 = (i__35545 + (1));
seq__35542 = G__35714;
chunk__35543 = G__35715;
count__35544 = G__35716;
i__35545 = G__35717;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__35542);
if(temp__5753__auto____$1){
var seq__35542__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__35542__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35542__$1);
var G__35718 = cljs.core.chunk_rest(seq__35542__$1);
var G__35719 = c__4679__auto__;
var G__35720 = cljs.core.count(c__4679__auto__);
var G__35721 = (0);
seq__35542 = G__35718;
chunk__35543 = G__35719;
count__35544 = G__35720;
i__35545 = G__35721;
continue;
} else {
var role = cljs.core.first(seq__35542__$1);
var temp__5753__auto___35722__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___35722__$2)){
var spec_35723 = temp__5753__auto___35722__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_35723)], 0));
} else {
}


var G__35724 = cljs.core.next(seq__35542__$1);
var G__35725 = null;
var G__35726 = (0);
var G__35727 = (0);
seq__35542 = G__35724;
chunk__35543 = G__35725;
count__35544 = G__35726;
i__35545 = G__35727;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__35732 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__35733 = cljs.core.ex_cause(t);
via = G__35732;
t = G__35733;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__35573 = datafied_throwable;
var map__35573__$1 = cljs.core.__destructure_map(map__35573);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35573__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35573__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35573__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__35574 = cljs.core.last(via);
var map__35574__$1 = cljs.core.__destructure_map(map__35574);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35574__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35574__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35574__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__35575 = data;
var map__35575__$1 = cljs.core.__destructure_map(map__35575);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35575__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35575__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35575__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__35576 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__35576__$1 = cljs.core.__destructure_map(map__35576);
var top_data = map__35576__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35576__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__35597 = phase;
var G__35597__$1 = (((G__35597 instanceof cljs.core.Keyword))?G__35597.fqn:null);
switch (G__35597__$1) {
case "read-source":
var map__35598 = data;
var map__35598__$1 = cljs.core.__destructure_map(map__35598);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35598__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35598__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__35599 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__35599__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35599,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35599);
var G__35599__$2 = (cljs.core.truth_((function (){var fexpr__35600 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35600.cljs$core$IFn$_invoke$arity$1 ? fexpr__35600.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35600.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35599__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35599__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35599__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35599__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__35601 = top_data;
var G__35601__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35601,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__35601);
var G__35601__$2 = (cljs.core.truth_((function (){var fexpr__35602 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35602.cljs$core$IFn$_invoke$arity$1 ? fexpr__35602.cljs$core$IFn$_invoke$arity$1(source) : fexpr__35602.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__35601__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__35601__$1);
var G__35601__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35601__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35601__$2);
var G__35601__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35601__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35601__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35601__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35601__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__35603 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35603,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35603,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35603,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35603,(3),null);
var G__35606 = top_data;
var G__35606__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35606,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__35606);
var G__35606__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35606__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__35606__$1);
var G__35606__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35606__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__35606__$2);
var G__35606__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35606__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__35606__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35606__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__35606__$4;
}

break;
case "execution":
var vec__35607 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35607,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__35572_SHARP_){
var or__4253__auto__ = (p1__35572_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__35610 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__35610.cljs$core$IFn$_invoke$arity$1 ? fexpr__35610.cljs$core$IFn$_invoke$arity$1(p1__35572_SHARP_) : fexpr__35610.call(null,p1__35572_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__35611 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__35611__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35611,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__35611);
var G__35611__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35611__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__35611__$1);
var G__35611__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35611__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__35611__$2);
var G__35611__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35611__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__35611__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__35611__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__35611__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35597__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__35614){
var map__35615 = p__35614;
var map__35615__$1 = cljs.core.__destructure_map(map__35615);
var triage_data = map__35615__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35615__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__35616 = phase;
var G__35616__$1 = (((G__35616 instanceof cljs.core.Keyword))?G__35616.fqn:null);
switch (G__35616__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__35617 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__35618 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35619 = loc;
var G__35620 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35621_35740 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35622_35741 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35623_35742 = true;
var _STAR_print_fn_STAR__temp_val__35624_35743 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35623_35742);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35624_35743);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35612_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35612_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35622_35741);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35621_35740);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35617,G__35618,G__35619,G__35620) : format.call(null,G__35617,G__35618,G__35619,G__35620));

break;
case "macroexpansion":
var G__35625 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__35626 = cause_type;
var G__35627 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35628 = loc;
var G__35629 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35625,G__35626,G__35627,G__35628,G__35629) : format.call(null,G__35625,G__35626,G__35627,G__35628,G__35629));

break;
case "compile-syntax-check":
var G__35630 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__35631 = cause_type;
var G__35632 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35633 = loc;
var G__35634 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35630,G__35631,G__35632,G__35633,G__35634) : format.call(null,G__35630,G__35631,G__35632,G__35633,G__35634));

break;
case "compilation":
var G__35635 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__35636 = cause_type;
var G__35637 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35638 = loc;
var G__35639 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35635,G__35636,G__35637,G__35638,G__35639) : format.call(null,G__35635,G__35636,G__35637,G__35638,G__35639));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__35640 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__35641 = symbol;
var G__35642 = loc;
var G__35643 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35644_35745 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35645_35746 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35646_35747 = true;
var _STAR_print_fn_STAR__temp_val__35647_35748 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35646_35747);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35647_35748);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__35613_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__35613_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35645_35746);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35644_35745);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__35640,G__35641,G__35642,G__35643) : format.call(null,G__35640,G__35641,G__35642,G__35643));
} else {
var G__35648 = "Execution error%s at %s(%s).\n%s\n";
var G__35649 = cause_type;
var G__35650 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__35651 = loc;
var G__35652 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__35648,G__35649,G__35650,G__35651,G__35652) : format.call(null,G__35648,G__35649,G__35650,G__35651,G__35652));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35616__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
