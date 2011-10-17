/*
---
name: Object.keys
provides: [Object.keys]
for: [IE6,IE7,IE8,FF3,FF3.5,SF3.2,SF4,OP10.1,OP10.5,OP11,OP11.5]
...
*/
define(['./Object.keys'],function(){
	if(!Object.keys)
	Object.keys = function(o){
		if (o !== Object(o)){
			throw new TypeError('Object.keys called on non-object');
		}
		var ret = [], p;

		for(p in o){ 
			if(Object.prototype.hasOwnProperty.call(o,p)) {
				ret.push(p);
			}
		}
		return ret;
	};
});
