/*
---
name: Object.extend
provides: [Object.extend]
...
*/

if(!Object.extend){
Object.extend = function(original){
	var  i =  1,
	    ,l = arguments.length
	    ,key
	    ,extend
		;
	for (; i < l; i++){
		extended = arguments[i] || {};

		for (key in extended){
			original[key] = extended[key];
		}
	}
	return original;
};}
