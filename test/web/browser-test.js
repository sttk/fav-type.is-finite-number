(function(){
'use strict';


var expect = chai.expect;


var isNotFiniteNumber = fav.type.isFiniteNumber.not;

describe('fav.type.isFiniteNumber.not', function() {

  it('Should return false when value is a finite number', function() {
    expect(isNotFiniteNumber(0)).to.equal(false);
    expect(isNotFiniteNumber(123)).to.equal(false);
    expect(isNotFiniteNumber(0.456)).to.equal(false);
    expect(isNotFiniteNumber(-987)).to.equal(false);
    expect(isNotFiniteNumber(Number.MIN_VALUE)).to.equal(false);
    expect(isNotFiniteNumber(Number.MAX_VALUE)).to.equal(false);
    if (typeof Number.MIN_SAFE_INTEGER === 'number') {
      expect(isNotFiniteNumber(Number.MIN_SAFE_INTEGER)).to.equal(false);
    }
    if (typeof Number.MAX_SAFE_INTEGER === 'number') {
      expect(isNotFiniteNumber(Number.MAX_SAFE_INTEGER)).to.equal(false);
    }
    if (typeof Number.EPSILON === 'number') {
      expect(isNotFiniteNumber(Number.EPSILON)).to.equal(false);
    }
    expect(isNotFiniteNumber(new Number(123))).to.equal(false);
    expect(isNotFiniteNumber(new Number(4.56))).to.equal(false);
  });

  it('Should return true when value is NaN, +/-Infinity', function() {
    expect(isNotFiniteNumber(NaN)).to.equal(true);
    expect(isNotFiniteNumber(Infinity)).to.equal(true);
    expect(isNotFiniteNumber(-Infinity)).to.equal(true);
    expect(isNotFiniteNumber(Number.NaN)).to.equal(true);
    expect(isNotFiniteNumber(Number.POSITIVE_INFINITY)).to.equal(true);
    expect(isNotFiniteNumber(Number.NEGATIVE_INFINITY)).to.equal(true);
  });

  it('Should return true when value is not a number', function() {
    expect(isNotFiniteNumber(undefined)).to.equal(true);
    expect(isNotFiniteNumber(null)).to.equal(true);
    expect(isNotFiniteNumber(true)).to.equal(true);
    expect(isNotFiniteNumber(false)).to.equal(true);
    expect(isNotFiniteNumber('')).to.equal(true);
    expect(isNotFiniteNumber('abc')).to.equal(true);
    expect(isNotFiniteNumber('0')).to.equal(true);
    expect(isNotFiniteNumber('123')).to.equal(true);
    expect(isNotFiniteNumber([])).to.equal(true);
    expect(isNotFiniteNumber([1, 2])).to.equal(true);
    expect(isNotFiniteNumber({})).to.equal(true);
    expect(isNotFiniteNumber({ a: 1 })).to.equal(true);
    expect(isNotFiniteNumber(/a/g)).to.equal(true);
    expect(isNotFiniteNumber(new RegExp('a', 'g'))).to.equal(true);
    expect(isNotFiniteNumber(function() {})).to.equal(true);
    expect(isNotFiniteNumber(new Date())).to.equal(true);
    expect(isNotFiniteNumber(new Error())).to.equal(true);

    if (typeof Symbol === 'function') {
      expect(isNotFiniteNumber(Symbol('foo'))).to.equal(true);
    }
  });

});

})();
(function(){
'use strict';


var expect = chai.expect;


var isFiniteNumber = fav.type.isFiniteNumber;

describe('fav.type.isFiniteNumber', function() {

  it('Should return true when value is a finite number', function() {
    expect(isFiniteNumber(0)).to.equal(true);
    expect(isFiniteNumber(123)).to.equal(true);
    expect(isFiniteNumber(0.456)).to.equal(true);
    expect(isFiniteNumber(-987)).to.equal(true);
    expect(isFiniteNumber(Number.MIN_VALUE)).to.equal(true);
    expect(isFiniteNumber(Number.MAX_VALUE)).to.equal(true);
    if (typeof Number.MIN_SAFE_INTEGER === 'number') {
      expect(isFiniteNumber(Number.MIN_SAFE_INTEGER)).to.equal(true);
    }
    if (typeof Number.MAX_SAFE_INTEGER === 'number') {
      expect(isFiniteNumber(Number.MAX_SAFE_INTEGER)).to.equal(true);
    }
    if (typeof Number.EPSILON === 'number') {
      expect(isFiniteNumber(Number.EPSILON)).to.equal(true);
    }
    expect(isFiniteNumber(new Number(123))).to.equal(true);
    expect(isFiniteNumber(new Number(4.56))).to.equal(true);
  });

  it('Should return false when value is NaN, +/-Infinity', function() {
    expect(isFiniteNumber(NaN)).to.equal(false);
    expect(isFiniteNumber(Infinity)).to.equal(false);
    expect(isFiniteNumber(-Infinity)).to.equal(false);
    expect(isFiniteNumber(Number.NaN)).to.equal(false);
    expect(isFiniteNumber(Number.POSITIVE_INFINITY)).to.equal(false);
    expect(isFiniteNumber(Number.NEGATIVE_INFINITY)).to.equal(false);
  });

  it('Should return false when value is not a number', function() {
    expect(isFiniteNumber(undefined)).to.equal(false);
    expect(isFiniteNumber(null)).to.equal(false);
    expect(isFiniteNumber(true)).to.equal(false);
    expect(isFiniteNumber(false)).to.equal(false);
    expect(isFiniteNumber('')).to.equal(false);
    expect(isFiniteNumber('abc')).to.equal(false);
    expect(isFiniteNumber('0')).to.equal(false);
    expect(isFiniteNumber('123')).to.equal(false);
    expect(isFiniteNumber([])).to.equal(false);
    expect(isFiniteNumber([1, 2])).to.equal(false);
    expect(isFiniteNumber({})).to.equal(false);
    expect(isFiniteNumber({ a: 1 })).to.equal(false);
    expect(isFiniteNumber(/a/g)).to.equal(false);
    expect(isFiniteNumber(new RegExp('a', 'g'))).to.equal(false);
    expect(isFiniteNumber(function() {})).to.equal(false);
    expect(isFiniteNumber(new Date())).to.equal(false);
    expect(isFiniteNumber(new Error())).to.equal(false);

    if (typeof Symbol === 'function') {
      expect(isFiniteNumber(Symbol('foo'))).to.equal(false);
    }
  });

});

})();
