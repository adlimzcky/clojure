goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36491 = arguments.length;
var i__4865__auto___36492 = (0);
while(true){
if((i__4865__auto___36492 < len__4864__auto___36491)){
args__4870__auto__.push((arguments[i__4865__auto___36492]));

var G__36493 = (i__4865__auto___36492 + (1));
i__4865__auto___36492 = G__36493;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36066){
var G__36067 = cljs.core.first(seq36066);
var seq36066__$1 = cljs.core.next(seq36066);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36067,seq36066__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36070 = cljs.core.seq(sources);
var chunk__36071 = null;
var count__36072 = (0);
var i__36073 = (0);
while(true){
if((i__36073 < count__36072)){
var map__36083 = chunk__36071.cljs$core$IIndexed$_nth$arity$2(null,i__36073);
var map__36083__$1 = cljs.core.__destructure_map(map__36083);
var src = map__36083__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36083__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36085){var e_36494 = e36085;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36494);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36494.message)].join('')));
}

var G__36495 = seq__36070;
var G__36496 = chunk__36071;
var G__36497 = count__36072;
var G__36498 = (i__36073 + (1));
seq__36070 = G__36495;
chunk__36071 = G__36496;
count__36072 = G__36497;
i__36073 = G__36498;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36070);
if(temp__5753__auto__){
var seq__36070__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36070__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36070__$1);
var G__36499 = cljs.core.chunk_rest(seq__36070__$1);
var G__36500 = c__4679__auto__;
var G__36501 = cljs.core.count(c__4679__auto__);
var G__36502 = (0);
seq__36070 = G__36499;
chunk__36071 = G__36500;
count__36072 = G__36501;
i__36073 = G__36502;
continue;
} else {
var map__36087 = cljs.core.first(seq__36070__$1);
var map__36087__$1 = cljs.core.__destructure_map(map__36087);
var src = map__36087__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36087__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e36088){var e_36503 = e36088;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36503);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36503.message)].join('')));
}

var G__36504 = cljs.core.next(seq__36070__$1);
var G__36505 = null;
var G__36506 = (0);
var G__36507 = (0);
seq__36070 = G__36504;
chunk__36071 = G__36505;
count__36072 = G__36506;
i__36073 = G__36507;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36089 = cljs.core.seq(js_requires);
var chunk__36090 = null;
var count__36091 = (0);
var i__36092 = (0);
while(true){
if((i__36092 < count__36091)){
var js_ns = chunk__36090.cljs$core$IIndexed$_nth$arity$2(null,i__36092);
var require_str_36508 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36508);


var G__36509 = seq__36089;
var G__36510 = chunk__36090;
var G__36511 = count__36091;
var G__36512 = (i__36092 + (1));
seq__36089 = G__36509;
chunk__36090 = G__36510;
count__36091 = G__36511;
i__36092 = G__36512;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36089);
if(temp__5753__auto__){
var seq__36089__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36089__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36089__$1);
var G__36513 = cljs.core.chunk_rest(seq__36089__$1);
var G__36514 = c__4679__auto__;
var G__36515 = cljs.core.count(c__4679__auto__);
var G__36516 = (0);
seq__36089 = G__36513;
chunk__36090 = G__36514;
count__36091 = G__36515;
i__36092 = G__36516;
continue;
} else {
var js_ns = cljs.core.first(seq__36089__$1);
var require_str_36517 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36517);


var G__36518 = cljs.core.next(seq__36089__$1);
var G__36519 = null;
var G__36520 = (0);
var G__36521 = (0);
seq__36089 = G__36518;
chunk__36090 = G__36519;
count__36091 = G__36520;
i__36092 = G__36521;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__36096){
var map__36097 = p__36096;
var map__36097__$1 = cljs.core.__destructure_map(map__36097);
var msg = map__36097__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36097__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36097__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36098(s__36099){
return (new cljs.core.LazySeq(null,(function (){
var s__36099__$1 = s__36099;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__36099__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__36104 = cljs.core.first(xs__6308__auto__);
var map__36104__$1 = cljs.core.__destructure_map(map__36104);
var src = map__36104__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36104__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36104__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__36099__$1,map__36104,map__36104__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36097,map__36097__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36098_$_iter__36100(s__36101){
return (new cljs.core.LazySeq(null,((function (s__36099__$1,map__36104,map__36104__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36097,map__36097__$1,msg,info,reload_info){
return (function (){
var s__36101__$1 = s__36101;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__36101__$1);
if(temp__5753__auto____$1){
var s__36101__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36101__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__36101__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__36103 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__36102 = (0);
while(true){
if((i__36102 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__36102);
cljs.core.chunk_append(b__36103,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36522 = (i__36102 + (1));
i__36102 = G__36522;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36103),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36098_$_iter__36100(cljs.core.chunk_rest(s__36101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36103),null);
}
} else {
var warning = cljs.core.first(s__36101__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36098_$_iter__36100(cljs.core.rest(s__36101__$2)));
}
} else {
return null;
}
break;
}
});})(s__36099__$1,map__36104,map__36104__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36097,map__36097__$1,msg,info,reload_info))
,null,null));
});})(s__36099__$1,map__36104,map__36104__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__36097,map__36097__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36098(cljs.core.rest(s__36099__$1)));
} else {
var G__36523 = cljs.core.rest(s__36099__$1);
s__36099__$1 = G__36523;
continue;
}
} else {
var G__36524 = cljs.core.rest(s__36099__$1);
s__36099__$1 = G__36524;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__36105_36525 = cljs.core.seq(warnings);
var chunk__36106_36526 = null;
var count__36107_36527 = (0);
var i__36108_36528 = (0);
while(true){
if((i__36108_36528 < count__36107_36527)){
var map__36113_36529 = chunk__36106_36526.cljs$core$IIndexed$_nth$arity$2(null,i__36108_36528);
var map__36113_36530__$1 = cljs.core.__destructure_map(map__36113_36529);
var w_36531 = map__36113_36530__$1;
var msg_36532__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36113_36530__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36113_36530__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36113_36530__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36113_36530__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36535)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36533),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36534),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36532__$1)].join(''));


var G__36536 = seq__36105_36525;
var G__36537 = chunk__36106_36526;
var G__36538 = count__36107_36527;
var G__36539 = (i__36108_36528 + (1));
seq__36105_36525 = G__36536;
chunk__36106_36526 = G__36537;
count__36107_36527 = G__36538;
i__36108_36528 = G__36539;
continue;
} else {
var temp__5753__auto___36540 = cljs.core.seq(seq__36105_36525);
if(temp__5753__auto___36540){
var seq__36105_36541__$1 = temp__5753__auto___36540;
if(cljs.core.chunked_seq_QMARK_(seq__36105_36541__$1)){
var c__4679__auto___36542 = cljs.core.chunk_first(seq__36105_36541__$1);
var G__36543 = cljs.core.chunk_rest(seq__36105_36541__$1);
var G__36544 = c__4679__auto___36542;
var G__36545 = cljs.core.count(c__4679__auto___36542);
var G__36546 = (0);
seq__36105_36525 = G__36543;
chunk__36106_36526 = G__36544;
count__36107_36527 = G__36545;
i__36108_36528 = G__36546;
continue;
} else {
var map__36117_36547 = cljs.core.first(seq__36105_36541__$1);
var map__36117_36548__$1 = cljs.core.__destructure_map(map__36117_36547);
var w_36549 = map__36117_36548__$1;
var msg_36550__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36117_36548__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36117_36548__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36117_36548__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36553 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36117_36548__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36553)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36551),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36552),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36550__$1)].join(''));


var G__36554 = cljs.core.next(seq__36105_36541__$1);
var G__36555 = null;
var G__36556 = (0);
var G__36557 = (0);
seq__36105_36525 = G__36554;
chunk__36106_36526 = G__36555;
count__36107_36527 = G__36556;
i__36108_36528 = G__36557;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__36094_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36094_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__36124){
var map__36125 = p__36124;
var map__36125__$1 = cljs.core.__destructure_map(map__36125);
var msg = map__36125__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36125__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36125__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__36126 = cljs.core.seq(updates);
var chunk__36128 = null;
var count__36129 = (0);
var i__36130 = (0);
while(true){
if((i__36130 < count__36129)){
var path = chunk__36128.cljs$core$IIndexed$_nth$arity$2(null,i__36130);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36254_36558 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36258_36559 = null;
var count__36259_36560 = (0);
var i__36260_36561 = (0);
while(true){
if((i__36260_36561 < count__36259_36560)){
var node_36562 = chunk__36258_36559.cljs$core$IIndexed$_nth$arity$2(null,i__36260_36561);
if(cljs.core.not(node_36562.shadow$old)){
var path_match_36563 = shadow.cljs.devtools.client.browser.match_paths(node_36562.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36563)){
var new_link_36564 = (function (){var G__36294 = node_36562.cloneNode(true);
G__36294.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36563),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36294;
})();
(node_36562.shadow$old = true);

(new_link_36564.onload = ((function (seq__36254_36558,chunk__36258_36559,count__36259_36560,i__36260_36561,seq__36126,chunk__36128,count__36129,i__36130,new_link_36564,path_match_36563,node_36562,path,map__36125,map__36125__$1,msg,updates,reload_info){
return (function (e){
var seq__36296_36565 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36298_36566 = null;
var count__36299_36567 = (0);
var i__36300_36568 = (0);
while(true){
if((i__36300_36568 < count__36299_36567)){
var map__36309_36571 = chunk__36298_36566.cljs$core$IIndexed$_nth$arity$2(null,i__36300_36568);
var map__36309_36572__$1 = cljs.core.__destructure_map(map__36309_36571);
var task_36573 = map__36309_36572__$1;
var fn_str_36574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36309_36572__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36309_36572__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36576 = goog.getObjectByName(fn_str_36574,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36575)].join(''));

(fn_obj_36576.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36576.cljs$core$IFn$_invoke$arity$2(path,new_link_36564) : fn_obj_36576.call(null,path,new_link_36564));


var G__36578 = seq__36296_36565;
var G__36579 = chunk__36298_36566;
var G__36580 = count__36299_36567;
var G__36581 = (i__36300_36568 + (1));
seq__36296_36565 = G__36578;
chunk__36298_36566 = G__36579;
count__36299_36567 = G__36580;
i__36300_36568 = G__36581;
continue;
} else {
var temp__5753__auto___36582 = cljs.core.seq(seq__36296_36565);
if(temp__5753__auto___36582){
var seq__36296_36583__$1 = temp__5753__auto___36582;
if(cljs.core.chunked_seq_QMARK_(seq__36296_36583__$1)){
var c__4679__auto___36584 = cljs.core.chunk_first(seq__36296_36583__$1);
var G__36585 = cljs.core.chunk_rest(seq__36296_36583__$1);
var G__36586 = c__4679__auto___36584;
var G__36587 = cljs.core.count(c__4679__auto___36584);
var G__36588 = (0);
seq__36296_36565 = G__36585;
chunk__36298_36566 = G__36586;
count__36299_36567 = G__36587;
i__36300_36568 = G__36588;
continue;
} else {
var map__36311_36589 = cljs.core.first(seq__36296_36583__$1);
var map__36311_36590__$1 = cljs.core.__destructure_map(map__36311_36589);
var task_36591 = map__36311_36590__$1;
var fn_str_36592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36311_36590__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36311_36590__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36594 = goog.getObjectByName(fn_str_36592,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36593)].join(''));

(fn_obj_36594.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36594.cljs$core$IFn$_invoke$arity$2(path,new_link_36564) : fn_obj_36594.call(null,path,new_link_36564));


var G__36595 = cljs.core.next(seq__36296_36583__$1);
var G__36596 = null;
var G__36597 = (0);
var G__36598 = (0);
seq__36296_36565 = G__36595;
chunk__36298_36566 = G__36596;
count__36299_36567 = G__36597;
i__36300_36568 = G__36598;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36562);
});})(seq__36254_36558,chunk__36258_36559,count__36259_36560,i__36260_36561,seq__36126,chunk__36128,count__36129,i__36130,new_link_36564,path_match_36563,node_36562,path,map__36125,map__36125__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36563], 0));

goog.dom.insertSiblingAfter(new_link_36564,node_36562);


var G__36599 = seq__36254_36558;
var G__36600 = chunk__36258_36559;
var G__36601 = count__36259_36560;
var G__36602 = (i__36260_36561 + (1));
seq__36254_36558 = G__36599;
chunk__36258_36559 = G__36600;
count__36259_36560 = G__36601;
i__36260_36561 = G__36602;
continue;
} else {
var G__36603 = seq__36254_36558;
var G__36604 = chunk__36258_36559;
var G__36605 = count__36259_36560;
var G__36606 = (i__36260_36561 + (1));
seq__36254_36558 = G__36603;
chunk__36258_36559 = G__36604;
count__36259_36560 = G__36605;
i__36260_36561 = G__36606;
continue;
}
} else {
var G__36607 = seq__36254_36558;
var G__36608 = chunk__36258_36559;
var G__36609 = count__36259_36560;
var G__36610 = (i__36260_36561 + (1));
seq__36254_36558 = G__36607;
chunk__36258_36559 = G__36608;
count__36259_36560 = G__36609;
i__36260_36561 = G__36610;
continue;
}
} else {
var temp__5753__auto___36611 = cljs.core.seq(seq__36254_36558);
if(temp__5753__auto___36611){
var seq__36254_36612__$1 = temp__5753__auto___36611;
if(cljs.core.chunked_seq_QMARK_(seq__36254_36612__$1)){
var c__4679__auto___36613 = cljs.core.chunk_first(seq__36254_36612__$1);
var G__36614 = cljs.core.chunk_rest(seq__36254_36612__$1);
var G__36615 = c__4679__auto___36613;
var G__36616 = cljs.core.count(c__4679__auto___36613);
var G__36617 = (0);
seq__36254_36558 = G__36614;
chunk__36258_36559 = G__36615;
count__36259_36560 = G__36616;
i__36260_36561 = G__36617;
continue;
} else {
var node_36618 = cljs.core.first(seq__36254_36612__$1);
if(cljs.core.not(node_36618.shadow$old)){
var path_match_36619 = shadow.cljs.devtools.client.browser.match_paths(node_36618.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36619)){
var new_link_36620 = (function (){var G__36317 = node_36618.cloneNode(true);
G__36317.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36619),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36317;
})();
(node_36618.shadow$old = true);

(new_link_36620.onload = ((function (seq__36254_36558,chunk__36258_36559,count__36259_36560,i__36260_36561,seq__36126,chunk__36128,count__36129,i__36130,new_link_36620,path_match_36619,node_36618,seq__36254_36612__$1,temp__5753__auto___36611,path,map__36125,map__36125__$1,msg,updates,reload_info){
return (function (e){
var seq__36318_36621 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36320_36622 = null;
var count__36321_36623 = (0);
var i__36322_36624 = (0);
while(true){
if((i__36322_36624 < count__36321_36623)){
var map__36333_36625 = chunk__36320_36622.cljs$core$IIndexed$_nth$arity$2(null,i__36322_36624);
var map__36333_36626__$1 = cljs.core.__destructure_map(map__36333_36625);
var task_36627 = map__36333_36626__$1;
var fn_str_36628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36333_36626__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36333_36626__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36630 = goog.getObjectByName(fn_str_36628,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36629)].join(''));

(fn_obj_36630.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36630.cljs$core$IFn$_invoke$arity$2(path,new_link_36620) : fn_obj_36630.call(null,path,new_link_36620));


var G__36631 = seq__36318_36621;
var G__36632 = chunk__36320_36622;
var G__36633 = count__36321_36623;
var G__36634 = (i__36322_36624 + (1));
seq__36318_36621 = G__36631;
chunk__36320_36622 = G__36632;
count__36321_36623 = G__36633;
i__36322_36624 = G__36634;
continue;
} else {
var temp__5753__auto___36635__$1 = cljs.core.seq(seq__36318_36621);
if(temp__5753__auto___36635__$1){
var seq__36318_36636__$1 = temp__5753__auto___36635__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36318_36636__$1)){
var c__4679__auto___36637 = cljs.core.chunk_first(seq__36318_36636__$1);
var G__36638 = cljs.core.chunk_rest(seq__36318_36636__$1);
var G__36639 = c__4679__auto___36637;
var G__36640 = cljs.core.count(c__4679__auto___36637);
var G__36641 = (0);
seq__36318_36621 = G__36638;
chunk__36320_36622 = G__36639;
count__36321_36623 = G__36640;
i__36322_36624 = G__36641;
continue;
} else {
var map__36338_36642 = cljs.core.first(seq__36318_36636__$1);
var map__36338_36643__$1 = cljs.core.__destructure_map(map__36338_36642);
var task_36644 = map__36338_36643__$1;
var fn_str_36645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36338_36643__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36646 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36338_36643__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36647 = goog.getObjectByName(fn_str_36645,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36646)].join(''));

(fn_obj_36647.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36647.cljs$core$IFn$_invoke$arity$2(path,new_link_36620) : fn_obj_36647.call(null,path,new_link_36620));


var G__36648 = cljs.core.next(seq__36318_36636__$1);
var G__36649 = null;
var G__36650 = (0);
var G__36651 = (0);
seq__36318_36621 = G__36648;
chunk__36320_36622 = G__36649;
count__36321_36623 = G__36650;
i__36322_36624 = G__36651;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36618);
});})(seq__36254_36558,chunk__36258_36559,count__36259_36560,i__36260_36561,seq__36126,chunk__36128,count__36129,i__36130,new_link_36620,path_match_36619,node_36618,seq__36254_36612__$1,temp__5753__auto___36611,path,map__36125,map__36125__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36619], 0));

goog.dom.insertSiblingAfter(new_link_36620,node_36618);


var G__36652 = cljs.core.next(seq__36254_36612__$1);
var G__36653 = null;
var G__36654 = (0);
var G__36655 = (0);
seq__36254_36558 = G__36652;
chunk__36258_36559 = G__36653;
count__36259_36560 = G__36654;
i__36260_36561 = G__36655;
continue;
} else {
var G__36656 = cljs.core.next(seq__36254_36612__$1);
var G__36657 = null;
var G__36658 = (0);
var G__36659 = (0);
seq__36254_36558 = G__36656;
chunk__36258_36559 = G__36657;
count__36259_36560 = G__36658;
i__36260_36561 = G__36659;
continue;
}
} else {
var G__36660 = cljs.core.next(seq__36254_36612__$1);
var G__36661 = null;
var G__36662 = (0);
var G__36663 = (0);
seq__36254_36558 = G__36660;
chunk__36258_36559 = G__36661;
count__36259_36560 = G__36662;
i__36260_36561 = G__36663;
continue;
}
}
} else {
}
}
break;
}


var G__36664 = seq__36126;
var G__36665 = chunk__36128;
var G__36666 = count__36129;
var G__36667 = (i__36130 + (1));
seq__36126 = G__36664;
chunk__36128 = G__36665;
count__36129 = G__36666;
i__36130 = G__36667;
continue;
} else {
var G__36668 = seq__36126;
var G__36669 = chunk__36128;
var G__36670 = count__36129;
var G__36671 = (i__36130 + (1));
seq__36126 = G__36668;
chunk__36128 = G__36669;
count__36129 = G__36670;
i__36130 = G__36671;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36126);
if(temp__5753__auto__){
var seq__36126__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36126__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36126__$1);
var G__36672 = cljs.core.chunk_rest(seq__36126__$1);
var G__36673 = c__4679__auto__;
var G__36674 = cljs.core.count(c__4679__auto__);
var G__36675 = (0);
seq__36126 = G__36672;
chunk__36128 = G__36673;
count__36129 = G__36674;
i__36130 = G__36675;
continue;
} else {
var path = cljs.core.first(seq__36126__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36343_36676 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36347_36677 = null;
var count__36348_36678 = (0);
var i__36349_36679 = (0);
while(true){
if((i__36349_36679 < count__36348_36678)){
var node_36680 = chunk__36347_36677.cljs$core$IIndexed$_nth$arity$2(null,i__36349_36679);
if(cljs.core.not(node_36680.shadow$old)){
var path_match_36681 = shadow.cljs.devtools.client.browser.match_paths(node_36680.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36681)){
var new_link_36682 = (function (){var G__36416 = node_36680.cloneNode(true);
G__36416.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36681),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36416;
})();
(node_36680.shadow$old = true);

(new_link_36682.onload = ((function (seq__36343_36676,chunk__36347_36677,count__36348_36678,i__36349_36679,seq__36126,chunk__36128,count__36129,i__36130,new_link_36682,path_match_36681,node_36680,path,seq__36126__$1,temp__5753__auto__,map__36125,map__36125__$1,msg,updates,reload_info){
return (function (e){
var seq__36417_36683 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36419_36684 = null;
var count__36420_36685 = (0);
var i__36421_36686 = (0);
while(true){
if((i__36421_36686 < count__36420_36685)){
var map__36425_36687 = chunk__36419_36684.cljs$core$IIndexed$_nth$arity$2(null,i__36421_36686);
var map__36425_36688__$1 = cljs.core.__destructure_map(map__36425_36687);
var task_36689 = map__36425_36688__$1;
var fn_str_36690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36425_36688__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36425_36688__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36692 = goog.getObjectByName(fn_str_36690,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36691)].join(''));

(fn_obj_36692.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36692.cljs$core$IFn$_invoke$arity$2(path,new_link_36682) : fn_obj_36692.call(null,path,new_link_36682));


var G__36693 = seq__36417_36683;
var G__36694 = chunk__36419_36684;
var G__36695 = count__36420_36685;
var G__36696 = (i__36421_36686 + (1));
seq__36417_36683 = G__36693;
chunk__36419_36684 = G__36694;
count__36420_36685 = G__36695;
i__36421_36686 = G__36696;
continue;
} else {
var temp__5753__auto___36697__$1 = cljs.core.seq(seq__36417_36683);
if(temp__5753__auto___36697__$1){
var seq__36417_36698__$1 = temp__5753__auto___36697__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36417_36698__$1)){
var c__4679__auto___36699 = cljs.core.chunk_first(seq__36417_36698__$1);
var G__36700 = cljs.core.chunk_rest(seq__36417_36698__$1);
var G__36701 = c__4679__auto___36699;
var G__36702 = cljs.core.count(c__4679__auto___36699);
var G__36703 = (0);
seq__36417_36683 = G__36700;
chunk__36419_36684 = G__36701;
count__36420_36685 = G__36702;
i__36421_36686 = G__36703;
continue;
} else {
var map__36426_36704 = cljs.core.first(seq__36417_36698__$1);
var map__36426_36705__$1 = cljs.core.__destructure_map(map__36426_36704);
var task_36706 = map__36426_36705__$1;
var fn_str_36707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36426_36705__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36426_36705__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36709 = goog.getObjectByName(fn_str_36707,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36708)].join(''));

(fn_obj_36709.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36709.cljs$core$IFn$_invoke$arity$2(path,new_link_36682) : fn_obj_36709.call(null,path,new_link_36682));


var G__36710 = cljs.core.next(seq__36417_36698__$1);
var G__36711 = null;
var G__36712 = (0);
var G__36713 = (0);
seq__36417_36683 = G__36710;
chunk__36419_36684 = G__36711;
count__36420_36685 = G__36712;
i__36421_36686 = G__36713;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36680);
});})(seq__36343_36676,chunk__36347_36677,count__36348_36678,i__36349_36679,seq__36126,chunk__36128,count__36129,i__36130,new_link_36682,path_match_36681,node_36680,path,seq__36126__$1,temp__5753__auto__,map__36125,map__36125__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36681], 0));

goog.dom.insertSiblingAfter(new_link_36682,node_36680);


var G__36714 = seq__36343_36676;
var G__36715 = chunk__36347_36677;
var G__36716 = count__36348_36678;
var G__36717 = (i__36349_36679 + (1));
seq__36343_36676 = G__36714;
chunk__36347_36677 = G__36715;
count__36348_36678 = G__36716;
i__36349_36679 = G__36717;
continue;
} else {
var G__36718 = seq__36343_36676;
var G__36719 = chunk__36347_36677;
var G__36720 = count__36348_36678;
var G__36721 = (i__36349_36679 + (1));
seq__36343_36676 = G__36718;
chunk__36347_36677 = G__36719;
count__36348_36678 = G__36720;
i__36349_36679 = G__36721;
continue;
}
} else {
var G__36722 = seq__36343_36676;
var G__36723 = chunk__36347_36677;
var G__36724 = count__36348_36678;
var G__36725 = (i__36349_36679 + (1));
seq__36343_36676 = G__36722;
chunk__36347_36677 = G__36723;
count__36348_36678 = G__36724;
i__36349_36679 = G__36725;
continue;
}
} else {
var temp__5753__auto___36726__$1 = cljs.core.seq(seq__36343_36676);
if(temp__5753__auto___36726__$1){
var seq__36343_36727__$1 = temp__5753__auto___36726__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36343_36727__$1)){
var c__4679__auto___36728 = cljs.core.chunk_first(seq__36343_36727__$1);
var G__36729 = cljs.core.chunk_rest(seq__36343_36727__$1);
var G__36730 = c__4679__auto___36728;
var G__36731 = cljs.core.count(c__4679__auto___36728);
var G__36732 = (0);
seq__36343_36676 = G__36729;
chunk__36347_36677 = G__36730;
count__36348_36678 = G__36731;
i__36349_36679 = G__36732;
continue;
} else {
var node_36733 = cljs.core.first(seq__36343_36727__$1);
if(cljs.core.not(node_36733.shadow$old)){
var path_match_36734 = shadow.cljs.devtools.client.browser.match_paths(node_36733.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36734)){
var new_link_36735 = (function (){var G__36427 = node_36733.cloneNode(true);
G__36427.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36734),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36427;
})();
(node_36733.shadow$old = true);

(new_link_36735.onload = ((function (seq__36343_36676,chunk__36347_36677,count__36348_36678,i__36349_36679,seq__36126,chunk__36128,count__36129,i__36130,new_link_36735,path_match_36734,node_36733,seq__36343_36727__$1,temp__5753__auto___36726__$1,path,seq__36126__$1,temp__5753__auto__,map__36125,map__36125__$1,msg,updates,reload_info){
return (function (e){
var seq__36428_36737 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__36430_36738 = null;
var count__36431_36739 = (0);
var i__36432_36740 = (0);
while(true){
if((i__36432_36740 < count__36431_36739)){
var map__36440_36741 = chunk__36430_36738.cljs$core$IIndexed$_nth$arity$2(null,i__36432_36740);
var map__36440_36742__$1 = cljs.core.__destructure_map(map__36440_36741);
var task_36743 = map__36440_36742__$1;
var fn_str_36744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36440_36742__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36440_36742__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36747 = goog.getObjectByName(fn_str_36744,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36745)].join(''));

(fn_obj_36747.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36747.cljs$core$IFn$_invoke$arity$2(path,new_link_36735) : fn_obj_36747.call(null,path,new_link_36735));


var G__36749 = seq__36428_36737;
var G__36750 = chunk__36430_36738;
var G__36751 = count__36431_36739;
var G__36752 = (i__36432_36740 + (1));
seq__36428_36737 = G__36749;
chunk__36430_36738 = G__36750;
count__36431_36739 = G__36751;
i__36432_36740 = G__36752;
continue;
} else {
var temp__5753__auto___36753__$2 = cljs.core.seq(seq__36428_36737);
if(temp__5753__auto___36753__$2){
var seq__36428_36754__$1 = temp__5753__auto___36753__$2;
if(cljs.core.chunked_seq_QMARK_(seq__36428_36754__$1)){
var c__4679__auto___36755 = cljs.core.chunk_first(seq__36428_36754__$1);
var G__36756 = cljs.core.chunk_rest(seq__36428_36754__$1);
var G__36757 = c__4679__auto___36755;
var G__36758 = cljs.core.count(c__4679__auto___36755);
var G__36759 = (0);
seq__36428_36737 = G__36756;
chunk__36430_36738 = G__36757;
count__36431_36739 = G__36758;
i__36432_36740 = G__36759;
continue;
} else {
var map__36441_36760 = cljs.core.first(seq__36428_36754__$1);
var map__36441_36761__$1 = cljs.core.__destructure_map(map__36441_36760);
var task_36762 = map__36441_36761__$1;
var fn_str_36763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36441_36761__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_36764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36441_36761__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_36765 = goog.getObjectByName(fn_str_36763,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_36764)].join(''));

(fn_obj_36765.cljs$core$IFn$_invoke$arity$2 ? fn_obj_36765.cljs$core$IFn$_invoke$arity$2(path,new_link_36735) : fn_obj_36765.call(null,path,new_link_36735));


var G__36766 = cljs.core.next(seq__36428_36754__$1);
var G__36767 = null;
var G__36768 = (0);
var G__36769 = (0);
seq__36428_36737 = G__36766;
chunk__36430_36738 = G__36767;
count__36431_36739 = G__36768;
i__36432_36740 = G__36769;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_36733);
});})(seq__36343_36676,chunk__36347_36677,count__36348_36678,i__36349_36679,seq__36126,chunk__36128,count__36129,i__36130,new_link_36735,path_match_36734,node_36733,seq__36343_36727__$1,temp__5753__auto___36726__$1,path,seq__36126__$1,temp__5753__auto__,map__36125,map__36125__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36734], 0));

goog.dom.insertSiblingAfter(new_link_36735,node_36733);


var G__36770 = cljs.core.next(seq__36343_36727__$1);
var G__36771 = null;
var G__36772 = (0);
var G__36773 = (0);
seq__36343_36676 = G__36770;
chunk__36347_36677 = G__36771;
count__36348_36678 = G__36772;
i__36349_36679 = G__36773;
continue;
} else {
var G__36774 = cljs.core.next(seq__36343_36727__$1);
var G__36775 = null;
var G__36776 = (0);
var G__36777 = (0);
seq__36343_36676 = G__36774;
chunk__36347_36677 = G__36775;
count__36348_36678 = G__36776;
i__36349_36679 = G__36777;
continue;
}
} else {
var G__36778 = cljs.core.next(seq__36343_36727__$1);
var G__36779 = null;
var G__36780 = (0);
var G__36781 = (0);
seq__36343_36676 = G__36778;
chunk__36347_36677 = G__36779;
count__36348_36678 = G__36780;
i__36349_36679 = G__36781;
continue;
}
}
} else {
}
}
break;
}


var G__36782 = cljs.core.next(seq__36126__$1);
var G__36783 = null;
var G__36784 = (0);
var G__36785 = (0);
seq__36126 = G__36782;
chunk__36128 = G__36783;
count__36129 = G__36784;
i__36130 = G__36785;
continue;
} else {
var G__36786 = cljs.core.next(seq__36126__$1);
var G__36787 = null;
var G__36788 = (0);
var G__36789 = (0);
seq__36126 = G__36786;
chunk__36128 = G__36787;
count__36129 = G__36788;
i__36130 = G__36789;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__36442){
var map__36443 = p__36442;
var map__36443__$1 = cljs.core.__destructure_map(map__36443);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36443__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__36452){
var map__36453 = p__36452;
var map__36453__$1 = cljs.core.__destructure_map(map__36453);
var _ = map__36453__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36453__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__36454,done,error){
var map__36455 = p__36454;
var map__36455__$1 = cljs.core.__destructure_map(map__36455);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36455__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__36463,done,error){
var map__36464 = p__36463;
var map__36464__$1 = cljs.core.__destructure_map(map__36464);
var msg = map__36464__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36464__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36464__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36464__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36465){
var map__36472 = p__36465;
var map__36472__$1 = cljs.core.__destructure_map(map__36472);
var src = map__36472__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36472__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__36473 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__36473) : done.call(null,G__36473));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__36474){
var map__36475 = p__36474;
var map__36475__$1 = cljs.core.__destructure_map(map__36475);
var msg__$1 = map__36475__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36475__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e36479){var ex = e36479;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__36480){
var map__36481 = p__36480;
var map__36481__$1 = cljs.core.__destructure_map(map__36481);
var env = map__36481__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36481__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__36483){
var map__36484 = p__36483;
var map__36484__$1 = cljs.core.__destructure_map(map__36484);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36484__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36484__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__36487){
var map__36488 = p__36487;
var map__36488__$1 = cljs.core.__destructure_map(map__36488);
var svc = map__36488__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36488__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
