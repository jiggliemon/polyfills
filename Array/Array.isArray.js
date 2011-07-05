if(!Array.isArray)
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
})();
