/*
---
name: Object.extend
provides: [Object.extend]
requires: [Object.forEach,Array.isArray]
...
*/

if(!Object.toQueryString){
Object.toQueryString = function(object, base){
	// adapted from MooTools
	var  queryString = []
		,result
		;
	Object.forEach(object, function(value, key){
		var  result
			,qs = {}
			;
		if (base) {
			key = base + '[' + key + ']'
		}
		
		if (Array.isArray(value)){
			Object.forEach(value, function(val, i){
				qs[i] = val
			})
			result = Object.toQueryString(qs, key)
		}
		else if (typeof value == 'object')
			result = Object.toQueryString(value, key)
		else
			result = key + '=' + encodeURIComponent(value)

		if (value !== null){
			queryString.push(result);
		}
	})

	return queryString.join('&');
};}
