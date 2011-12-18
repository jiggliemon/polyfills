/*
---
name: Array.prototype.filter
provides: [Array.prototype.filter]
for: [IE6,IE7,IE8]
...
*/
define(function(){
  if (!Array.prototype.filter){
    Array.prototype.filter = function ( block /*, context */) {
      var  values = []
          ,context = arguments[1]
          ,i = 0
          ,length = this.length;

      for (; i < length; i++){
        if(i in this){
          if (block.call(context, this[i], i, this)){
            values.push(this[i]);
          }
        }
      }
      return values;
    };
  }
});