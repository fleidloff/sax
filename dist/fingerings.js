// ///////////////////////////////////
// fingerings.js
//
// build date: 2015-03-15
// version: 0.0.1
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// 
// proudly built by frederik leidloff
// ///////////////////////////////////
var fingerings = {};
	fingerings.sax = {};

(function(fingerings, sax, Raphael, teoria) {
"use strict";
fingerings.ready = function _ready(cb) {
	Raphael(function() {
		if (!teoria) {
			throw new Error("teoria cannot be found");
		}
		cb();
	});
};

function buildChart(container) {
	var width = 400,
		height = 600,
		paper = Raphael(container, width, height),
		buttons = draw(paper),
		buttonsSet = paper.set(),
		hiddenButtonsSet = paper.set();

	paper.setViewBox(0, 0, width, height, false);
	paper.canvas.setAttribute('preserveAspectRatio', 'none');
	paper.canvas.setAttribute('style', 'width: 100%; height: 100%');

	for(var button in buttons) {
		if (buttons[button].isHidden()) {
			hiddenButtonsSet.push(buttons[button].element());
		}
		buttonsSet.push(buttons[button].element());
	}

	buttons.all = saxButton(buttonsSet);
	buttonsSet.attr({"stroke": "#000"});
	buttonsSet.attr({"fill": "#fff"});

	hiddenButtonsSet.attr({"stroke": "#aaa"});
	buttons.all.release();

	return {
		paper: paper,
		buttons: buttons
	};
}

// x = 400, y = 600

function draw(paper) {
	function drawButton(x, y) {
		return paper.circle(x, y, 27);
	}

	function drawSmallButton(x, y) {
		return paper.circle(x, y, 17);	
	}

	function drawSideButton(x, y) {
		return paper.rect(x, y, 25, 50, 5);
	}

	function drawSmallSideButton(x, y) {
		return paper.rect(x, y, 20, 40, 4);
	}

	function drawSidePalmButton(x, y) {
		return paper.ellipse(x, y, 15, 35).rotate(-20);
	}

	function drawFrontPalmButton(x, y) {
		return paper.ellipse(x, y, 10, 30).rotate(60);
	}

	function drawLowSideButton(x, y) {
		var path = "M0 5C0 2 3 0 5 0L45 0C48 0 50 2 50 5 L50 30 L0 30 L0 5";
		return paper.path(path).translate(x, y).rotate(20);
	}

	function drawLowSideButtonBottom(x, y) {
		return drawLowSideButton(x, y).rotate(180);
	}

	function drawSideFSharpButton(x, y) {
		return paper.ellipse(x, y, 8, 26).rotate(90);
	}

	function drawLittleFingerSideButton(x, y) {
		var path = "M0 5C0 2 3 0 5 0L55 0C58 0 60 2 60 5 L60 25 L0 25 L0 5";
		return paper.path(path).translate(x, y);
	}

	function drawLittleFingerSideButtonBottom(x, y) {
		return drawLittleFingerSideButton(x, y).rotate(180);
	}

	function drawLittleFingerSquareSideButton(x, y) {
		return paper.rect(x, y, 29, 29);
	}

	function drawOctaveButton(x, y) {
		var path = "M0 0L50 0A15 20 1 1 0 0 0z";
		return paper.path(path).translate(x, y);
	}

	function drawLowAButton(x, y) {
		var path = "M0 0L50 0A15 20 1 1 0 0 0z";
		return paper.path(path).translate(x, y).rotate(180);
	}

	function drawSax() {
		var path = "M55,0L50,600M185,0L190,370M170,435L155,570M350,492L300,600";
		paper.ellipse(275, 430, 120, 60).rotate(195);
		paper.path(path);
	}

	drawSax();

	var buttons = {};

	buttons["left-index"] = saxButton(drawButton(115, 100));
	buttons["left-middle"] = saxButton(drawButton(115, 170));
	buttons["left-ring"] = saxButton(drawButton(115, 240));
	
	buttons["right-index"] = saxButton(drawButton(115, 350));
	buttons["right-middle"] = saxButton(drawButton(115, 420));
	buttons["right-ring"] = saxButton(drawButton(115, 490));

	buttons["up-b-flat"] = saxButton(drawSmallButton(155, 135));

	buttons["side-high-e"] = saxButton(drawSideButton(35, 230));
	buttons["side-c"] = saxButton(drawSideButton(35, 290));
	buttons["side-b-flat"] = saxButton(drawSideButton(35, 350));

	buttons["palm-high-f"] = saxButton(drawSidePalmButton(208, 110));
	buttons["palm-d-sharp"] = saxButton(drawSidePalmButton(218, 60));
	buttons["palm-d"] = saxButton(drawSidePalmButton(258, 90));

	buttons["front-high-f"] = saxButton(drawFrontPalmButton(115, 50), true);

	buttons["low-e-flat"] = saxButton(drawLowSideButton(45, 520));
	buttons["low-c"] = saxButton(drawLowSideButtonBottom(34, 550));

	buttons["thumb-octave"] = saxButton(drawOctaveButton(1, 130));
	buttons["thumb-low-a"] = saxButton(drawLowAButton(1, 170), true);

	buttons["side-f-sharp"] = saxButton(drawSideFSharpButton(70, 455), true);
	buttons["high-f-sharp"] = saxButton(drawSmallSideButton(70, 365), true);

	buttons["g-sharp"] = saxButton(drawLittleFingerSideButton(165, 255));
	buttons["low-b"] = saxButton(drawLittleFingerSquareSideButton(165, 282));
	buttons["low-c-sharp"] = saxButton(drawLittleFingerSquareSideButton(197, 282));
	buttons["low-b-flat"] = saxButton(drawLittleFingerSideButtonBottom(165, 313));

	return buttons;
}
function init(sax) {
	sax.
		note("gb6", ["thumb-octave"]). 
		note("f6", ["thumb-octave", "palm-d", "palm-d-sharp", "side-high-e", "palm-high-f"]). 
		note("e6", ["thumb-octave", "palm-d", "palm-d-sharp", "side-high-e"]). 
		note("eb6", ["thumb-octave", "palm-d", "palm-d-sharp"]). 
		note("d6", ["thumb-octave", "palm-d"]). 
		note("db6", ["thumb-octave"]). 
		note("c6", ["thumb-octave", "left-middle"]). 
		note("b5", ["thumb-octave", "left-index"]).
		note("bb5", ["thumb-octave", "left-index", "up-b-flat"]).
		note("a5", ["thumb-octave", "left-middle", "left-index"]).
		note("ab5", ["thumb-octave", "left-middle", "left-index", "left-ring", "g-sharp"]).
		note("g5", ["thumb-octave", "left-middle", "left-index", "left-ring"]).
		note("gb5", ["thumb-octave", "left-middle", "left-index", "left-ring", "right-middle"]).
		note("f5", ["thumb-octave", "left-middle", "left-index", "left-ring", "right-index"]).
		note("e5", ["thumb-octave", "left-middle", "left-index", "left-ring", "right-index", "right-middle"]).
		note("eb5", ["thumb-octave", "left-middle", "left-index", "left-ring", "right-index", "right-middle", "right-ring", "low-e-flat"]).
		note("d5", ["thumb-octave", "left-middle", "left-index", "left-ring", "right-index", "right-middle", "right-ring"]).
		note("db5", []). 
		note("c5", ["left-middle"]). // c''
		note("b4", ["left-index"]).
		note("bb4", ["left-index", "up-b-flat"]).
		note("a4", ["left-middle", "left-index"]).
		note("ab4", ["left-middle", "left-index", "left-ring", "g-sharp"]).
		note("g4", ["left-middle", "left-index", "left-ring"]).
		note("gb4", ["left-middle", "left-index", "left-ring", "right-middle"]).
		note("f4", ["left-middle", "left-index", "left-ring", "right-index"]).
		note("e4", ["left-middle", "left-index", "left-ring", "right-index", "right-middle"]).
		note("eb4", ["left-middle", "left-index", "left-ring", "right-index", "right-middle", "right-ring", "low-e-flat"]).
		note("d4", ["left-middle", "left-index", "left-ring", "right-index", "right-middle", "right-ring"]).
		note("db4", ["left-middle", "left-index", "left-ring", "right-index", "right-middle", "right-ring", "low-c", "low-c-sharp"]).
		note("c4", ["left-middle", "left-index", "left-ring", "right-index", "right-middle", "right-ring", "low-c"]).
		note("b3", ["left-middle", "left-index", "left-ring", "right-index", "right-middle", "right-ring", "low-c", "low-b"]).
		note("bb3", ["left-middle", "left-index", "left-ring", "right-index", "right-middle", "right-ring", "low-c", "low-b-flat"]).
		note("a3", ["left-middle", "left-index", "left-ring", "right-index", "right-middle", "right-ring", "low-c", "thumb-low-a"]);
}

function midi(noteString) {
	return teoria.note(noteString).midi();
}

function buildNote(sax, paper, buttons) {
	var notes = {};

	function addNote(noteString, pressedButtons) {
		var buttonsSet = paper.set(),
			button;

		for(var len = pressedButtons.length, i = len; i; i -= 1) {
			buttonsSet.push(buttons[pressedButtons[i - 1]].element());
		}

		notes[midi(noteString)] = saxButton(buttonsSet);

		return sax;
	}

	function pressNote(noteString) {
		var note = notes[midi(noteString)];

		if (note) {
			note.press();
			return true;
		}
		return false;
	}

	function note(noteString, pressedButtons) {

		if (pressedButtons) {
			return addNote(noteString, pressedButtons);
		}

		sax.release("all");
		return pressNote(noteString);
	}

	return note;
}

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

})(fingerings, fingerings.sax, Raphael, teoria);
