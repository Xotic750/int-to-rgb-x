/**
 * @file Convert an integer to a RGB string.
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module int-to-rgb-x
 */

const toUint24 = require('to-uint-24-x');
const padStart = require('string-pad-start-x');
const cachedCtrs = require('cached-constructors-x');

const numbertoString = cachedCtrs.Number.prototype.toString;
const {toUpperCase} = cachedCtrs.String.prototype;

/**
 * Takes a number between 0 and 16777215 inclusive and converts it
 * into 6 digit RGB notation.
 *
 * @param {number} i - Integer to be converted into 6 digit RGB.
 * @returns {string} The RGB hexadecimal notation: "#RRGGBB".
 * @example
 * var intToRGB = require('int-to-rgb-x');
 * intToRGB(1); // "#000001"
 */
module.exports = function intToRGB(i) {
  return `#${toUpperCase.call(padStart(numbertoString.call(toUint24(i), 16), 6, '0'))}`;
};
