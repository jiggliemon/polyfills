/*
---
name: Array.prototype.map
provides: [Array.prototype.map]
for: [IE6,IE7,IE8]
...
*/
define(function(){
  if (!Array.prototype.map){
    Array.prototype.map = function(fn /*, thisp */){
      "use strict";

      if (this === void 0 || this === null)
        throw new TypeError();

      var  t = Object(this)
          ,len = t.length >>> 0;

      if (typeof fn !== "function")
        throw new TypeError();

      var  res = new Array(len)
          ,thisp = arguments[1]
          ,i=0;

      for (; i < len; i++){
        if (i in t){
          res[i] = fn.call(thisp, t[i], i, t);
        }
      }

      return res;
    };
  }
});
