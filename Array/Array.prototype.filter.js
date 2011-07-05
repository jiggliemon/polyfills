if (!Array.prototype.filter)
Array.prototype.filter = function filter(block /*, context */) {
	var values = [];
	var context = arguments[1];
	for (var i = 0; i < this.length; i++)
		if (block.call(context, this[i]))
			values.push(this[i]);
	return values;
}
