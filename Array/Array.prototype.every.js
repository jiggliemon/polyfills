if (!Array.prototype.every)
Array.prototype.every = function every(block /*, context */) {
	var context = arguments[1];
	for (var i = 0; i < this.length; i++)
		if (!block.call(context, this[i]))
			return false;
	return true;
}
