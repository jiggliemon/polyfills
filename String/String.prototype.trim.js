/*
---
name: String.prototype.trim
provides: [String.prototype.trim]
for: [IE6,IE7,IE8,FF3,SF3.2,SF4,OP10.1]
...
*/
define(['Polyfills/String/String.prototype.trim'],function(){
	if(!String.prototype.trim)
	String.prototype.trim = function() {
		var  str = this.replace(/^\s\s*/, '')
				,ws = /\s/
				,i = str.length;
			
		while (ws.test(str.charAt(--i)));
		return str.slice(0, i + 1);
	};
});
