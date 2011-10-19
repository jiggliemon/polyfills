define(['Polyfills/Array/Array.isArray'],function(){
  describe('Array.isArray',function(){
    
    it('Should be truthy when passed an array',function(){
      expect(Array.isArray([])).toEqual(true);
      expect(Array.isArray( new Array() )).toEqual(true);
    });
    
    it('Should be false when passed something that\'s not an array.', function(){
      expect(Array.isArray(1)).toEqual(false);
      expect(Array.isArray({})).toEqual(false);
      expect(Array.isArray(new String('Something'))).toEqual(false);
    })
    
  });
})