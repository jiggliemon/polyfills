define(['Polyfills/Array/Array.prototype.forEach'],function(){
  var testSubject = [2, 3, undefined, true, 'hej', null, false, 0];
  delete testSubject[1];
  
  function createArrayLikeFromArray(arr) {
    var o = {};
    Array.prototype.forEach.call(arr, function(e, i) {
      o[i]=e;
    });
    o.length = arr.length;
    return o;
  };
  
  describe('Array.prototype.forEach', function(){
    "use strict";
    var expected, actual;

    beforeEach(function() {
      expected = {0:2, 2: undefined, 3:true, 4: 'hej', 5:null, 6:false, 7:0 };
      actual = {};
    });
    
    it('should pass the right parameters', function() {
      var  callback = jasmine.createSpy('callback')
          ,array = ['1'];
      array.forEach(callback);
      expect(callback).toHaveBeenCalledWith('1', 0, array);
    });
    
    it('should not affect elements added to the array after it has begun', function() {
      var  arr = [1,2,3]
          ,i = 0;
      arr.forEach(function(a) {
        i++;
        arr.push(a+3);
      });
      expect(arr).toEqual([1,2,3,4,5,6]);
      expect(i).toBe(3);
    });
    
    it('should set the right context when given none', function() {
      var context;
      [1].forEach(function() {context = this;});
      expect(context).toBe(function() {return this}.call());
    });
    
    it('should iterate all', function() {
      testSubject.forEach(function(obj, index) {
        actual[index] = obj;
      });
      expect(actual).toExactlyMatch(expected);
    });
    
    it('should iterate all using a context', function() {
      var o = { a: actual };

      testSubject.forEach(function(obj, index) {
        this.a[index] = obj;
      }, o);
      expect(actual).toExactlyMatch(expected);
    });

    it('should iterate all in an array-like object', function() {
      var ts = createArrayLikeFromArray(testSubject);
      Array.prototype.forEach.call(ts, function(obj, index) {
        actual[index] = obj;
      });
      expect(actual).toExactlyMatch(expected);
    });
    
    it('should iterate all in an array-like object using a context', function() {
      var ts = createArrayLikeFromArray(testSubject),
        o = { a: actual };

      Array.prototype.forEach.call(ts, function(obj, index) {
        this.a[index] = obj;
      }, o);
      expect(actual).toExactlyMatch(expected);
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