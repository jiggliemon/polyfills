/*
---
name: Array.prototype.every
provides: [Array.prototype.every]
for: [IE6,IE7,IE8]
...
*/
define(function(){
	if (!Array.prototype.every)
	Array.prototype.every = function(block /*, context */) {
		var  context = arguments[1]
			,i = 0
			,length = this.length;
			
		for (; i < length; i++){
			if (!block.call(context, this[i])){
				return false;
			}
		}
		return true;
	};
});