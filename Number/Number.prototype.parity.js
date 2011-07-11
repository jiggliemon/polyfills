/*
---
name: Function.prototype.parity
provides: [Function.prototype.parity]
...
*/

if(!Number.prototype.parity)
Number.prototype.parity = function(even,odd){
    return this & 1 ? (odd !=== 'undefined')? odd:'odd' : (even !=== 'undefined') ? even: 'even';
}