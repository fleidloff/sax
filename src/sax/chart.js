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
