lineoffset.js [![GitHub release (latest by date)](https://img.shields.io/github/v/release/cangshudada/lineOffset.svg?style=flat-square)](https://github.com/cangshudada/lineOffset/releases) [![npm](https://img.shields.io/npm/v/line2offset.svg?style=flat-square)](https://www.npmjs.com/package/line2offset) [![GitHub file size in bytes](https://img.shields.io/github/size/cangshudada/lineoffset/dist/lineOffset.min.js?style=flat-square)](https://github.com/cangshudada/lineOffset/tree/master/dist) [![GitHub](https://img.shields.io/github/license/cangshudada/lineOffset?style=flat-square)](https://github.com/cangshudada/lineOffset/blob/master/LICENSE)
===

##### ⚙A tool that takes a line and returns a line at offset by the specified offset.




<h4 align="center">
  <a href="https://www.cmappax.com/lineOffset">Fully Featured demo</a>
</h4>


## Installation
```bash
npm install --save line2offset
//or
yarn add --save line2offset
```

```html
<script src="lineoffset.min.js"></script>
```



## Getting Started

```javascript
import lineOffset from "line2offset";

/**
 * Takes a line and returns a line at offset by the specified offset.
 * @name lineOffset
 * @param {[number,number][]} coords input coords
 * @param {number} offset the line
 * @returns {[number,number][]} Line offset from the input line
 * @example
 * const line = [[-83, 30], [-84, 36], [-78, 41]];
 * const offsetLine = lineOffset(line, 2);
 */
const lineString = lineOffset([
    [100, 180],
    [200, 180],
    [300, 180],	
 ], 10);

console.log(lineString) // => [[100, 185],[200, 185],[300, 185],[300, 175],[200, 175],[100, 175]]

```



## License

```
MIT License

Copyright (c) 2021 varon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

