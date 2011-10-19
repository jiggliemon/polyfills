define(['Base/Array/Array.prototype.every'],function(){
  function getTestArray(){    
    var array = [0, 1, 2, 3];
    delete array[1];
    delete array[2];
    return array;
  }
  
  function isNumber(value){
    return typeof value == 'number';
  }
  
  describe('Array.prototype.every', function(){

    it('should return true if every item matches the comparator, otherwise false', function(){
      expect([1,2,3,0,0,0].every(isNumber)).toBeTruthy();

      expect(['1',2,3,0].every(isNumber)).toBeFalsy();
    });

    it('should skip deleted elements', function(){
      var i = 0;
      getTestArray().every(function(){
        i++;
        return true;
      });

      expect(i).toEqual(2);
    });

  });
  
});