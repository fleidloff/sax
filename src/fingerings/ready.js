fingerings.ready = function _ready(cb) {
	Raphael(function() {
		if (!teoria) {
			throw new Error("teoria cannot be found");
		}
		cb();
	});
};
