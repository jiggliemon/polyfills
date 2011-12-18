/*
---
name: Array.prototype.forEach
provides: [Array.prototype.forEach]
for: [IE6,IE7,IE8]
...
*/
define(function(){
	if (!Array.prototype.forEach)
	Array.prototype.forEach = function(fn /*, thisp */){
		"use strict";
		if (this === void 0 || this === null){
			throw new TypeError();
		}

		var  t = Object(this)
			,len = t.length >>> 0
			,thisp = arguments[1]
			,i = 0;

		if (typeof fn !== "function"){
			throw new TypeError();
		}

		for (; i < len; i++) {
			if (i in t){
				fn.call(thisp, t[i], i, t);
			}
		}
	};
});
