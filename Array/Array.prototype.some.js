if (!Array.prototype.some)
Array.prototype.some = function some(block /*, context */) {
	var  context = arguments[1]
		,i = 0
		,length = this.length;
	
	for (; i < length; i++)
		if (block.call(context, this[i]))
			return true;
	
	return false;
}
