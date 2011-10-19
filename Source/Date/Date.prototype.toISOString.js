define(function(){
  if(!Date.prototype.toISOString){
    var ISO8601_DATETIME = '{yyyy}-{MM}-{dd}T{hh}:{mm}:{ss}.{ms}{isotz}';
    Date.prototype.toISOString = function(){
      return '';
    };
  }
})
