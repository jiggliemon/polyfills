define('Polyfills/Array/Array.prototype.reduceRight',function()){
  describe('reduceRight', function() {
    var testSubject;
    beforeEach(function() {
      testSubject = [1,2,3];
    });
    
  
    function createArrayLikeFromArray(arr) {
      var o = {};
      Array.prototype.forEach.call(arr, function(e, i) {
        o[i]=e;
      });
      o.length = arr.length;
      return o;
    };
    
    describe('Array', function() {
      
      it('should pass the correct arguments to the callback', function() {
        var spy = jasmine.createSpy().andReturn(0);
        testSubject.reduceRight(spy);
        expect(spy.calls[0].args).toExactlyMatch([3, 2, 1, testSubject]);
      });
      
      it('should start with the right initialValue', function() {
        var spy = jasmine.createSpy().andReturn(0);
        testSubject.reduceRight(spy, 0);
        expect(spy.calls[0].args).toExactlyMatch([0, 3, 2, testSubject]);
      });
      
      it('should not affect elements added to the array after it has begun', function() {
        var arr = [1,2,3],
          i = 0;
        arr.reduceRight(function(a, b) {
          i++;
          if(i <= 4) {
            arr.push(a+3);
          };
          return b;
        });
        expect(arr).toEqual([1,2,3,6,5]);
        expect(i).toBe(2);
      });
      
      it('should work as expected for empty arrays', function() {
        var spy = jasmine.createSpy();
        expect(function() {
          [].reduceRight(spy);
        }).toThrow();
        expect(spy).not.toHaveBeenCalled();
      });
      
      it('should throw correctly if no callback is given', function() {
        expect(function() {
          testSubject.reduceRight();
        }).toThrow();
      });
      
      it('should return the expected result', function() {
        expect(testSubject.reduceRight(function(a,b) {
          return (a||'').toString()+(b||'').toString();
        })).toEqual('321');
      });
      
      it('should not directly affect the passed array', function() {
        var copy = testSubject.slice();
        testSubject.reduceRight(function(a,b) {
          return a+b;
        });
        expect(testSubject).toEqual(copy);
      });
      
      it('should skip non-set values', function() {
        delete testSubject[1];
        var visited = {};
        testSubject.reduceRight(function(a,b) {
          if(a)
            visited[a] = true;
          if(b)
            visited[b] = true;
          return 0;
        });

        expect(visited).toEqual({ '1': true, '3': true });
      });
      
      it('should have the right length', function() {
        expect(testSubject.reduceRight.length).toBe(1);
      });
    });
    describe('Array-like objects', function() {
      
      beforeEach(function() {
        testSubject = createArrayLikeFromArray(testSubject);
        testSubject.reduceRight = Array.prototype.reduceRight;
      });
      
      it('should pass the correct arguments to the callback', function() {
        var spy = jasmine.createSpy().andReturn(0);
        testSubject.reduceRight(spy);
        expect(spy.calls[0].args).toExactlyMatch([3, 2, 1, testSubject]);
      });
      
      it('should start with the right initialValue', function() {
        var spy = jasmine.createSpy().andReturn(0);
        testSubject.reduceRight(spy, 0);
        expect(spy.calls[0].args).toExactlyMatch([0, 3, 2, testSubject]);
      });
      
      it('should not affect elements added to the array after it has begun', function() {
        var arr = createArrayLikeFromArray([1,2,3]),
          i = 0;
        Array.prototype.reduceRight.call(arr, function(a, b) {
          i++;
          if(i <= 4) {
            arr[i+2] = a+3;
          };
          return b;
        });
        expect(arr).toEqual({
          0: 1,
          1: 2,
          2: 3,
          3: 6,
          4: 5,
          length: 3 // does not get updated on property assignment
        });
        expect(i).toBe(2);
      });
      
      it('should work as expected for empty arrays', function() {
        var spy = jasmine.createSpy();
        expect(function() {
          Array.prototype.reduceRight.call({length:0}, spy);
        }).toThrow();
        expect(spy).not.toHaveBeenCalled();
      });
      
      it('should throw correctly if no callback is given', function() {
        expect(function() {
          testSubject.reduceRight();
        }).toThrow();
      });
      
      it('should return the expected result', function() {
        expect(testSubject.reduceRight(function(a,b) {
          return (a||'').toString()+(b||'').toString();
        })).toEqual('321');
      });
      
      it('should not directly affect the passed array', function() {
        var copy = createArrayLikeFromArray(testSubject);
        testSubject.reduceRight(function(a,b) {
          return a+b;
        });
        delete(testSubject.reduceRight);
        expect(testSubject).toEqual(copy);
      });
      
      it('should skip non-set values', function() {
        delete testSubject[1];
        var visited = {};
        testSubject.reduceRight(function(a,b) {
          if(a)
            visited[a] = true;
          if(b)
            visited[b] = true;
          return 0;
        });

        expect(visited).toEqual({ '1': true, '3': true });
      });
      
      it('should have the right length', function() {
        expect(testSubject.reduceRight.length).toBe(1);
      });
    
    });
  });
});