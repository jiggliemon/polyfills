define(['Polyfills/Array/Array.prototype.indexOf'],function(){
  
  describe('Array.indexOf', function(){

    it('should return the correct index of the item', function(){
      expect([1,2,3,0,0,0].indexOf(0)).toEqual(3);
    });

    it('should return -1 if the item is not found in the array', function(){
      expect([1,2,3,0,0,0].indexOf('not found')).toEqual(-1);
    });

  });
  
})