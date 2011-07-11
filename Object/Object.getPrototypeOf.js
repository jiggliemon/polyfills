/*
---
name: Object.getPrototypeOf
provides: [Object.getPrototypeOf]
for: [IE6,IE7,IE8,FF3,SF3.2,SF4,OP10.1,OP10.5,OP11,OP11.5]
...
*/

if ( typeof Object.getPrototypeOf !== "function" )
if ( typeof "test".__proto__ === "object" ) {
    Object.getPrototypeOf = function(object){
        return object.__proto__;
    };
} else {
    Object.getPrototypeOf = function(object){
        // May break if the constructor has been tampered with
        return object.constructor.prototype;
    };
}

