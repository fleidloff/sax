sax.build = function build(options) {
	var sax = {},
		container = options && options.container || "sax-container",
		chart = buildChart(document.getElementById(container)),
		buttons = chart.buttons;

	sax.note = buildNote(sax, chart.paper, chart.buttons);

	sax.buttons = function _buttons() {
		return Object.keys(buttons);
	};

	sax.press = function _press(button) {
		if (buttons[button]) {
			buttons[button].press();
		}
		return sax;
	};

	sax.release = function _release(button) {
		if (buttons[button]) {
			buttons[button].release();
		}
		return sax;
	};

	init(sax);

	return sax;
};
