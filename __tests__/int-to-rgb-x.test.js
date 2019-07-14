let intToRGB;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  intToRGB = require('../../index.js');
} else {
  intToRGB = returnExports;
}

describe('intToRGB', function() {
  it('is a function', function() {
    expect(typeof intToRGB).toBe('function');
  });

  it('non-numbers', function() {
    const nonNumbers = [void 0, null, '', false, '1', true, {}, [], function() {}];

    const expected = nonNumbers.map(function(item) {
      return `#${(Number(item) || 0)
        .toString(16)
        .padStart(6, '0')
        .toUpperCase()}`;
    });

    const actual = nonNumbers.map(function(item) {
      return intToRGB(item);
    });

    expect(actual).toStrictEqual(expected);
  });

  it('-1 to be "#FFFFFF"', function() {
    expect(intToRGB(-1)).toBe('#FFFFFF');
  });

  it('0 to be "#000000"', function() {
    expect(intToRGB(0)).toBe('#000000');
  });

  it('1 to be "#000001"', function() {
    expect(intToRGB(1)).toBe('#000001');
  });

  it('16777215 to be "#FFFFFF"', function() {
    expect(intToRGB(16777214)).toBe('#FFFFFE');
  });

  it('16777215 to be "#FFFFFF"', function() {
    expect(intToRGB(16777215)).toBe('#FFFFFF');
  });

  it('16777216 to be "#000000"', function() {
    expect(intToRGB(16777216)).toBe('#000000');
  });

  it('16777216 to be "#000001"', function() {
    expect(intToRGB(16777217)).toBe('#000001');
  });

  it('naN to be "#000000"', function() {
    expect(intToRGB(NaN)).toBe('#000000');
  });

  it('infinity to be "#000000"', function() {
    expect(intToRGB(Infinity)).toBe('#000000');
  });

  it('-Infinity to be "#000000"', function() {
    expect(intToRGB(-Infinity)).toBe('#000000');
  });
});
