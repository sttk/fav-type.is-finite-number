# [@fav/type.is-finite-number][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Checks whether a value is a finite number or not.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.

## Install

To install from npm:

```sh
$ npm install --save @fav/type.is-finite-number
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/type.is-finite-number/` directory manually.*


## Usage

For Node.js, when installing `@fav/type.is-finite-number` from npm:

```js
var isFiniteNumber = require('@fav/type.is-finite-number');
isFiniteNumber(123); // => true
isFiniteNumber(4.56); // => true
isFiniteNumber(Infinity); // => false
isFiniteNumber(NaN); // => false

isFiniteNumber.not(123); // => false
isFiniteNumber.not(4.56); // => false
isFiniteNumber.not(Infinity); // => true
isFiniteNumber.not(NaN); // => true
```

For Web browsers:

```html
<script src="fav.type.is-finite-number.min.js"></script>
<script>
var isFiniteNumber = fav.type.isFiniteNumber;
isFiniteNumber(123); // => true
isFiniteNumber.not(123); // => false
</script>
```


## API

### <u>isFiniteNumber(value) : boolean</u>

Checks if *value* is a number, which is neither a positive/negative infinity nor NaN. 

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| value     | *any*  | The value to be checked. |

#### Return:

True, if *value* is a finite number.

**Type:** boolean


### <u>isFiniteNumber.not(value) : boolean</u>

Checks if *value* is not a finite number.

This function always returns a negative boolean of `isFiniteNumber(value)`.

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| value     | *any*  | The value to be checked. |

#### Return:

True, if *value* is not a finite number.

**Type:** boolean


## Checked                                                                      

### Node.js (4〜8)

| Platform  |   4    |   5    |   6    |   7    |   8    |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.7   |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-type.is-finite-number/
[npm-img]: https://img.shields.io/badge/npm-v0.6.1-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/type.is-finite-number
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-type.is-finite-number.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-type.is-finite-number
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-type.is-finite-number?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-type-is-finite-number
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-type.is-finite-number/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-type.is-finite-number?branch=master
