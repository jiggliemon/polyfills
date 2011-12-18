define(['Polyfills/Array/Array.prototype.filter'],function(){

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

    it('should pass the right parameters', function() {
      var  callback = jasmine.createSpy('callback')
          ,array = ['1'];
      array.filter(callback);
      expect(callback).toHaveBeenCalledWith('1', 0, array);
    });

    it('should set the right context when given none', function() {
      var context;
      [1].filter(function() {context = this;});
      expect(context).toBe(function() {return this}.call());
    });

    it('should set the right context when provided one', function() {
      var context, obj = {1:1};
      [1].filter(function() {context = this;},obj);
      expect(context).toBe(obj);
    });

  });

});