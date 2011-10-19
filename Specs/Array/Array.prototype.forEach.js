define(['Polyfills/Array/Array.prototype.forEach'],function(){
  describe('Array.forEach', function(){

    // disabled since Array.from does not exist
    it('should call the function for each item in Function arguments', function(){
      var daysArr = [];
      (function(){
        Array.prototype.slice.call(arguments,0).forEach(function(value, key){
          daysArr[key] = value;
        });
      })('Sun','Mon','Tue');

      expect(daysArr).toEqual(['Sun','Mon','Tue']);
    });

    it('should call the function for each item in the array', function(){
      var daysArr = [];
      ['Sun','Mon','Tue'].forEach(function(value, i){
        daysArr.push(value);
      });

      expect(daysArr).toEqual(['Sun','Mon','Tue']);
    });

    it('should not iterate over deleted elements', function(){
      var array = [0, 1, 2, 3],
        testArray = [];
      delete array[1];
      delete array[2];

      array.forEach(function(value){
        testArray.push(value);
      });

      expect(testArray).toEqual([0, 3]);
    });

  });
})