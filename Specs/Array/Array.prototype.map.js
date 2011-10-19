define(['Polyfills/Array/Array.prototype.map'],function(){
  
  function getTestArray(){    
    var array = [0, 1, 2, 3];
    delete array[1];
    delete array[2];
    return array;
  }
  
  function isNumber(value){
    return typeof value === 'number';
  }
  
  describe('Array.map', function(){

    it('should return a mapping of an array', function(){
      var arr = [1,2,3,0,0,0].map(function(item){
        return (item + 1);
      });
      expect(arr).toEqual([2,3,4,1,1,1]);
    });

    it('should skip deleted elements', function(){
      var i = 0;
      getTestArray().map(function(){
        return i++;
      });
      expect(i).toEqual(2);
    });

  });
  
});
