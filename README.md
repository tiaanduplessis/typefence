
# @tiaanduplessis/type
[![package version](https://img.shields.io/npm/v/@tiaanduplessis/type.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/type)
[![package downloads](https://img.shields.io/npm/dm/@tiaanduplessis/type.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/type)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/@tiaanduplessis/type.svg?style=flat-square)](https://npmjs.org/package/@tiaanduplessis/type)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Basic type checking

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install @tiaanduplessis/type
$ # OR
$ yarn add @tiaanduplessis/type
```

## Usage

```js
import type from '@tiaanduplessis/type'

type.isArr([]) // true
type.isArray(new Array(10)) // true

type.isBool(true) // true
type.isBool(false) // true
type.isBool(new Boolean()) // true

type.isDate(new Date()) // true

type.isEmpty([]) // true
type.isEmpty('') // true
type.isEmpty({}) // true

type.isErr(new Error('Error')) // true

type.isJSON('{"foo": true}') // true

type.isFunc(() => {}) // true
type.isFunc(function noop() {}) // true

type.isStr('')
type.isStr('true')

type.isUndef(undefined) // true

type.isSym(Symbol('test')) // true

type.isObj({}) // true
type.isObj({foo: true}) // true

type.isProm(Promise.resolve({})) // true
type.isProm(new Promise(() => {})) // true

type.isNull(null) // true
```

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    