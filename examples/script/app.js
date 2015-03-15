"use strict";
var sax;
fingerings.ready(function() {
	sax = fingerings.sax.build("sax-container");
	// sax.release("all").press("left-index").press("right-middle");
	// sax.note("c4", ["left-index", "right-index"]);
	sax.note("c5");

});

function inputChange(note, input) {
	delayed(function() {
		try {
			input.className = "";
			if (sax.note(note)) {
				input.className = "valid";
			}
		} catch(e) {
			input.className = "invalid";
		}
	});
}

var delayed = (function delayed() {
	var timeout;

	return function(cb) {
		clearTimeout(timeout);
		timeout = setTimeout(cb, 300);
	}
})();
