'use strict';

var intToRGB;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  intToRGB = require('../../index.js');
} else {
  intToRGB = returnExports;
}

describe('intToRGB', function () {
  it('is a function', function () {
    expect(typeof intToRGB).toBe('function');
  });

  it('-1 to be "#FFFFFF"', function () {
    expect(intToRGB(-1)).toBe('#FFFFFF');
  });

  it('0 to be "#000000"', function () {
    expect(intToRGB(0)).toBe('#000000');
  });

  it('1 to be "#000001"', function () {
    expect(intToRGB(1)).toBe('#000001');
  });

  it('16777215 to be "#FFFFFF"', function () {
    expect(intToRGB(16777214)).toBe('#FFFFFE');
  });

  it('16777215 to be "#FFFFFF"', function () {
    expect(intToRGB(16777215)).toBe('#FFFFFF');
  });

  it('16777216 to be "#000000"', function () {
    expect(intToRGB(16777216)).toBe('#000000');
  });

  it('16777216 to be "#000001"', function () {
    expect(intToRGB(16777217)).toBe('#000001');
  });

  it('NaN to be "#000000"', function () {
    expect(intToRGB(NaN)).toBe('#000000');
  });

  it('Infinity to be "#000000"', function () {
    expect(intToRGB(Infinity)).toBe('#000000');
  });

  it('-Infinity to be "#000000"', function () {
    expect(intToRGB(-Infinity)).toBe('#000000');
  });
});
