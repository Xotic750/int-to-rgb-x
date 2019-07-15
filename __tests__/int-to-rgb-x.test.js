import intToRGB from '../src/int-to-rgb-x';

describe('intToRGB', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof intToRGB).toBe('function');
  });

  it('non-numbers', function() {
    expect.assertions(1);
    /* eslint-disable-next-line no-void,lodash/prefer-noop */
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
    expect.assertions(1);
    expect(intToRGB(-1)).toBe('#FFFFFF');
  });

  it('0 to be "#000000"', function() {
    expect.assertions(1);
    expect(intToRGB(0)).toBe('#000000');
  });

  it('1 to be "#000001"', function() {
    expect.assertions(1);
    expect(intToRGB(1)).toBe('#000001');
  });

  it('16777214 to be "#FFFFFF"', function() {
    expect.assertions(1);
    expect(intToRGB(16777214)).toBe('#FFFFFE');
  });

  it('16777215 to be "#FFFFFF"', function() {
    expect.assertions(1);
    expect(intToRGB(16777215)).toBe('#FFFFFF');
  });

  it('16777216 to be "#000000"', function() {
    expect.assertions(1);
    expect(intToRGB(16777216)).toBe('#000000');
  });

  it('16777216 to be "#000001"', function() {
    expect.assertions(1);
    expect(intToRGB(16777217)).toBe('#000001');
  });

  it('naN to be "#000000"', function() {
    expect.assertions(1);
    expect(intToRGB(NaN)).toBe('#000000');
  });

  it('infinity to be "#000000"', function() {
    expect.assertions(1);
    expect(intToRGB(Infinity)).toBe('#000000');
  });

  it('-Infinity to be "#000000"', function() {
    expect.assertions(1);
    expect(intToRGB(-Infinity)).toBe('#000000');
  });
});
