// Anti-spam: the address never appears in the HTML. The user and domain
// are stored reversed in data attributes and only assembled into a
// mailto: link at click time.
(function() {
	var link = document.getElementById('email-link');
	if (!link) return;

	var reverse = function(s) { return s.split('').reverse().join(''); };

	link.addEventListener('click', function(e) {
		e.preventDefault();
		window.open('mailto:'
			+ reverse(link.getAttribute('data-u'))
			+ '@'
			+ reverse(link.getAttribute('data-d')), '_blank', 'noopener');
	});
})();
