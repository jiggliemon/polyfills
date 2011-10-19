/*
---
name: Object.toQueryString
provides: [Object.toQueryString]
requires: [Array.isArray,Array.forEach]
...
*/
define(['../Array/Array.isArray','../Array/Array.prototype.forEach'],function(){
	if(!Object.toQueryString)
	Object.toQueryString = function(object, base){
		// adapted from MooTools
		var  queryString = []
				,result
				,key,value;
		
		for(key in object){
			if(object.hasOwnProperty(key)){
				value = object[key];
				var  result
						,qs = {};
				
				if (base) {
					key = base + '[' + key + ']';
				}
		
				if (Array.isArray(value)){
					value.forEach(function(val, i){
						qs[i] = val;
					});
					result = Object.toQueryString(qs, key);
				}
				else if (typeof value == 'object')
					result = Object.toQueryString(value, key);
				else
					result = key + '=' + encodeURIComponent(value);

				if (value !== null){
					queryString.push(result);
				}
			}
		}

		return queryString.join('&');
	};
});
