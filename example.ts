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
} from "./src";

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

const isPrimitiveType = isSome(isStr, isBool, isNum);
isPrimitiveType("str"); // true