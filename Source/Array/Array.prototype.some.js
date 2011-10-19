/*
---
name: Array.prototype.some
provides: [Array.prototype.some]
for: [IE6,IE7,IE8]
...
*/
define(function(){
	if (!Array.prototype.some)
	Array.prototype.some = function some(block /*, context */) {
		var  context = arguments[1]
			,i = 0
			,length = this.length
	
		for (; i < length; i++)
			if (block.call(context, this[i]))
				return true
		return false;
	};
});
