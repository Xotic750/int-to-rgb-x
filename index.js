/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/int-to-rgb-x"
 * title="Travis status">
 * <img
 * src="https://travis-ci.org/Xotic750/int-to-rgb-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/int-to-rgb-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/int-to-rgb-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a
 * href="https://david-dm.org/Xotic750/int-to-rgb-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/int-to-rgb-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/int-to-rgb-x" title="npm version">
 * <img src="https://badge.fury.io/js/int-to-rgb-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * Convert an integer to a RGB string module.
 *
 * Requires ES3 or above.
 *
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module int-to-rgb-x
 */

'use strict';

var toUint24 = require('to-uint-24-x');
var padStart = require('string.prototype.padstart');

var intToRGB = function _intToRGB(i) {
  return padStart(toUint24(i).toString(16), 6, '0').toUpperCase();
};

/**
 * Takes a number between 0 and 16777215 inclusive and converts it
 * into 6 digit RGB notation.
 *
 * @param {number} i Integer to be converted into 6 digit RGB.
 * @return {string} The RGB hexadecimal notation: #RRGGBB
 * @example
 * var intToRGB = require('int-to-rgb-x');
 * intToRGB()1; // "000001"
 */
module.exports = intToRGB;
