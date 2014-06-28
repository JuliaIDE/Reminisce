if(!lt.util.load.provided_QMARK_('lt.plugins.reminisce')) {
goog.provide('lt.plugins.reminisce');
goog.require('cljs.core');
goog.require('lt.objs.opener');
goog.require('lt.objs.sidebar');
goog.require('lt.objs.tabs');
goog.require('lt.objs.cache');
goog.require('lt.objs.sidebar.workspace');
goog.require('lt.objs.sidebar.workspace');
goog.require('lt.objs.sidebar');
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
lt.plugins.reminisce.__GT_state = (function __GT_state(obj){return lt.object.raise_reduce.call(null,obj,new cljs.core.Keyword(null,"get-state","get-state",729154252));
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
lt.plugins.reminisce.__BEH__restore_tabs = (function __BEH__restore_tabs(this$){var seq__7908 = cljs.core.seq.call(null,lt.objs.cache.fetch.call(null,new cljs.core.Keyword("lt.plugins.reminisce","tabs","lt.plugins.reminisce/tabs",2822751588)));var chunk__7909 = null;var count__7910 = 0;var i__7911 = 0;while(true){
if((i__7911 < count__7910))
{var tab = cljs.core._nth.call(null,chunk__7909,i__7911);lt.plugins.reminisce.restore_BANG_.call(null,tab);
{
var G__7916 = seq__7908;
var G__7917 = chunk__7909;
var G__7918 = count__7910;
var G__7919 = (i__7911 + 1);
seq__7908 = G__7916;
chunk__7909 = G__7917;
count__7910 = G__7918;
i__7911 = G__7919;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7908);if(temp__4092__auto__)
{var seq__7908__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7908__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__7908__$1);{
var G__7920 = cljs.core.chunk_rest.call(null,seq__7908__$1);
var G__7921 = c__7119__auto__;
var G__7922 = cljs.core.count.call(null,c__7119__auto__);
var G__7923 = 0;
seq__7908 = G__7920;
chunk__7909 = G__7921;
count__7910 = G__7922;
i__7911 = G__7923;
continue;
}
} else
{var tab = cljs.core.first.call(null,seq__7908__$1);lt.plugins.reminisce.restore_BANG_.call(null,tab);
{
var G__7924 = cljs.core.next.call(null,seq__7908__$1);
var G__7925 = null;
var G__7926 = 0;
var G__7927 = 0;
seq__7908 = G__7924;
chunk__7909 = G__7925;
count__7910 = G__7926;
i__7911 = G__7927;
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
lt.plugins.reminisce.queue_length = 10;
lt.plugins.reminisce.state_cache = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.reminisce.queue_BANG_ = (function queue_BANG_(obj){var queue = lt.objs.cache.fetch.call(null,new cljs.core.Keyword("lt.plugins.reminisce","queue","lt.plugins.reminisce/queue",2683891473));return lt.objs.cache.store_BANG_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","queue","lt.plugins.reminisce/queue",2683891473),cljs.core.concat.call(null,(((cljs.core.count.call(null,queue) > lt.plugins.reminisce.queue_length))?cljs.core.rest.call(null,queue):queue),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null)));
});
lt.plugins.reminisce.unqueue_BANG_ = (function unqueue_BANG_(){var queue = lt.objs.cache.fetch.call(null,new cljs.core.Keyword("lt.plugins.reminisce","queue","lt.plugins.reminisce/queue",2683891473));if(cljs.core.truth_(cljs.core.not_empty.call(null,queue)))
{var item = cljs.core.last.call(null,queue);lt.objs.cache.store_BANG_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","queue","lt.plugins.reminisce/queue",2683891473),cljs.core.drop_last.call(null,1,queue));
return item;
} else
{return null;
}
});
lt.plugins.reminisce.__BEH__queue = (function __BEH__queue(this$){var temp__4092__auto__ = cljs.core.deref.call(null,lt.plugins.reminisce.state_cache).call(null,this$);if(cljs.core.truth_(temp__4092__auto__))
{var state = temp__4092__auto__;return lt.plugins.reminisce.queue_BANG_.call(null,state);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","queue","lt.plugins.reminisce/queue",2683891473),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.reminisce.__BEH__queue,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1108660586),null], null), null));
lt.plugins.reminisce.__BEH__cache_state = (function __BEH__cache_state(this$){return cljs.core.swap_BANG_.call(null,lt.plugins.reminisce.state_cache,cljs.core.assoc,this$,lt.plugins.reminisce.__GT_state.call(null,this$));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","cache-state","lt.plugins.reminisce/cache-state",4463372940),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.reminisce.__BEH__cache_state,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"move","move",1017261891),null,new cljs.core.Keyword(null,"active","active",3885920888),null,new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),1000);
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"reminisce.reopen-tab","reminisce.reopen-tab",3174563642),new cljs.core.Keyword(null,"desc","desc",1016984067),"Tabs: Reopen the last closed tab",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.plugins.reminisce.unqueue_BANG_.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var state = temp__4092__auto__;return lt.objs.tabs.active_BANG_.call(null,lt.plugins.reminisce.restore_BANG_.call(null,state));
} else
{return null;
}
})], null));
lt.plugins.reminisce.scroll_pos = (function scroll_pos(ed){return (function (p1__7912_SHARP_){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7912_SHARP_.left,p1__7912_SHARP_.top], null);
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
lt.plugins.reminisce.editor_for_file = (function editor_for_file(file){return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__7913_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__7913_SHARP_))),file);
}),lt.objs.editor.pool.get_all.call(null)));
});
cljs.core._add_method.call(null,lt.plugins.reminisce.restore_BANG_,new cljs.core.Keyword(null,"editor","editor",4001043679),(function (p__7914){var map__7915 = p__7914;var map__7915__$1 = ((cljs.core.seq_QMARK_.call(null,map__7915))?cljs.core.apply.call(null,cljs.core.hash_map,map__7915):map__7915);var cursor = cljs.core.get.call(null,map__7915__$1,new cljs.core.Keyword(null,"cursor","cursor",3959752392));var scroll = cljs.core.get.call(null,map__7915__$1,new cljs.core.Keyword(null,"scroll","scroll",4401191487));var tags = cljs.core.get.call(null,map__7915__$1,new cljs.core.Keyword(null,"tags","tags",1017456523));var info = cljs.core.get.call(null,map__7915__$1,new cljs.core.Keyword(null,"info","info",1017141280));var dirty = cljs.core.get.call(null,map__7915__$1,new cljs.core.Keyword(null,"dirty","dirty",1109497668));var content = cljs.core.get.call(null,map__7915__$1,new cljs.core.Keyword(null,"content","content",1965434859));var file = cljs.core.get.call(null,map__7915__$1,new cljs.core.Keyword(null,"file","file",1017047278));var temp__4092__auto__ = (cljs.core.truth_(file)?(function (){lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),file);
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
cljs.core.apply.call(null,lt.objs.editor.scroll_to,ed,scroll);
return ed;
} else
{return null;
}
}));
lt.plugins.reminisce.__BEH__trigger_cache_tabs = (function __BEH__trigger_cache_tabs(editor){return lt.plugins.reminisce.cache_tabs.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","trigger-cache-tabs","lt.plugins.reminisce/trigger-cache-tabs",1822764548),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.reminisce.__BEH__trigger_cache_tabs,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"move","move",1017261891),null,new cljs.core.Keyword(null,"active","active",3885920888),null,new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),1000);
lt.plugins.reminisce.workspace_open_QMARK_ = (function workspace_open_QMARK_(){var and__6359__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.sidebar)),lt.objs.sidebar.workspace.sidebar_workspace);if(and__6359__auto__)
{return new cljs.core.Keyword(null,"open","open",1017321916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lt.objs.sidebar.sidebar));
} else
{return and__6359__auto__;
}
});
lt.plugins.reminisce.open_workspace = (function open_workspace(open){if(cljs.core.truth_((function (){var or__6371__auto__ = (function (){var and__6359__auto__ = open;if(cljs.core.truth_(and__6359__auto__))
{return cljs.core.not.call(null,lt.plugins.reminisce.workspace_open_QMARK_.call(null));
} else
{return and__6359__auto__;
}
})();if(cljs.core.truth_(or__6371__auto__))
{return or__6371__auto__;
} else
{var and__6359__auto__ = cljs.core.not.call(null,open);if(and__6359__auto__)
{return lt.plugins.reminisce.workspace_open_QMARK_.call(null);
} else
{return and__6359__auto__;
}
}
})()))
{return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"workspace.show","workspace.show",1768599592));
} else
{return null;
}
});
lt.plugins.reminisce.__BEH__cache_workspace = (function __BEH__cache_workspace(){return lt.objs.cache.store_BANG_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","workspace","lt.plugins.reminisce/workspace",1654783101),lt.plugins.reminisce.workspace_open_QMARK_.call(null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","cache-workspace","lt.plugins.reminisce/cache-workspace",1132893208),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.reminisce.__BEH__cache_workspace,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle","toggle",4440567494),null], null), null));
lt.plugins.reminisce.__BEH__restore_workspace = (function __BEH__restore_workspace(){return lt.plugins.reminisce.open_workspace.call(null,lt.objs.cache.fetch.call(null,new cljs.core.Keyword("lt.plugins.reminisce","workspace","lt.plugins.reminisce/workspace",1654783101)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","restore-workspace","lt.plugins.reminisce/restore-workspace",2601623548),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.reminisce.__BEH__restore_workspace,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-init","post-init",2970371471),null], null), null));
}

//# sourceMappingURL=reminisce_compiled.js.map