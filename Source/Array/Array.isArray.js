/*
---
name: Array.isArray
provides: [Array.isArray]
for: [IE6,IE7,IE8,FF3,FF3.5,FF3.6,SF3.2,SF4,OP10.1]
...
*/
define(function(){
	if(!Array.isArray)
	Array.isArray = function (arg) {
		return Object.prototype.toString.call(arg) == '[object Array]';
	};
})