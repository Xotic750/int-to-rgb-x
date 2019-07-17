import toUint24 from 'to-uint-24-x';
import padStart from 'string-pad-start-x';

const RADIX = 16;
const TARGET_LENGTH = 6;
const ZER0_STRING = '0';
const numbertoString = RADIX.toString;
const {toUpperCase} = ZER0_STRING;

/**
 * Takes a number between 0 and 16777215 inclusive and converts it
 * into 6 digit RGB notation.
 *
 * @param {number} i - Integer to be converted into 6 digit RGB.
 * @returns {string} The RGB hexadecimal notation: "#RRGGBB".
 */
const intToRGB = function intToRGB(i) {
  return `#${toUpperCase.call(padStart(numbertoString.call(toUint24(i), 16), TARGET_LENGTH, ZER0_STRING))}`;
};

export default intToRGB;
