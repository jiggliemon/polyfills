define(function(){
  if (!Array.prototype.reduceRight){
    Array.prototype.reduceRight = function(callbackfn /*, initialValue */){
      "use strict";

      var  t = Object(this)
          ,len = t.length >>> 0
          ,k = len - 1
          ,accumulator;

      if (this === void 0 || this === null){
        throw new TypeError();
      }

      if (typeof callbackfn !== "function"){
        throw new TypeError();
      }

      // no value to return if no initial value, empty array
      if (len === 0 && arguments.length === 1){
        throw new TypeError();
      }

      if (arguments.length >= 2) {
        accumulator = arguments[1];
      } else {
        do {
          if (k in this) {
            accumulator = this[k--];
            break;
          }

          // if array contains no values, no initial value to return
          if (--k < 0){
            throw new TypeError();
          }
        } while (true);
      }

      while (k >= 0) {
        if (k in t){
          accumulator = callbackfn.call(undefined, accumulator, t[k], k, t);
        }
        k--;
      }

      return accumulator;
    };
  }
});
