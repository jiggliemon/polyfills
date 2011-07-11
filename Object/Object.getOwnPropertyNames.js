/*
---
name: Object.getPrototypeOf
provides: [Object.getPrototypeOf]
requires: [Object.keys]
for: [IE6,IE7,IE8,FF3,FF3.5,FF3.6,SF3.2,SF4,OP10.1,OP10.5,OP11,OP11.5]
...
*/

if(!Object.getOwnPropertyNames)
Object.getOwnPropertyNames = function(object){
	return Object.keys(object);
}
