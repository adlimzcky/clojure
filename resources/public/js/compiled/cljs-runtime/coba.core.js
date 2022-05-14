goog.provide('coba.core');
coba.core.dev_setup = (function coba$core$dev_setup(){
if(coba.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
coba.core.mount_root = (function coba$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [coba.views.main_panel], null),root_el);
});
coba.core.init = (function coba$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("coba.events","initialize-db","coba.events/initialize-db",-252834284)], null));

coba.core.dev_setup();

return coba.core.mount_root();
});

//# sourceMappingURL=coba.core.js.map
