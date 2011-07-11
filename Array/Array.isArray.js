/*
---
name: Array.isArray
provides: [Array.isArray]
for: [IE6,IE7,IE8,FF3,FF3.5,FF3.6,SF3.2,SF4,OP10.1]
...
*/

if(!Array.isArray){
Array.isArray = (function(){
	var  builtInToString = Object.prototype.toString
		,builtInToCall = Function.prototype.call
		,callWithArgs = builtInToCall.bind(builtInToCall)
		,argToString = function(o){
			return callWithArgs(builtInToString, o);
		};
	
	return function(o) { 
		return argToString(o) === '[object Array]';
	};
})();}
