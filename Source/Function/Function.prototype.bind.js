/*
---
name: Function.prototype.bind
provides: [Function.prototype.bind]
for: [IE6,IE7,IE8,FF3, FF3.5,SF3.2,SF4,SF5,CH5,CH6,OP10,OP10.5,OP11,OP11.5]
...
*/
define(function(){
	if ( !Function.prototype.bind )
	Function.prototype.bind = function( obj ) {
		if(typeof this !== 'function')
			throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');

		var  slice = [].slice
				,args = slice.call(arguments, 1)
				,self = this
				,nop = function () {}
				,bound = function () {
					return self.apply( this instanceof nop ? this : ( obj || {} ),	args.concat( slice.call(arguments) ) );
				};

		bound.prototype = this.prototype;

		return bound;
	};
});