(function() {var implementors = {
"ansi_term":[["impl&lt;'a, S:&nbsp;'a + ToOwned + ?Sized&gt; Deref for <a class=\"struct\" href=\"ansi_term/struct.ANSIGenericString.html\" title=\"struct ansi_term::ANSIGenericString\">ANSIGenericString</a>&lt;'a, S&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;S as ToOwned&gt;::Owned: Debug,</span>"]],
"ascii":[["impl Deref for <a class=\"struct\" href=\"ascii/struct.AsciiString.html\" title=\"struct ascii::AsciiString\">AsciiString</a>"]],
"bytes":[["impl Deref for <a class=\"struct\" href=\"bytes/struct.Bytes.html\" title=\"struct bytes::Bytes\">Bytes</a>"],["impl Deref for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>"]],
"crossbeam_epoch":[["impl&lt;T:&nbsp;?Sized + <a class=\"trait\" href=\"crossbeam_epoch/trait.Pointable.html\" title=\"trait crossbeam_epoch::Pointable\">Pointable</a>&gt; Deref for <a class=\"struct\" href=\"crossbeam_epoch/struct.Owned.html\" title=\"struct crossbeam_epoch::Owned\">Owned</a>&lt;T&gt;"]],
"crossbeam_utils":[["impl&lt;T&gt; Deref for <a class=\"struct\" href=\"crossbeam_utils/struct.CachePadded.html\" title=\"struct crossbeam_utils::CachePadded\">CachePadded</a>&lt;T&gt;"],["impl&lt;T:&nbsp;?Sized&gt; Deref for <a class=\"struct\" href=\"crossbeam_utils/sync/struct.ShardedLockReadGuard.html\" title=\"struct crossbeam_utils::sync::ShardedLockReadGuard\">ShardedLockReadGuard</a>&lt;'_, T&gt;"],["impl&lt;T:&nbsp;?Sized&gt; Deref for <a class=\"struct\" href=\"crossbeam_utils/sync/struct.ShardedLockWriteGuard.html\" title=\"struct crossbeam_utils::sync::ShardedLockWriteGuard\">ShardedLockWriteGuard</a>&lt;'_, T&gt;"]],
"either":[["impl&lt;L, R&gt; Deref for <a class=\"enum\" href=\"either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Deref,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Deref&lt;Target = L::Target&gt;,</span>"]],
"scopeguard":[["impl&lt;T, F, S&gt; Deref for <a class=\"struct\" href=\"scopeguard/struct.ScopeGuard.html\" title=\"struct scopeguard::ScopeGuard\">ScopeGuard</a>&lt;T, F, S&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: FnOnce(T),<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"scopeguard/trait.Strategy.html\" title=\"trait scopeguard::Strategy\">Strategy</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()