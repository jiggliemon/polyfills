/*
---
name: Array.prototype.lastIndexOf
provides: [Array.prototype.lastIndexOf]
for: [IE6,IE7,IE8]
...
*/
define(function(){
	if (!Array.prototype.lastIndexOf)
	Array.prototype.lastIndexOf = function(value /*, fromIndex */) {
		var  length = this.length
				,i = arguments[1] || length;
	
		if (!length)
			return -1;
	
		if (i < 0) i += length;
		i = Math.min(i, length - 1);
	
		for (; i >= 0; i--) {
			if (!(i in this))
				continue;
			if (value === this[i])
				return i;
		}

		return -1;
	};
});
