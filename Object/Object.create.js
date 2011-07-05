if(!Object.create)
Object.create = function(o){
	function C(){};
	C.prototype = o;
	return new C();
};
