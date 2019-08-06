<a
  href="https://travis-ci.org/Xotic750/int-to-rgb-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/int-to-rgb-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/int-to-rgb-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/int-to-rgb-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/int-to-rgb-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/int-to-rgb-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/int-to-rgb-x"
  title="npm version">
<img src="https://badge.fury.io/js/int-to-rgb-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/int-to-rgb-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/int-to-rgb-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/int-to-rgb-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/int-to-rgb-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/int-to-rgb-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/int-to-rgb-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_int-to-rgb-x"></a>

## int-to-rgb-x

Convert an integer to a RGB string.

<a name="exp_module_int-to-rgb-x--module.exports"></a>

### `module.exports(i)` ⇒ <code>string</code> ⏏

Takes a number between 0 and 16777215 inclusive and converts it
into 6 digit RGB notation.

**Kind**: Exported function  
**Returns**: <code>string</code> - The RGB hexadecimal notation: "#RRGGBB".

| Param | Type                | Description                               |
| ----- | ------------------- | ----------------------------------------- |
| i     | <code>number</code> | Integer to be converted into 6 digit RGB. |

**Example**

```js
import intToRGB from 'int-to-rgb-x';

console.log(intToRGB(1)); // "#000001"
```
