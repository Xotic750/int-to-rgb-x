import toUint24 from 'to-uint-24-x';
import padStart from 'string-pad-start-x';
var RADIX = 16;
var TARGET_LENGTH = 6;
var ZER0_STRING = '0';
var numbertoString = RADIX.toString;
var toUpperCase = ZER0_STRING.toUpperCase;
/**
 * Takes a number between 0 and 16777215 inclusive and converts it
 * into 6 digit RGB notation.
 *
 * @param {number} i - Integer to be converted into 6 digit RGB.
 * @returns {string} The RGB hexadecimal notation: "#RRGGBB".
 */

var intToRGB = function intToRGB(i) {
  return "#".concat(toUpperCase.call(padStart(numbertoString.call(toUint24(i), 16), TARGET_LENGTH, ZER0_STRING)));
};

export default intToRGB;

//# sourceMappingURL=int-to-rgb-x.esm.js.map