define(['Polyfills/Array/Array.prototype.indexOf'],function(){
  
  describe('Array.prototype.indexOf', function(){
    "use strict";
    var actual, expected, testSubject;

    beforeEach(function() {
      testSubject = [2, 3, undefined, true, 'hej', null, 2, false, 0];
      delete testSubject[1];
    });
    
    function createArrayLikeFromArray(arr) {
      var o = {};
      Array.prototype.forEach.call(arr, function(e, i) {
        o[i]=e;
      });
      o.length = arr.length;
      return o;
    };
    
    it('should return the correct index of the item', function(){
      expect(testSubject.indexOf(true)).toEqual(3);
    });

    it('should return -1 if the item is not found in the array', function(){
      expect(testSubject.indexOf('not found')).toEqual(-1);
    });
    
    it('should find the element', function() {
      expected = 4;
      actual = testSubject.indexOf('hej');
      expect(actual).toEqual(expected);
    });
    
    it('should not find the element', function() {
      expected = -1;
      actual = testSubject.indexOf('mus');
      expect(actual).toEqual(expected);
    });
    
    it('should find undefined as well', function() {
      expected = -1;
      actual = testSubject.indexOf(undefined);
      expect(actual).not.toEqual(expected);
    });
    
    it('should skip unset indexes', function() {
      expected = 2;
      actual = testSubject.indexOf(undefined);
      expect(actual).toEqual(expected);
    });
    
    it('should use a strict test', function() {
      actual = testSubject.indexOf(null);
      expect(actual).toEqual(5);

      actual = testSubject.indexOf('2');
      expect(actual).toEqual(-1);
    });
    
    it('should skip the first if fromIndex is set', function() {
      expect(testSubject.indexOf(2, 2)).toEqual(6);
      expect(testSubject.indexOf(2, 0)).toEqual(0);
      expect(testSubject.indexOf(2, 6)).toEqual(6);
    });
    
    it('should work with negative fromIndex', function() {
      expect(testSubject.indexOf(2, -3)).toEqual(6);
      expect(testSubject.indexOf(2, -9)).toEqual(0);
    });
    
    it('should work with fromIndex being greater than the length', function() {
      expect(testSubject.indexOf('hej', 20)).toEqual(-1);
    });
    
    it('should work with fromIndex being negative and greater than the length', function() {
      expect(testSubject.indexOf('hej', -20)).toEqual(4);
    });

    describe('Array-like', function ArrayLike() {
      var  indexOf = Array.prototype.indexOf
          ,testAL;
          
      beforeEach(function beforeEach() {
        testAL = {};
        testSubject.forEach(function (o,i) {
          testAL[i] = o;
        });
        testAL.length = testSubject.length;
      });
      
      it('should find the element (array-like)', function() {
        expected = 4;
        actual = indexOf.call(testAL, 'hej');
        expect(actual).toEqual(expected);
      });
      
      it('should not find the element (array-like)', function() {
        expected = -1;
        actual = indexOf.call(testAL, 'mus');
        expect(actual).toEqual(expected);
      });
      
      it('should find undefined as well (array-like)', function() {
        expected = -1;
        actual = indexOf.call(testAL, undefined);
        expect(actual).not.toEqual(expected);
      });
      
      it('should skip unset indexes (array-like)', function() {
        expected = 2;
        actual = indexOf.call(testAL, undefined);
        expect(actual).toEqual(expected);
      });
      
      it('should use a strict test (array-like)', function() {
        actual = Array.prototype.indexOf.call(testAL, null);
        expect(actual).toEqual(5);

        actual = Array.prototype.indexOf.call(testAL, '2');
        expect(actual).toEqual(-1);
      });
      
      it('should skip the first if fromIndex is set (array-like)', function() {
        expect(indexOf.call(testAL, 2, 2)).toEqual(6);
        expect(indexOf.call(testAL, 2, 0)).toEqual(0);
        expect(indexOf.call(testAL, 2, 6)).toEqual(6);
      });
      
      it('should work with negative fromIndex (array-like)', function() {
        expect(indexOf.call(testAL, 2, -3)).toEqual(6);
        expect(indexOf.call(testAL, 2, -9)).toEqual(0);
      });
      
      it('should work with fromIndex being greater than the length (array-like)', function() {
        expect(indexOf.call(testAL, 'hej', 20)).toEqual(-1);
      });
      
      it('should work with fromIndex being negative and greater than the length (array-like)', function() {
        expect(indexOf.call(testAL, 'hej', -20)).toEqual(4);
      });
    });

  });
  
})