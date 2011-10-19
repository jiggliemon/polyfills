define(['Base/Array/Array.prototype.some'],function(){
  function getTestArray(){    
    var array = [0, 1, 2, 3];
    delete array[1];
    delete array[2];
    return array;
  }
  
  function isNumber(value){
    return typeof value == 'number';
  }
  
  describe('Array.some', function(){
    // todo: Make this test work.
    // it('should return true if some of the items in the array match the comparator, otherwise false', function(){
    //   expect(['1',2,3,0].some(isNumber)).toBeTruthy();
    // 
    //   var array = [1,2,3,0,0,0].some(String);
    //   expect(array.some(isNumber)).toBeFalsy();
    // });

    it('should skip deleted elements', function(){
      var i = 0;
      var a = getTestArray();
      delete a[0];

      // skips the first three elements
      a.some(function(value, index){
        i = index;
        return true;
      });

      expect(i).toEqual(3);
    });

  });
})