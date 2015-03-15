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
