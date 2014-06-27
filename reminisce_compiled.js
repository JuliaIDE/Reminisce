if(!lt.util.load.provided_QMARK_('lt.plugins.reminisce')) {
goog.provide('lt.plugins.reminisce');
goog.require('cljs.core');
goog.require('lt.objs.opener');
goog.require('lt.objs.tabs');
goog.require('lt.objs.cache');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.opener');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.tabs');
goog.require('lt.objs.editor');
goog.require('lt.objs.cache');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
/**
* @param {...*} var_args
*/
lt.plugins.reminisce.raise_result = (function() { 
var raise_result__delegate = function (obj,k,args){var temp__4092__auto__ = new cljs.core.Keyword(null,"reaction","reaction",4441361819).cljs$core$IFn$_invoke$arity$1(lt.object.__GT_behavior.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"get-state","get-state",729154252).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"listeners","listeners",4090152369).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,obj))))));if(cljs.core.truth_(temp__4092__auto__))
{var f = temp__4092__auto__;return cljs.core.apply.call(null,f,obj,args);
} else
{return null;
}
};
var raise_result = function (obj,k,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return raise_result__delegate.call(this,obj,k,args);};
raise_result.cljs$lang$maxFixedArity = 2;
raise_result.cljs$lang$applyTo = (function (arglist__8018){
var obj = cljs.core.first(arglist__8018);
arglist__8018 = cljs.core.next(arglist__8018);
var k = cljs.core.first(arglist__8018);
var args = cljs.core.rest(arglist__8018);
return raise_result__delegate(obj,k,args);
});
raise_result.cljs$core$IFn$_invoke$arity$variadic = raise_result__delegate;
return raise_result;
})()
;
lt.plugins.reminisce.__GT_state = (function __GT_state(obj){return lt.plugins.reminisce.raise_result.call(null,obj,new cljs.core.Keyword(null,"get-state","get-state",729154252));
});
lt.plugins.reminisce.restore_BANG_ = (function (){var method_table__7229__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7230__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7231__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7232__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7233__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("restore!",new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7233__auto__,method_table__7229__auto__,prefer_table__7230__auto__,method_cache__7231__auto__,cached_hierarchy__7232__auto__));
})();
lt.plugins.reminisce.cache_tabs = (function cache_tabs(){var state = cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,lt.plugins.reminisce.__GT_state,lt.objs.editor.pool.get_all.call(null)));return lt.objs.cache.store_BANG_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","tabs","lt.plugins.reminisce/tabs",2822751588),state);
});
lt.plugins.reminisce.wait_until = (function wait_until(cond,callback){if(cljs.core.truth_(cond.call(null)))
{return callback.call(null);
} else
{return setTimeout((function (){return wait_until.call(null,cond,callback);
}),100);
}
});
lt.plugins.reminisce.__BEH__restore_tabs = (function __BEH__restore_tabs(this$){var seq__8010 = cljs.core.seq.call(null,lt.objs.cache.fetch.call(null,new cljs.core.Keyword("lt.plugins.reminisce","tabs","lt.plugins.reminisce/tabs",2822751588)));var chunk__8011 = null;var count__8012 = 0;var i__8013 = 0;while(true){
if((i__8013 < count__8012))
{var tab = cljs.core._nth.call(null,chunk__8011,i__8013);lt.plugins.reminisce.restore_BANG_.call(null,tab);
{
var G__8019 = seq__8010;
var G__8020 = chunk__8011;
var G__8021 = count__8012;
var G__8022 = (i__8013 + 1);
seq__8010 = G__8019;
chunk__8011 = G__8020;
count__8012 = G__8021;
i__8013 = G__8022;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8010);if(temp__4092__auto__)
{var seq__8010__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8010__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__8010__$1);{
var G__8023 = cljs.core.chunk_rest.call(null,seq__8010__$1);
var G__8024 = c__7119__auto__;
var G__8025 = cljs.core.count.call(null,c__7119__auto__);
var G__8026 = 0;
seq__8010 = G__8023;
chunk__8011 = G__8024;
count__8012 = G__8025;
i__8013 = G__8026;
continue;
}
} else
{var tab = cljs.core.first.call(null,seq__8010__$1);lt.plugins.reminisce.restore_BANG_.call(null,tab);
{
var G__8027 = cljs.core.next.call(null,seq__8010__$1);
var G__8028 = null;
var G__8029 = 0;
var G__8030 = 0;
seq__8010 = G__8027;
chunk__8011 = G__8028;
count__8012 = G__8029;
i__8013 = G__8030;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","restore-tabs","lt.plugins.reminisce/restore-tabs",2301820229),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.reminisce.__BEH__restore_tabs,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-init","post-init",2970371471),null], null), null));
lt.plugins.reminisce.scroll_pos = (function scroll_pos(ed){return (function (p1__8014_SHARP_){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__8014_SHARP_.left,p1__8014_SHARP_.top], null);
}).call(null,lt.objs.editor.__GT_cm_ed.call(null,ed).getScrollInfo());
});
lt.plugins.reminisce.__BEH__editor_state = (function __BEH__editor_state(editor){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"editor","editor",4001043679),new cljs.core.Keyword(null,"file","file",1017047278),path,new cljs.core.Keyword(null,"content","content",1965434859),(cljs.core.truth_((function (){var or__6371__auto__ = path;if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{return new cljs.core.Keyword(null,"dirty","dirty",1109497668).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));
}
})())?lt.objs.editor.__GT_val.call(null,editor):null),new cljs.core.Keyword(null,"dirty","dirty",1109497668),cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"dirty","dirty",1109497668)),new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"scroll","scroll",4401191487),lt.plugins.reminisce.scroll_pos.call(null,editor),new cljs.core.Keyword(null,"cursor","cursor",3959752392),lt.objs.editor.__GT_cursor.call(null,editor)], null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","editor-state","lt.plugins.reminisce/editor-state",681346097),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.reminisce.__BEH__editor_state,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"get-state","get-state",729154252),null], null), null));
lt.plugins.reminisce.editor_for_file = (function editor_for_file(file){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__8015_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8015_SHARP_))),file);
}),lt.objs.editor.pool.get_all.call(null)));
});
cljs.core._add_method.call(null,lt.plugins.reminisce.restore_BANG_,new cljs.core.Keyword(null,"editor","editor",4001043679),(function (p__8016){var map__8017 = p__8016;var map__8017__$1 = ((cljs.core.seq_QMARK_.call(null,map__8017))?cljs.core.apply.call(null,cljs.core.hash_map,map__8017):map__8017);var cursor = cljs.core.get.call(null,map__8017__$1,new cljs.core.Keyword(null,"cursor","cursor",3959752392));var scroll = cljs.core.get.call(null,map__8017__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487));var tags = cljs.core.get.call(null,map__8017__$1,new cljs.core.Keyword(null,"tags","tags",1017456523));var info = cljs.core.get.call(null,map__8017__$1,new cljs.core.Keyword(null,"info","info",1017141280));var dirty = cljs.core.get.call(null,map__8017__$1,new cljs.core.Keyword(null,"dirty","dirty",1109497668));var content = cljs.core.get.call(null,map__8017__$1,new cljs.core.Keyword(null,"content","content",1965434859));var file = cljs.core.get.call(null,map__8017__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4092__auto__ = (cljs.core.truth_(file)?(function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),file);
return lt.plugins.reminisce.editor_for_file.call(null,file);
})():(function (){var ed = lt.objs.editor.pool.create.call(null,info);lt.object.add_tags.call(null,ed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editor.transient","editor.transient",3554141883)], null));
lt.object.raise.call(null,lt.objs.opener.opener,new cljs.core.Keyword(null,"open","open",1017321916),ed);
lt.objs.tabs.add_BANG_.call(null,ed);
return ed;
})());if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(cljs.core.truth_((function (){var and__6359__auto__ = dirty;if(cljs.core.truth_(and__6359__auto__))
{return content;
} else
{return and__6359__auto__;
}
})()))
{lt.objs.editor.set_val.call(null,ed,content);
} else
{}
lt.objs.editor.__GT_cm_ed.call(null,ed).setCursor(cljs.core.clj__GT_js.call(null,cursor));
return cljs.core.apply.call(null,lt.objs.editor.scroll_to,ed,scroll);
} else
{return null;
}
}));
lt.plugins.reminisce.__BEH__trigger_cache_tabs = (function __BEH__trigger_cache_tabs(editor){return lt.plugins.reminisce.cache_tabs.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","trigger-cache-tabs","lt.plugins.reminisce/trigger-cache-tabs",1822764548),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.reminisce.__BEH__trigger_cache_tabs,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"move","move",1017261891),null,new cljs.core.Keyword(null,"active","active",3885920888),null,new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),1000);
}

//# sourceMappingURL=reminisce_compiled.js.map