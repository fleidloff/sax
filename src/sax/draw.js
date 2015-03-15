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