if(!Object.extend)
Object.extend = function(original){
	for (var i = 1, l = arguments.length; i < l; i++){
		var extended = arguments[i] || {};

		for (var key in extended){
			original[key] = extended[key];
		}
	}
	return original;
};
