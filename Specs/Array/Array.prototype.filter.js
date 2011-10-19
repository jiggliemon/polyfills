define(['Base/Array/Array.prototype.filter'],function(){
  
  function getTestArray(){    
    var array = [0, 1, 2, 3];
    delete array[1];
    delete array[2];
    return array;
  }
  
  function isNumber(value){
    return typeof value === 'number';
  }
  
  describe('Array.prototype.filter', function(){

    it('should filter an array', function(){
      var array = [1,2,3,0,0,0];
      var arr = array.concat([false, null, 4]).filter(isNumber);
      expect(arr).toEqual(array.concat(4));
    });

    it('filter should skip deleted elements', function(){
      var i = 0;

      getTestArray().filter(function(){
        i++;
        return true;
      });

      expect(i).toEqual(2);
    });

  });
  
});