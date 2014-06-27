if(!lt.util.load.provided_QMARK_('lt.plugins.reminisce')) {
goog.provide('lt.plugins.reminisce');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor');
goog.require('lt.objs.editor');
goog.require('lt.objs.cache');
goog.require('lt.objs.cache');
lt.plugins.reminisce.__GT_state = (function __GT_state(editor){var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)));return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file","file",1017047278),path], null);
});
lt.plugins.reminisce._LT__state = (function _LT__state(p__7879){var map__7881 = p__7879;var map__7881__$1 = ((cljs.core.seq_QMARK_.call(null,map__7881))?cljs.core.apply.call(null,cljs.core.hash_map,map__7881):map__7881);var file = cljs.core.get.call(null,map__7881__$1,new cljs.core.Keyword(null,"file","file",1017047278));return lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),file);
});
lt.plugins.reminisce.update = (function update(){var state = cljs.core.map.call(null,lt.plugins.reminisce.__GT_state,lt.objs.editor.pool.get_all.call(null));return lt.objs.cache.store_BANG_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","config","lt.plugins.reminisce/config",1466471760),state);
});
lt.plugins.reminisce.refresh = (function refresh(){var seq__7886 = cljs.core.seq.call(null,lt.objs.cache.fetch.call(null,new cljs.core.Keyword("lt.plugins.reminisce","config","lt.plugins.reminisce/config",1466471760)));var chunk__7887 = null;var count__7888 = 0;var i__7889 = 0;while(true){
if((i__7889 < count__7888))
{var state = cljs.core._nth.call(null,chunk__7887,i__7889);lt.plugins.reminisce._LT__state.call(null,state);
{
var G__7890 = seq__7886;
var G__7891 = chunk__7887;
var G__7892 = count__7888;
var G__7893 = (i__7889 + 1);
seq__7886 = G__7890;
chunk__7887 = G__7891;
count__7888 = G__7892;
i__7889 = G__7893;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7886);if(temp__4092__auto__)
{var seq__7886__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7886__$1))
{var c__7119__auto__ = cljs.core.chunk_first.call(null,seq__7886__$1);{
var G__7894 = cljs.core.chunk_rest.call(null,seq__7886__$1);
var G__7895 = c__7119__auto__;
var G__7896 = cljs.core.count.call(null,c__7119__auto__);
var G__7897 = 0;
seq__7886 = G__7894;
chunk__7887 = G__7895;
count__7888 = G__7896;
i__7889 = G__7897;
continue;
}
} else
{var state = cljs.core.first.call(null,seq__7886__$1);lt.plugins.reminisce._LT__state.call(null,state);
{
var G__7898 = cljs.core.next.call(null,seq__7886__$1);
var G__7899 = null;
var G__7900 = 0;
var G__7901 = 0;
seq__7886 = G__7898;
chunk__7887 = G__7899;
count__7888 = G__7900;
i__7889 = G__7901;
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
lt.plugins.reminisce.__BEH__cache = (function __BEH__cache(editor){return lt.plugins.reminisce.update.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","cache","lt.plugins.reminisce/cache",2664122768),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.reminisce.__BEH__cache,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"move","move",1017261891),null,new cljs.core.Keyword(null,"active","active",3885920888),null,new cljs.core.Keyword(null,"save","save",1017427183),null], null), null),new cljs.core.Keyword(null,"debounce","debounce",1556599227),100);
lt.plugins.reminisce.__BEH__init = (function __BEH__init(this$){return lt.plugins.reminisce.refresh.call(null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.reminisce","init","lt.plugins.reminisce/init",2822419218),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.reminisce.__BEH__init,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"post-init","post-init",2970371471),null], null), null));
}

//# sourceMappingURL=reminisce_compiled.js.map