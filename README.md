Reminisce
=========

Reminisce caches your tabs (including their content) so that you can close and reopen Light Table without losing your place. To install, simply search for "Reminisce" in the plugin manager.

Features:
 * Close and reopen LT without losing data
 * C-Shift-T to reopen the last closed tab, just like Chrome (but works even after a restart)
 * Preserves the content of "dirty" editors after restarting, but you can go back to the original file with C-Z.
 * Persists the workspace sidebar and console
 
Current Limitations:
 * Walks over editors rather than tabs themselves, so the order of tabs may not be preserved.
 * Tabsets are not supported.

In principle the system is also really generic – once the above issues are fixed any kind of tab, not just editors, will be able to hook into it and preserve content.
