goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_34384 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_34384(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_34385 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_34385(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33687 = coll;
var G__33688 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33687,G__33688) : shadow.dom.lazy_native_coll_seq.call(null,G__33687,G__33688));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33695 = arguments.length;
switch (G__33695) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33699 = arguments.length;
switch (G__33699) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33706 = arguments.length;
switch (G__33706) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33713 = arguments.length;
switch (G__33713) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33722 = arguments.length;
switch (G__33722) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33730 = arguments.length;
switch (G__33730) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33744){if((e33744 instanceof Object)){
var e = e33744;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33744;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33751 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33752 = null;
var count__33753 = (0);
var i__33754 = (0);
while(true){
if((i__33754 < count__33753)){
var el = chunk__33752.cljs$core$IIndexed$_nth$arity$2(null,i__33754);
var handler_34394__$1 = ((function (seq__33751,chunk__33752,count__33753,i__33754,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33751,chunk__33752,count__33753,i__33754,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34394__$1);


var G__34395 = seq__33751;
var G__34396 = chunk__33752;
var G__34397 = count__33753;
var G__34398 = (i__33754 + (1));
seq__33751 = G__34395;
chunk__33752 = G__34396;
count__33753 = G__34397;
i__33754 = G__34398;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33751);
if(temp__5753__auto__){
var seq__33751__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33751__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33751__$1);
var G__34400 = cljs.core.chunk_rest(seq__33751__$1);
var G__34401 = c__4679__auto__;
var G__34402 = cljs.core.count(c__4679__auto__);
var G__34403 = (0);
seq__33751 = G__34400;
chunk__33752 = G__34401;
count__33753 = G__34402;
i__33754 = G__34403;
continue;
} else {
var el = cljs.core.first(seq__33751__$1);
var handler_34404__$1 = ((function (seq__33751,chunk__33752,count__33753,i__33754,el,seq__33751__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33751,chunk__33752,count__33753,i__33754,el,seq__33751__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_34404__$1);


var G__34405 = cljs.core.next(seq__33751__$1);
var G__34406 = null;
var G__34407 = (0);
var G__34408 = (0);
seq__33751 = G__34405;
chunk__33752 = G__34406;
count__33753 = G__34407;
i__33754 = G__34408;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33771 = arguments.length;
switch (G__33771) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33782 = cljs.core.seq(events);
var chunk__33783 = null;
var count__33784 = (0);
var i__33785 = (0);
while(true){
if((i__33785 < count__33784)){
var vec__33800 = chunk__33783.cljs$core$IIndexed$_nth$arity$2(null,i__33785);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33800,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33800,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34412 = seq__33782;
var G__34413 = chunk__33783;
var G__34414 = count__33784;
var G__34415 = (i__33785 + (1));
seq__33782 = G__34412;
chunk__33783 = G__34413;
count__33784 = G__34414;
i__33785 = G__34415;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33782);
if(temp__5753__auto__){
var seq__33782__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33782__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33782__$1);
var G__34416 = cljs.core.chunk_rest(seq__33782__$1);
var G__34417 = c__4679__auto__;
var G__34418 = cljs.core.count(c__4679__auto__);
var G__34419 = (0);
seq__33782 = G__34416;
chunk__33783 = G__34417;
count__33784 = G__34418;
i__33785 = G__34419;
continue;
} else {
var vec__33805 = cljs.core.first(seq__33782__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33805,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33805,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34420 = cljs.core.next(seq__33782__$1);
var G__34421 = null;
var G__34422 = (0);
var G__34423 = (0);
seq__33782 = G__34420;
chunk__33783 = G__34421;
count__33784 = G__34422;
i__33785 = G__34423;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33811 = cljs.core.seq(styles);
var chunk__33812 = null;
var count__33813 = (0);
var i__33814 = (0);
while(true){
if((i__33814 < count__33813)){
var vec__33823 = chunk__33812.cljs$core$IIndexed$_nth$arity$2(null,i__33814);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33823,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33823,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34424 = seq__33811;
var G__34425 = chunk__33812;
var G__34426 = count__33813;
var G__34427 = (i__33814 + (1));
seq__33811 = G__34424;
chunk__33812 = G__34425;
count__33813 = G__34426;
i__33814 = G__34427;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33811);
if(temp__5753__auto__){
var seq__33811__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33811__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33811__$1);
var G__34428 = cljs.core.chunk_rest(seq__33811__$1);
var G__34429 = c__4679__auto__;
var G__34430 = cljs.core.count(c__4679__auto__);
var G__34431 = (0);
seq__33811 = G__34428;
chunk__33812 = G__34429;
count__33813 = G__34430;
i__33814 = G__34431;
continue;
} else {
var vec__33827 = cljs.core.first(seq__33811__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33827,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33827,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__34432 = cljs.core.next(seq__33811__$1);
var G__34433 = null;
var G__34434 = (0);
var G__34435 = (0);
seq__33811 = G__34432;
chunk__33812 = G__34433;
count__33813 = G__34434;
i__33814 = G__34435;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33834_34436 = key;
var G__33834_34437__$1 = (((G__33834_34436 instanceof cljs.core.Keyword))?G__33834_34436.fqn:null);
switch (G__33834_34437__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34440 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_34440,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_34440,"aria-");
}
})())){
el.setAttribute(ks_34440,value);
} else {
(el[ks_34440] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33859){
var map__33860 = p__33859;
var map__33860__$1 = cljs.core.__destructure_map(map__33860);
var props = map__33860__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33860__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33864 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33864,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33864,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33864,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33867 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33867,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33867;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33873 = arguments.length;
switch (G__33873) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33885){
var vec__33887 = p__33885;
var seq__33888 = cljs.core.seq(vec__33887);
var first__33889 = cljs.core.first(seq__33888);
var seq__33888__$1 = cljs.core.next(seq__33888);
var nn = first__33889;
var first__33889__$1 = cljs.core.first(seq__33888__$1);
var seq__33888__$2 = cljs.core.next(seq__33888__$1);
var np = first__33889__$1;
var nc = seq__33888__$2;
var node = vec__33887;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33892 = nn;
var G__33893 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33892,G__33893) : create_fn.call(null,G__33892,G__33893));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33894 = nn;
var G__33895 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33894,G__33895) : create_fn.call(null,G__33894,G__33895));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33899 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33899,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33899,(1),null);
var seq__33902_34450 = cljs.core.seq(node_children);
var chunk__33903_34451 = null;
var count__33904_34452 = (0);
var i__33905_34453 = (0);
while(true){
if((i__33905_34453 < count__33904_34452)){
var child_struct_34454 = chunk__33903_34451.cljs$core$IIndexed$_nth$arity$2(null,i__33905_34453);
var children_34455 = shadow.dom.dom_node(child_struct_34454);
if(cljs.core.seq_QMARK_(children_34455)){
var seq__33927_34456 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34455));
var chunk__33929_34457 = null;
var count__33930_34458 = (0);
var i__33931_34459 = (0);
while(true){
if((i__33931_34459 < count__33930_34458)){
var child_34460 = chunk__33929_34457.cljs$core$IIndexed$_nth$arity$2(null,i__33931_34459);
if(cljs.core.truth_(child_34460)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34460);


var G__34461 = seq__33927_34456;
var G__34462 = chunk__33929_34457;
var G__34463 = count__33930_34458;
var G__34464 = (i__33931_34459 + (1));
seq__33927_34456 = G__34461;
chunk__33929_34457 = G__34462;
count__33930_34458 = G__34463;
i__33931_34459 = G__34464;
continue;
} else {
var G__34465 = seq__33927_34456;
var G__34466 = chunk__33929_34457;
var G__34467 = count__33930_34458;
var G__34468 = (i__33931_34459 + (1));
seq__33927_34456 = G__34465;
chunk__33929_34457 = G__34466;
count__33930_34458 = G__34467;
i__33931_34459 = G__34468;
continue;
}
} else {
var temp__5753__auto___34469 = cljs.core.seq(seq__33927_34456);
if(temp__5753__auto___34469){
var seq__33927_34470__$1 = temp__5753__auto___34469;
if(cljs.core.chunked_seq_QMARK_(seq__33927_34470__$1)){
var c__4679__auto___34471 = cljs.core.chunk_first(seq__33927_34470__$1);
var G__34472 = cljs.core.chunk_rest(seq__33927_34470__$1);
var G__34473 = c__4679__auto___34471;
var G__34474 = cljs.core.count(c__4679__auto___34471);
var G__34475 = (0);
seq__33927_34456 = G__34472;
chunk__33929_34457 = G__34473;
count__33930_34458 = G__34474;
i__33931_34459 = G__34475;
continue;
} else {
var child_34476 = cljs.core.first(seq__33927_34470__$1);
if(cljs.core.truth_(child_34476)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34476);


var G__34477 = cljs.core.next(seq__33927_34470__$1);
var G__34478 = null;
var G__34479 = (0);
var G__34480 = (0);
seq__33927_34456 = G__34477;
chunk__33929_34457 = G__34478;
count__33930_34458 = G__34479;
i__33931_34459 = G__34480;
continue;
} else {
var G__34481 = cljs.core.next(seq__33927_34470__$1);
var G__34482 = null;
var G__34483 = (0);
var G__34484 = (0);
seq__33927_34456 = G__34481;
chunk__33929_34457 = G__34482;
count__33930_34458 = G__34483;
i__33931_34459 = G__34484;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34455);
}


var G__34485 = seq__33902_34450;
var G__34486 = chunk__33903_34451;
var G__34487 = count__33904_34452;
var G__34488 = (i__33905_34453 + (1));
seq__33902_34450 = G__34485;
chunk__33903_34451 = G__34486;
count__33904_34452 = G__34487;
i__33905_34453 = G__34488;
continue;
} else {
var temp__5753__auto___34489 = cljs.core.seq(seq__33902_34450);
if(temp__5753__auto___34489){
var seq__33902_34490__$1 = temp__5753__auto___34489;
if(cljs.core.chunked_seq_QMARK_(seq__33902_34490__$1)){
var c__4679__auto___34491 = cljs.core.chunk_first(seq__33902_34490__$1);
var G__34492 = cljs.core.chunk_rest(seq__33902_34490__$1);
var G__34493 = c__4679__auto___34491;
var G__34494 = cljs.core.count(c__4679__auto___34491);
var G__34495 = (0);
seq__33902_34450 = G__34492;
chunk__33903_34451 = G__34493;
count__33904_34452 = G__34494;
i__33905_34453 = G__34495;
continue;
} else {
var child_struct_34496 = cljs.core.first(seq__33902_34490__$1);
var children_34497 = shadow.dom.dom_node(child_struct_34496);
if(cljs.core.seq_QMARK_(children_34497)){
var seq__33940_34498 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34497));
var chunk__33942_34499 = null;
var count__33943_34500 = (0);
var i__33944_34501 = (0);
while(true){
if((i__33944_34501 < count__33943_34500)){
var child_34502 = chunk__33942_34499.cljs$core$IIndexed$_nth$arity$2(null,i__33944_34501);
if(cljs.core.truth_(child_34502)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34502);


var G__34503 = seq__33940_34498;
var G__34504 = chunk__33942_34499;
var G__34505 = count__33943_34500;
var G__34506 = (i__33944_34501 + (1));
seq__33940_34498 = G__34503;
chunk__33942_34499 = G__34504;
count__33943_34500 = G__34505;
i__33944_34501 = G__34506;
continue;
} else {
var G__34507 = seq__33940_34498;
var G__34508 = chunk__33942_34499;
var G__34509 = count__33943_34500;
var G__34510 = (i__33944_34501 + (1));
seq__33940_34498 = G__34507;
chunk__33942_34499 = G__34508;
count__33943_34500 = G__34509;
i__33944_34501 = G__34510;
continue;
}
} else {
var temp__5753__auto___34511__$1 = cljs.core.seq(seq__33940_34498);
if(temp__5753__auto___34511__$1){
var seq__33940_34512__$1 = temp__5753__auto___34511__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33940_34512__$1)){
var c__4679__auto___34513 = cljs.core.chunk_first(seq__33940_34512__$1);
var G__34514 = cljs.core.chunk_rest(seq__33940_34512__$1);
var G__34515 = c__4679__auto___34513;
var G__34516 = cljs.core.count(c__4679__auto___34513);
var G__34517 = (0);
seq__33940_34498 = G__34514;
chunk__33942_34499 = G__34515;
count__33943_34500 = G__34516;
i__33944_34501 = G__34517;
continue;
} else {
var child_34518 = cljs.core.first(seq__33940_34512__$1);
if(cljs.core.truth_(child_34518)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34518);


var G__34519 = cljs.core.next(seq__33940_34512__$1);
var G__34520 = null;
var G__34521 = (0);
var G__34522 = (0);
seq__33940_34498 = G__34519;
chunk__33942_34499 = G__34520;
count__33943_34500 = G__34521;
i__33944_34501 = G__34522;
continue;
} else {
var G__34523 = cljs.core.next(seq__33940_34512__$1);
var G__34524 = null;
var G__34525 = (0);
var G__34526 = (0);
seq__33940_34498 = G__34523;
chunk__33942_34499 = G__34524;
count__33943_34500 = G__34525;
i__33944_34501 = G__34526;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34497);
}


var G__34528 = cljs.core.next(seq__33902_34490__$1);
var G__34529 = null;
var G__34530 = (0);
var G__34532 = (0);
seq__33902_34450 = G__34528;
chunk__33903_34451 = G__34529;
count__33904_34452 = G__34530;
i__33905_34453 = G__34532;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33961 = cljs.core.seq(node);
var chunk__33962 = null;
var count__33963 = (0);
var i__33964 = (0);
while(true){
if((i__33964 < count__33963)){
var n = chunk__33962.cljs$core$IIndexed$_nth$arity$2(null,i__33964);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34542 = seq__33961;
var G__34543 = chunk__33962;
var G__34544 = count__33963;
var G__34545 = (i__33964 + (1));
seq__33961 = G__34542;
chunk__33962 = G__34543;
count__33963 = G__34544;
i__33964 = G__34545;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__33961);
if(temp__5753__auto__){
var seq__33961__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33961__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__33961__$1);
var G__34546 = cljs.core.chunk_rest(seq__33961__$1);
var G__34547 = c__4679__auto__;
var G__34548 = cljs.core.count(c__4679__auto__);
var G__34549 = (0);
seq__33961 = G__34546;
chunk__33962 = G__34547;
count__33963 = G__34548;
i__33964 = G__34549;
continue;
} else {
var n = cljs.core.first(seq__33961__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34553 = cljs.core.next(seq__33961__$1);
var G__34554 = null;
var G__34555 = (0);
var G__34556 = (0);
seq__33961 = G__34553;
chunk__33962 = G__34554;
count__33963 = G__34555;
i__33964 = G__34556;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33973 = arguments.length;
switch (G__33973) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33978 = arguments.length;
switch (G__33978) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33987 = arguments.length;
switch (G__33987) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34563 = arguments.length;
var i__4865__auto___34564 = (0);
while(true){
if((i__4865__auto___34564 < len__4864__auto___34563)){
args__4870__auto__.push((arguments[i__4865__auto___34564]));

var G__34565 = (i__4865__auto___34564 + (1));
i__4865__auto___34564 = G__34565;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34006_34566 = cljs.core.seq(nodes);
var chunk__34007_34567 = null;
var count__34008_34568 = (0);
var i__34009_34569 = (0);
while(true){
if((i__34009_34569 < count__34008_34568)){
var node_34570 = chunk__34007_34567.cljs$core$IIndexed$_nth$arity$2(null,i__34009_34569);
fragment.appendChild(shadow.dom._to_dom(node_34570));


var G__34571 = seq__34006_34566;
var G__34572 = chunk__34007_34567;
var G__34573 = count__34008_34568;
var G__34574 = (i__34009_34569 + (1));
seq__34006_34566 = G__34571;
chunk__34007_34567 = G__34572;
count__34008_34568 = G__34573;
i__34009_34569 = G__34574;
continue;
} else {
var temp__5753__auto___34575 = cljs.core.seq(seq__34006_34566);
if(temp__5753__auto___34575){
var seq__34006_34576__$1 = temp__5753__auto___34575;
if(cljs.core.chunked_seq_QMARK_(seq__34006_34576__$1)){
var c__4679__auto___34577 = cljs.core.chunk_first(seq__34006_34576__$1);
var G__34578 = cljs.core.chunk_rest(seq__34006_34576__$1);
var G__34579 = c__4679__auto___34577;
var G__34580 = cljs.core.count(c__4679__auto___34577);
var G__34581 = (0);
seq__34006_34566 = G__34578;
chunk__34007_34567 = G__34579;
count__34008_34568 = G__34580;
i__34009_34569 = G__34581;
continue;
} else {
var node_34582 = cljs.core.first(seq__34006_34576__$1);
fragment.appendChild(shadow.dom._to_dom(node_34582));


var G__34583 = cljs.core.next(seq__34006_34576__$1);
var G__34584 = null;
var G__34585 = (0);
var G__34586 = (0);
seq__34006_34566 = G__34583;
chunk__34007_34567 = G__34584;
count__34008_34568 = G__34585;
i__34009_34569 = G__34586;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34001){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34001));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34015_34587 = cljs.core.seq(scripts);
var chunk__34016_34588 = null;
var count__34017_34589 = (0);
var i__34018_34590 = (0);
while(true){
if((i__34018_34590 < count__34017_34589)){
var vec__34031_34594 = chunk__34016_34588.cljs$core$IIndexed$_nth$arity$2(null,i__34018_34590);
var script_tag_34595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34031_34594,(0),null);
var script_body_34596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34031_34594,(1),null);
eval(script_body_34596);


var G__34597 = seq__34015_34587;
var G__34598 = chunk__34016_34588;
var G__34599 = count__34017_34589;
var G__34600 = (i__34018_34590 + (1));
seq__34015_34587 = G__34597;
chunk__34016_34588 = G__34598;
count__34017_34589 = G__34599;
i__34018_34590 = G__34600;
continue;
} else {
var temp__5753__auto___34601 = cljs.core.seq(seq__34015_34587);
if(temp__5753__auto___34601){
var seq__34015_34602__$1 = temp__5753__auto___34601;
if(cljs.core.chunked_seq_QMARK_(seq__34015_34602__$1)){
var c__4679__auto___34603 = cljs.core.chunk_first(seq__34015_34602__$1);
var G__34604 = cljs.core.chunk_rest(seq__34015_34602__$1);
var G__34605 = c__4679__auto___34603;
var G__34606 = cljs.core.count(c__4679__auto___34603);
var G__34607 = (0);
seq__34015_34587 = G__34604;
chunk__34016_34588 = G__34605;
count__34017_34589 = G__34606;
i__34018_34590 = G__34607;
continue;
} else {
var vec__34034_34608 = cljs.core.first(seq__34015_34602__$1);
var script_tag_34609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34034_34608,(0),null);
var script_body_34610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34034_34608,(1),null);
eval(script_body_34610);


var G__34611 = cljs.core.next(seq__34015_34602__$1);
var G__34612 = null;
var G__34613 = (0);
var G__34614 = (0);
seq__34015_34587 = G__34611;
chunk__34016_34588 = G__34612;
count__34017_34589 = G__34613;
i__34018_34590 = G__34614;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34037){
var vec__34038 = p__34037;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34038,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34038,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34045 = arguments.length;
switch (G__34045) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34061 = cljs.core.seq(style_keys);
var chunk__34063 = null;
var count__34064 = (0);
var i__34065 = (0);
while(true){
if((i__34065 < count__34064)){
var it = chunk__34063.cljs$core$IIndexed$_nth$arity$2(null,i__34065);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34616 = seq__34061;
var G__34617 = chunk__34063;
var G__34618 = count__34064;
var G__34619 = (i__34065 + (1));
seq__34061 = G__34616;
chunk__34063 = G__34617;
count__34064 = G__34618;
i__34065 = G__34619;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__34061);
if(temp__5753__auto__){
var seq__34061__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34061__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__34061__$1);
var G__34620 = cljs.core.chunk_rest(seq__34061__$1);
var G__34621 = c__4679__auto__;
var G__34622 = cljs.core.count(c__4679__auto__);
var G__34623 = (0);
seq__34061 = G__34620;
chunk__34063 = G__34621;
count__34064 = G__34622;
i__34065 = G__34623;
continue;
} else {
var it = cljs.core.first(seq__34061__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34624 = cljs.core.next(seq__34061__$1);
var G__34625 = null;
var G__34626 = (0);
var G__34627 = (0);
seq__34061 = G__34624;
chunk__34063 = G__34625;
count__34064 = G__34626;
i__34065 = G__34627;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34082,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34090 = k34082;
var G__34090__$1 = (((G__34090 instanceof cljs.core.Keyword))?G__34090.fqn:null);
switch (G__34090__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34082,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34092){
var vec__34093 = p__34092;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34093,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34093,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34081){
var self__ = this;
var G__34081__$1 = this;
return (new cljs.core.RecordIter((0),G__34081__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34083,other34084){
var self__ = this;
var this34083__$1 = this;
return (((!((other34084 == null)))) && ((((this34083__$1.constructor === other34084.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34083__$1.x,other34084.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34083__$1.y,other34084.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34083__$1.__extmap,other34084.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34082){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34108 = k34082;
var G__34108__$1 = (((G__34108 instanceof cljs.core.Keyword))?G__34108.fqn:null);
switch (G__34108__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34082);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34081){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34111 = cljs.core.keyword_identical_QMARK_;
var expr__34112 = k__4511__auto__;
if(cljs.core.truth_((pred__34111.cljs$core$IFn$_invoke$arity$2 ? pred__34111.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34112) : pred__34111.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34112)))){
return (new shadow.dom.Coordinate(G__34081,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34111.cljs$core$IFn$_invoke$arity$2 ? pred__34111.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34112) : pred__34111.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34112)))){
return (new shadow.dom.Coordinate(self__.x,G__34081,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34081),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34081){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34081,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34086){
var extmap__4542__auto__ = (function (){var G__34123 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34086,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34086)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34123);
} else {
return G__34123;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34086),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34086),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k34128,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__34136 = k34128;
var G__34136__$1 = (((G__34136 instanceof cljs.core.Keyword))?G__34136.fqn:null);
switch (G__34136__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34128,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__34140){
var vec__34141 = p__34140;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34141,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34141,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34127){
var self__ = this;
var G__34127__$1 = this;
return (new cljs.core.RecordIter((0),G__34127__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34129,other34130){
var self__ = this;
var this34129__$1 = this;
return (((!((other34130 == null)))) && ((((this34129__$1.constructor === other34130.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34129__$1.w,other34130.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34129__$1.h,other34130.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34129__$1.__extmap,other34130.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k34128){
var self__ = this;
var this__4509__auto____$1 = this;
var G__34160 = k34128;
var G__34160__$1 = (((G__34160 instanceof cljs.core.Keyword))?G__34160.fqn:null);
switch (G__34160__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34128);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__34127){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__34162 = cljs.core.keyword_identical_QMARK_;
var expr__34163 = k__4511__auto__;
if(cljs.core.truth_((pred__34162.cljs$core$IFn$_invoke$arity$2 ? pred__34162.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34163) : pred__34162.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34163)))){
return (new shadow.dom.Size(G__34127,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34162.cljs$core$IFn$_invoke$arity$2 ? pred__34162.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34163) : pred__34162.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34163)))){
return (new shadow.dom.Size(self__.w,G__34127,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__34127),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__34127){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34127,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34132){
var extmap__4542__auto__ = (function (){var G__34176 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34132,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34132)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34176);
} else {
return G__34176;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34132),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34132),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__34672 = (i + (1));
var G__34673 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34672;
ret = G__34673;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34198){
var vec__34199 = p__34198;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34199,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34199,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34208 = arguments.length;
switch (G__34208) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34675 = ps;
var G__34676 = (i + (1));
el__$1 = G__34675;
i = G__34676;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__34213 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34213,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34213,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34213,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34216_34677 = cljs.core.seq(props);
var chunk__34217_34678 = null;
var count__34218_34679 = (0);
var i__34219_34680 = (0);
while(true){
if((i__34219_34680 < count__34218_34679)){
var vec__34233_34682 = chunk__34217_34678.cljs$core$IIndexed$_nth$arity$2(null,i__34219_34680);
var k_34683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34233_34682,(0),null);
var v_34684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34233_34682,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_34683);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34683),v_34684);


var G__34685 = seq__34216_34677;
var G__34686 = chunk__34217_34678;
var G__34687 = count__34218_34679;
var G__34688 = (i__34219_34680 + (1));
seq__34216_34677 = G__34685;
chunk__34217_34678 = G__34686;
count__34218_34679 = G__34687;
i__34219_34680 = G__34688;
continue;
} else {
var temp__5753__auto___34689 = cljs.core.seq(seq__34216_34677);
if(temp__5753__auto___34689){
var seq__34216_34690__$1 = temp__5753__auto___34689;
if(cljs.core.chunked_seq_QMARK_(seq__34216_34690__$1)){
var c__4679__auto___34694 = cljs.core.chunk_first(seq__34216_34690__$1);
var G__34695 = cljs.core.chunk_rest(seq__34216_34690__$1);
var G__34696 = c__4679__auto___34694;
var G__34697 = cljs.core.count(c__4679__auto___34694);
var G__34698 = (0);
seq__34216_34677 = G__34695;
chunk__34217_34678 = G__34696;
count__34218_34679 = G__34697;
i__34219_34680 = G__34698;
continue;
} else {
var vec__34241_34699 = cljs.core.first(seq__34216_34690__$1);
var k_34700 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34241_34699,(0),null);
var v_34701 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34241_34699,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_34700);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34700),v_34701);


var G__34702 = cljs.core.next(seq__34216_34690__$1);
var G__34703 = null;
var G__34704 = (0);
var G__34705 = (0);
seq__34216_34677 = G__34702;
chunk__34217_34678 = G__34703;
count__34218_34679 = G__34704;
i__34219_34680 = G__34705;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__34250 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34250,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34250,(1),null);
var seq__34253_34706 = cljs.core.seq(node_children);
var chunk__34255_34707 = null;
var count__34256_34708 = (0);
var i__34257_34709 = (0);
while(true){
if((i__34257_34709 < count__34256_34708)){
var child_struct_34710 = chunk__34255_34707.cljs$core$IIndexed$_nth$arity$2(null,i__34257_34709);
if((!((child_struct_34710 == null)))){
if(typeof child_struct_34710 === 'string'){
var text_34711 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34711),child_struct_34710].join(''));
} else {
var children_34712 = shadow.dom.svg_node(child_struct_34710);
if(cljs.core.seq_QMARK_(children_34712)){
var seq__34300_34713 = cljs.core.seq(children_34712);
var chunk__34302_34714 = null;
var count__34303_34715 = (0);
var i__34304_34716 = (0);
while(true){
if((i__34304_34716 < count__34303_34715)){
var child_34717 = chunk__34302_34714.cljs$core$IIndexed$_nth$arity$2(null,i__34304_34716);
if(cljs.core.truth_(child_34717)){
node.appendChild(child_34717);


var G__34718 = seq__34300_34713;
var G__34719 = chunk__34302_34714;
var G__34720 = count__34303_34715;
var G__34721 = (i__34304_34716 + (1));
seq__34300_34713 = G__34718;
chunk__34302_34714 = G__34719;
count__34303_34715 = G__34720;
i__34304_34716 = G__34721;
continue;
} else {
var G__34722 = seq__34300_34713;
var G__34723 = chunk__34302_34714;
var G__34724 = count__34303_34715;
var G__34725 = (i__34304_34716 + (1));
seq__34300_34713 = G__34722;
chunk__34302_34714 = G__34723;
count__34303_34715 = G__34724;
i__34304_34716 = G__34725;
continue;
}
} else {
var temp__5753__auto___34726 = cljs.core.seq(seq__34300_34713);
if(temp__5753__auto___34726){
var seq__34300_34727__$1 = temp__5753__auto___34726;
if(cljs.core.chunked_seq_QMARK_(seq__34300_34727__$1)){
var c__4679__auto___34728 = cljs.core.chunk_first(seq__34300_34727__$1);
var G__34729 = cljs.core.chunk_rest(seq__34300_34727__$1);
var G__34730 = c__4679__auto___34728;
var G__34731 = cljs.core.count(c__4679__auto___34728);
var G__34732 = (0);
seq__34300_34713 = G__34729;
chunk__34302_34714 = G__34730;
count__34303_34715 = G__34731;
i__34304_34716 = G__34732;
continue;
} else {
var child_34733 = cljs.core.first(seq__34300_34727__$1);
if(cljs.core.truth_(child_34733)){
node.appendChild(child_34733);


var G__34734 = cljs.core.next(seq__34300_34727__$1);
var G__34735 = null;
var G__34736 = (0);
var G__34737 = (0);
seq__34300_34713 = G__34734;
chunk__34302_34714 = G__34735;
count__34303_34715 = G__34736;
i__34304_34716 = G__34737;
continue;
} else {
var G__34738 = cljs.core.next(seq__34300_34727__$1);
var G__34739 = null;
var G__34740 = (0);
var G__34741 = (0);
seq__34300_34713 = G__34738;
chunk__34302_34714 = G__34739;
count__34303_34715 = G__34740;
i__34304_34716 = G__34741;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34712);
}
}


var G__34742 = seq__34253_34706;
var G__34743 = chunk__34255_34707;
var G__34744 = count__34256_34708;
var G__34745 = (i__34257_34709 + (1));
seq__34253_34706 = G__34742;
chunk__34255_34707 = G__34743;
count__34256_34708 = G__34744;
i__34257_34709 = G__34745;
continue;
} else {
var G__34746 = seq__34253_34706;
var G__34747 = chunk__34255_34707;
var G__34748 = count__34256_34708;
var G__34749 = (i__34257_34709 + (1));
seq__34253_34706 = G__34746;
chunk__34255_34707 = G__34747;
count__34256_34708 = G__34748;
i__34257_34709 = G__34749;
continue;
}
} else {
var temp__5753__auto___34750 = cljs.core.seq(seq__34253_34706);
if(temp__5753__auto___34750){
var seq__34253_34751__$1 = temp__5753__auto___34750;
if(cljs.core.chunked_seq_QMARK_(seq__34253_34751__$1)){
var c__4679__auto___34752 = cljs.core.chunk_first(seq__34253_34751__$1);
var G__34753 = cljs.core.chunk_rest(seq__34253_34751__$1);
var G__34754 = c__4679__auto___34752;
var G__34755 = cljs.core.count(c__4679__auto___34752);
var G__34756 = (0);
seq__34253_34706 = G__34753;
chunk__34255_34707 = G__34754;
count__34256_34708 = G__34755;
i__34257_34709 = G__34756;
continue;
} else {
var child_struct_34757 = cljs.core.first(seq__34253_34751__$1);
if((!((child_struct_34757 == null)))){
if(typeof child_struct_34757 === 'string'){
var text_34758 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34758),child_struct_34757].join(''));
} else {
var children_34760 = shadow.dom.svg_node(child_struct_34757);
if(cljs.core.seq_QMARK_(children_34760)){
var seq__34318_34761 = cljs.core.seq(children_34760);
var chunk__34320_34762 = null;
var count__34321_34763 = (0);
var i__34322_34764 = (0);
while(true){
if((i__34322_34764 < count__34321_34763)){
var child_34765 = chunk__34320_34762.cljs$core$IIndexed$_nth$arity$2(null,i__34322_34764);
if(cljs.core.truth_(child_34765)){
node.appendChild(child_34765);


var G__34766 = seq__34318_34761;
var G__34767 = chunk__34320_34762;
var G__34768 = count__34321_34763;
var G__34769 = (i__34322_34764 + (1));
seq__34318_34761 = G__34766;
chunk__34320_34762 = G__34767;
count__34321_34763 = G__34768;
i__34322_34764 = G__34769;
continue;
} else {
var G__34770 = seq__34318_34761;
var G__34771 = chunk__34320_34762;
var G__34772 = count__34321_34763;
var G__34773 = (i__34322_34764 + (1));
seq__34318_34761 = G__34770;
chunk__34320_34762 = G__34771;
count__34321_34763 = G__34772;
i__34322_34764 = G__34773;
continue;
}
} else {
var temp__5753__auto___34774__$1 = cljs.core.seq(seq__34318_34761);
if(temp__5753__auto___34774__$1){
var seq__34318_34775__$1 = temp__5753__auto___34774__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34318_34775__$1)){
var c__4679__auto___34776 = cljs.core.chunk_first(seq__34318_34775__$1);
var G__34777 = cljs.core.chunk_rest(seq__34318_34775__$1);
var G__34778 = c__4679__auto___34776;
var G__34779 = cljs.core.count(c__4679__auto___34776);
var G__34780 = (0);
seq__34318_34761 = G__34777;
chunk__34320_34762 = G__34778;
count__34321_34763 = G__34779;
i__34322_34764 = G__34780;
continue;
} else {
var child_34781 = cljs.core.first(seq__34318_34775__$1);
if(cljs.core.truth_(child_34781)){
node.appendChild(child_34781);


var G__34782 = cljs.core.next(seq__34318_34775__$1);
var G__34783 = null;
var G__34784 = (0);
var G__34785 = (0);
seq__34318_34761 = G__34782;
chunk__34320_34762 = G__34783;
count__34321_34763 = G__34784;
i__34322_34764 = G__34785;
continue;
} else {
var G__34786 = cljs.core.next(seq__34318_34775__$1);
var G__34787 = null;
var G__34788 = (0);
var G__34789 = (0);
seq__34318_34761 = G__34786;
chunk__34320_34762 = G__34787;
count__34321_34763 = G__34788;
i__34322_34764 = G__34789;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34760);
}
}


var G__34791 = cljs.core.next(seq__34253_34751__$1);
var G__34792 = null;
var G__34793 = (0);
var G__34794 = (0);
seq__34253_34706 = G__34791;
chunk__34255_34707 = G__34792;
count__34256_34708 = G__34793;
i__34257_34709 = G__34794;
continue;
} else {
var G__34795 = cljs.core.next(seq__34253_34751__$1);
var G__34796 = null;
var G__34797 = (0);
var G__34798 = (0);
seq__34253_34706 = G__34795;
chunk__34255_34707 = G__34796;
count__34256_34708 = G__34797;
i__34257_34709 = G__34798;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___34799 = arguments.length;
var i__4865__auto___34800 = (0);
while(true){
if((i__4865__auto___34800 < len__4864__auto___34799)){
args__4870__auto__.push((arguments[i__4865__auto___34800]));

var G__34801 = (i__4865__auto___34800 + (1));
i__4865__auto___34800 = G__34801;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq34341){
var G__34342 = cljs.core.first(seq34341);
var seq34341__$1 = cljs.core.next(seq34341);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34342,seq34341__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34352 = arguments.length;
switch (G__34352) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__32102__auto___34803 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32103__auto__ = (function (){var switch__32041__auto__ = (function (state_34364){
var state_val_34365 = (state_34364[(1)]);
if((state_val_34365 === (1))){
var state_34364__$1 = state_34364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34364__$1,(2),once_or_cleanup);
} else {
if((state_val_34365 === (2))){
var inst_34361 = (state_34364[(2)]);
var inst_34362 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34364__$1 = (function (){var statearr_34369 = state_34364;
(statearr_34369[(7)] = inst_34361);

return statearr_34369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34364__$1,inst_34362);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32042__auto__ = null;
var shadow$dom$state_machine__32042__auto____0 = (function (){
var statearr_34372 = [null,null,null,null,null,null,null,null];
(statearr_34372[(0)] = shadow$dom$state_machine__32042__auto__);

(statearr_34372[(1)] = (1));

return statearr_34372;
});
var shadow$dom$state_machine__32042__auto____1 = (function (state_34364){
while(true){
var ret_value__32043__auto__ = (function (){try{while(true){
var result__32044__auto__ = switch__32041__auto__(state_34364);
if(cljs.core.keyword_identical_QMARK_(result__32044__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32044__auto__;
}
break;
}
}catch (e34375){var ex__32045__auto__ = e34375;
var statearr_34377_34804 = state_34364;
(statearr_34377_34804[(2)] = ex__32045__auto__);


if(cljs.core.seq((state_34364[(4)]))){
var statearr_34379_34805 = state_34364;
(statearr_34379_34805[(1)] = cljs.core.first((state_34364[(4)])));

} else {
throw ex__32045__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34806 = state_34364;
state_34364 = G__34806;
continue;
} else {
return ret_value__32043__auto__;
}
break;
}
});
shadow$dom$state_machine__32042__auto__ = function(state_34364){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32042__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32042__auto____1.call(this,state_34364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32042__auto____0;
shadow$dom$state_machine__32042__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32042__auto____1;
return shadow$dom$state_machine__32042__auto__;
})()
})();
var state__32104__auto__ = (function (){var statearr_34380 = f__32103__auto__();
(statearr_34380[(6)] = c__32102__auto___34803);

return statearr_34380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32104__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
