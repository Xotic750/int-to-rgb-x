<a href="https://travis-ci.org/Xotic750/int-to-rgb-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/int-to-rgb-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/int-to-rgb-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/int-to-rgb-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/int-to-rgb-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/int-to-rgb-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/int-to-rgb-x" title="npm version">
<img src="https://badge.fury.io/js/int-to-rgb-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_int-to-rgb-x"></a>

## int-to-rgb-x
Convert an integer to a RGB string.

**Version**: 2.1.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_int-to-rgb-x--module.exports"></a>

### `module.exports(i)` ⇒ <code>string</code> ⏏
Takes a number between 0 and 16777215 inclusive and converts it
into 6 digit RGB notation.

**Kind**: Exported function  
**Returns**: <code>string</code> - The RGB hexadecimal notation: "#RRGGBB".  

| Param | Type | Description |
| --- | --- | --- |
| i | <code>number</code> | Integer to be converted into 6 digit RGB. |

**Example**  
```js
var intToRGB = require('int-to-rgb-x');
intToRGB(1); // "#000001"
```
