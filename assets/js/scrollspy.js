// Highlight the sidebar nav link of the section currently in view:
// the last section whose top has passed a line 35% down the viewport.
// Near the bottom of the page the last section wins, since a short final
// section may never be able to scroll up far enough to reach that line.
(function() {
	var links = Array.prototype.slice.call(document.querySelectorAll('#sidebar-nav a[href^="#"]'));
	if (!links.length) return;

	var pairs = links
		.map(function(link) {
			return { link: link, section: document.getElementById(link.getAttribute('href').slice(1)) };
		})
		.filter(function(p) { return p.section; });
	if (!pairs.length) return;

	var ticking = false;

	var update = function() {
		ticking = false;
		var threshold = window.innerHeight * 0.35;
		var current = pairs[0];
		pairs.forEach(function(p) {
			if (p.section.getBoundingClientRect().top <= threshold) current = p;
		});
		var doc = document.documentElement;
		if (window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
			current = pairs[pairs.length - 1];
		}
		pairs.forEach(function(p) {
			p.link.classList.toggle('active', p === current);
		});
	};

	var onScroll = function() {
		if (!ticking) {
			ticking = true;
			requestAnimationFrame(update);
		}
	};

	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', update);
	window.addEventListener('hashchange', update);
	update();
})();
