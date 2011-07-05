if (!Array.prototype.forEach)
Array.prototype.forEach = function(fun /*, thisp */){
	"use strict";
	if (this === void 0 || this === null)
		throw new TypeError();

	var  t = Object(this)
		,len = t.length >>> 0
		,thisp = arguments[1]
		,i = 0;
		
	if (typeof fun !== "function")
		throw new TypeError();

	for (; i < len; i++) {
		if (i in t)
			fun.call(thisp, t[i], i, t);
	}
};
