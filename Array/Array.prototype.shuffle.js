/*
---
name: Array.prototype.shuffle
provides: [Array.prototype.shuffle]
...
*/

if(!Array.prototype.shuffle){
Array.prototype.shuffle = function(){
	for(var j, x, i = this.length; i; j = parseInt(Math.random()*i), x = this[--i],this[i] = this[j], this[j] = x);
	return this;
};}