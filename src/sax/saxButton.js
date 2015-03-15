function saxButton(element, hidden) {
	return {
		release: function release() {
			element.attr({"fill": "#fff"});
			return this;
		},
		press: function press() {
			element.attr({"fill": "#222"});
			// element.attr({"stroke": "#000"});
			return this;
		},
		element: function() {
			return element;
		},
		isHidden: function() {
			return hidden === true;
		}
	};

}
