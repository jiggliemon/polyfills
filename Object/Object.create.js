/*
---
name: Object.create
provides: [Object.create]
for: [IE6,IE7,IE8,FF3,FF3.5,SF3.2,SF4,SF5,CH5,CH6,OP10.1,OP10.5,OP11,OP11.5]
...
*/

if(!Object.create)
Object.create = function(o){
	function C(){};
	C.prototype = o;
	return new C();
};
