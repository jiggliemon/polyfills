define(['Base/Object/Object.keys','Base/Array/Array.isArray'],function(){
  
  
  describe('Object.keys', function(){
    
    it('Should return an Array',function(){
      var TestObject = {
         'property1':1
        ,'property2':'a string'
      };
      expect(Array.isArray(Object.keys(TestObject))).toBeTruthy();
    });
    
    it('The returned array\'s length property should be equal to the objects property count.', function(){
      var sample = { 1:1, 2:2, 3:3 }, count = 0;
      for(var i in sample){ count++;};
      expect(Object.keys(sample).length).toEqual(count);
    })
    
  });

});
