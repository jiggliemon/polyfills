define(['Polyfills/Array/Array.prototype.some'],function(){
  describe('Array.prototype.some', function() {
    var actual, expected, numberOfRuns,testSubject;

    beforeEach(function() {
      expected = {0:2, 2: undefined, 3:true };
      actual = {};
      numberOfRuns = 0;
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

    it('should pass the correct values along to the callback', function() {
      var callback = jasmine.createSpy('callback');
      var array = ['1'];
      array.some(callback);
      expect(callback).toHaveBeenCalledWith('1', 0, array);
    });
    
    it('should not affect elements added to the array after it has begun', function() {
      var arr = [1,2,3],
        i = 0;
      arr.some(function(a) {
        i++;
        arr.push(a+3);
        return i > 3;
      });
      expect(arr).toEqual([1,2,3,4,5,6]);
      expect(i).toBe(3);
    });
    
    it('should set the right context when given none', function() {
      var context;
      [1].some(function() {context = this;});
      expect(context).toBe(function() {return this}.call());
    });

    it('should return false if it runs to the end', function() {
      actual = testSubject.some(function() {});
      expect(actual).toBeFalsy();
    });
    
    it('should return true if it is stopped somewhere', function() {
      actual = testSubject.some(function() { return true; });
      expect(actual).toBeTruthy();
    });
    
    it('should return false if there are no elements', function() {
      actual = [].some(function() { return true; });
      expect(actual).toBeFalsy();
    });

    it('should stop after 3 elements', function() {
      testSubject.some(function(obj, index) {
        actual[index] = obj;
        numberOfRuns += 1;
        if(numberOfRuns == 3) {
          return true;
        }
        return false;
      });
      expect(actual).toExactlyMatch(expected);
    });
    
    it('should stop after 3 elements using a context', function() {
      var o = { a: actual };
      testSubject.some(function(obj, index) {
        this.a[index] = obj;
        numberOfRuns += 1;
        if(numberOfRuns == 3) {
          return true;
        }
        return false;
      }, o);
      expect(actual).toExactlyMatch(expected);
    });

    it('should stop after 3 elements in an array-like object', function() {
      var ts = createArrayLikeFromArray(testSubject);
      Array.prototype.some.call(ts, function(obj, index) {
        actual[index] = obj;
        numberOfRuns += 1;
        if(numberOfRuns == 3) {
          return true;
        }
        return false;
      });
      expect(actual).toExactlyMatch(expected);
    });
    
    it('should stop after 3 elements in an array-like object using a context', function() {
      var ts = createArrayLikeFromArray(testSubject);
      var o = { a: actual };
      Array.prototype.some.call(ts, function(obj, index) {
        this.a[index] = obj;
        numberOfRuns += 1;
        if(numberOfRuns == 3) {
          return true;
        }
        return false;
      }, o);
      expect(actual).toExactlyMatch(expected);
    });
    
  });
})