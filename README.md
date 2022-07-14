# 🤺 typefence

[![package version](https://img.shields.io/npm/v/typefence.svg?style=flat-square)](https://npmjs.org/package/typefence)
[![package downloads](https://img.shields.io/npm/dm/typefence.svg?style=flat-square)](https://npmjs.org/package/typefence)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/typefence.svg?style=flat-square)](https://npmjs.org/package/typefence)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

Basic runtime type checking

## Table of Contents

- [typefence](#typefence)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
    - [Kitchen sink](#kitchen-sink)
    - [Negation](#negation)
  - [API](#api)
  - [Contributing](#contributing)
  - [License](#license)

## Install

Install the package locally within you project folder with your package manager:

With `npm`:

```sh
npm install typefence
```

With `yarn`:

```sh
yarn add typefence
```

With `pnpm`:

```sh
pnpm add typefence
```

## Usage

### Kitchen sink

```ts
import {
  isArr,
  isArray,
  isBool,
  isBoolean,
  isDate,
  isEmpty,
  isErr,
  isEvery,
  isFunc,
  isFunction,
  isJSON,
  isNotStr,
  isNull,
  isNullish,
  isNum,
  isObj,
  isObject,
  isProm,
  isPromise,
  isSome,
  isStr,
  isString,
  isSym,
  isUndefined,
  isPrimitive,
} from "typefence";

isArr([]); // true
isArray(new Array(10)); // true

isBool(true); // true
isBoolean(false); // true
isBool(new Boolean()); // true

isDate(new Date()); // true

isEmpty([]); // true
isEmpty(""); // true
isEmpty({}); // true

isErr(new Error("Error")); // true

isJSON('{"foo": true}'); // true

isFunc(() => {}); // true
isFunction(function noop() {}); // true

isStr(""); // true
isString("true"); // true
isNotStr(false); // true

isSym(Symbol("test")); // true

isObj({}); // true
isObject({ foo: true }); // true

isProm(Promise.resolve({})); // true
isPromise(new Promise(() => {})); // true

isNull(null); // true
isUndefined(undefined); // true
isNullish(null); // true

const isEmptyObject = isEvery(isObj, isEmpty);
isEmptyObject({}); // true

isPrimitive("str"); // true
```

### Negation

Most functions have a negated alternative for convenience:

```ts
import { isNotNullish } from "typefence";
isNotNullish({}); // true
```

## API

For all configuration options, please see the [API docs](https://paka.dev/npm/typefence).

## Contributing

Got an idea for a new feature? Found a bug? Contributions are welcome! Please [open up an issue](https://github.com/tiaanduplessis/typefence/issues) or [make a pull request](https://makeapullrequest.com/).

## License

[MIT © Tiaan du Plessis](./LICENSE)
