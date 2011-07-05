if (!Array.prototype.reduce)
Array.prototype.reduce = function(fun /*, initial*/) {
	
	if (typeof fun !== "function")
		throw new TypeError();
	
	var len = +this.length
		,i = 0
	
	if (len === 0 && arguments.length === 1)
		throw new TypeError();

	
	
	if (arguments.length >= 2) {
		var rv = arguments[1];
	} else {
		do {
			if (i in this) {
				rv = this[i++];
				break;
			}

			// if array contains no values, no initial value to return
			if (++i >= len)
				throw new TypeError();
		} while (true);
	}

	for (; i < len; i++) {
		if (i in this)
			rv = fun.call(null, rv, this[i], i, this);
	}

	return rv;
}
