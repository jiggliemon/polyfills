/*
---
name: Object.forEach
provides: [Object.forEach]
...
*/
define(function(){
	Object.forEach = function(object,fn,bind){
		var  hasOwnProperty = Object.prototype.hasOwnProperty
				,key;

		for (key in object){
			if (hasOwnProperty.call(object, key)) {
				fn.call(bind, object[key], key, object);
			}
		}
	};
});
