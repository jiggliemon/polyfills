/*
---
name: Date.now
provides: [Date.now]
for: [IE6,IE7,IE8,SF3.2,OP10.1]
...
*/
define(function(){
	if(!Date.now)
	Date.now = function(){
		return new Date().getTime();
	};
});