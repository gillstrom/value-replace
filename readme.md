# value-replace [![Build Status](https://travis-ci.org/gillstrom/value-replace.svg?branch=master)](https://travis-ci.org/gillstrom/value-replace)

> Replace object values with [String.prototype.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)


## Install

```
$ npm install --save value-replace
```


## Usage

```js
const valueReplace = require('value-replace');
const obj = {
	foo: 'bar'
};

valueReplace(obj, 'bar', 'baz');
//=> {foo: 'baz'}

valueReplace(obj, 'ba', str => str.toUpperCase());
//=> {foo: 'BAr'}
```


## API

### valueReplace(input, search, replace)

Returns a new object.

#### input

*Required*  
Type: `object`

The object which values will be replaced.

#### search

*Required*  
Type: `string` or `regexp`

Search for matching substring that will be replaced.

#### replace

*Required*  
Type: `string` or `function`

Replacing the matching substring.


## Related

* [array-replace](https://github.com/gillstrom/array-replace) - Replace array values with `String.prototype.replace`
* [key-replace](https://github.com/gillstrom/key-replace) - Replace object key with `String.prototype.replace`


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
