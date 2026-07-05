// Anti-spam: the address never appears in the served HTML. The user and
// domain are stored reversed in data attributes and only assembled on the
// first human interaction (hover, keyboard focus, or touch) — events that
// harvesters executing page scripts don't trigger. Once revealed, the link
// is a plain mailto: that can be clicked or right-click-copied natively;
// the visible text keeps its obfuscated look (☀️ for @) on purpose.
(function() {
	var link = document.getElementById('email-link');
	if (!link) return;

	var reverse = function(s) { return s.split('').reverse().join(''); };

	var revealed = false;
	var reveal = function() {
		if (revealed) return;
		revealed = true;
		var address = reverse(link.getAttribute('data-u'))
			+ '@'
			+ reverse(link.getAttribute('data-d'));
		link.href = 'mailto:' + address;
		link.removeAttribute('data-u');
		link.removeAttribute('data-d');
	};

	['pointerover', 'focus', 'touchstart', 'click'].forEach(function(evt) {
		link.addEventListener(evt, reveal, { once: true, passive: true });
	});
})();
