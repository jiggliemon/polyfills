/*
---
name: Function.prototype.construct
provides: [Function.prototype.construct]
...
*/
define(function(){
	if ( !Function.prototype.construct )
	Function.prototype.construct = function(args) {
		var  boundArgs = [].concat.apply([null], args)
				,boundFn = this.bind.apply(this, boundArgs);
			
		return new boundFn();
	};
});