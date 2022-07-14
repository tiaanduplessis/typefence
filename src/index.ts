/**
 * Check if value is an array.
 */
export const isArr = <T = any>(val: any): val is T[] =>
  val && Array.isArray(val);

/**
 * Check if value is not an array.
 */
export const isNotArr = <T = any>(val: any | T[]): boolean => !isArr<T>(val);

/**
 * Check if value is an array.
 */
export const isArray = isArr;

/**
 * Check if value is not an array.
 */
export const isNotArray = isNotArr;

/**
 * Check if value is boolean.
 */
export const isBool = (val: any): val is boolean => typeof val === "boolean";

/**
 * Check if value is not boolean.
 */
export const isNotBool = (val: any): boolean => !isBool(val);

/**
 * Check if value is boolean.
 */
export const isBoolean = isBool;

/**
 * Check if value is not boolean.
 */
export const isNotBoolean = isNotBool;

/**
 * Check if value is boolean or an instance of Boolean.
 */
export const isBoolLike = (val: any): val is boolean | Boolean =>
  isBool(val) || val instanceof Boolean;

/**
 * Check if value is a date.
 */
export const isDate = (val: any): val is Date =>
  Object.prototype.toString.call(val) === "[object Date]";
export const isNotDate = (val: any): boolean => !isDate(val);

/**
 * Check if value is a string.
 */
export const isStr = (val: any): val is string =>
  Object.prototype.toString.call(val) === "[object String]";

/**
 * Check if value is not a string.
 */
export const isNotStr = (val: any): boolean => !isStr(val);

/**
 * Check if value is string.
 */
export const isString = isStr;

/**
 * Check if value is not a string.
 */
export const isNotString = isNotStr;

/**
 * Check if value is a string or an instance of String.
 */
export const isStringLike = (val: any): val is string | String =>
  isString(val) || val instanceof String;

/**
 * Check if value is a number.
 */
export const isNum = (val: any): val is number =>
  Object.prototype.toString.call(val) === "[object Number]" &&
  Number.isFinite(val);

/**
 * Check if value is not a number.
 */
export const isNotNum = (val: any): boolean => !isNum(val);

/**
 * Check if value is a number.
 */
export const isNumber = isNum;

/**
 * Check if value is not a number.
 */
export const isNotNumber = isNotNum;

/**
 * Check if value is a number or an instance of Number.
 */
export const isNumLike = (val: any): val is number | Number =>
  isNum(val) || val instanceof Number;

/**
 * Check if value is an integer.
 */
export const isInt = (val: any): val is number =>
  isNum(val) && Number.isInteger(val);
export const isInteger = isInt;

/**
 * Check if value is an empty string, array or object.
 */
export const isEmpty = (val: any): val is "" | [] | {} =>
  (isStr(val) && val === "") ||
  (isArr(val) && val.length === 0) ||
  (isObj(val) && Object.keys(val).length === 0);

/**
 * Check if value is an instance of Error.
 */
export const isErr = (val: any): val is Error =>
  val instanceof Error && typeof val.message !== "undefined";
export const isError = isErr;

/**
 * Check if value is valid JSON.
 */
export const isJSON = (val: any, strict: boolean = true): boolean => {
  try {
    const result = JSON.parse(val);
    return strict ? isObj(result) : true;
  } catch {
    return false;
  }
};

/**
 * Check if value is valid JSON.
 */
export const isJson = isJSON;

/**
 * Check if value is a function.
 */
export const isFunc = (val: any): val is Function =>
  Object.prototype.toString.call(val) === "[object Function]";

/**
 * Check if value is a function.
 */
export const isFunction = isFunc;

/**
 * Check if value is a symbol.
 */
export const isSym = (val: any): val is symbol => typeof val === "symbol";

/**
 * Check if value is a symbol.
 */
export const isSymbol = isSym;

/**
 * Check if value is not a symbol.
 */
export const isNotSym = <T = any>(val: T | symbol): val is T => !isSym(val);

/**
 * Check if value is not a symbol.
 */
export const isNotSymbol = isNotSym;

/**
 * Check if value is a regular expression
 */
export const isRegex = (val: any): val is RegExp =>
  val && typeof val === "object" && val.constructor === RegExp;

/**
 * Check if value is an object.
 */
export const isObj = (val: any): val is object =>
  val && typeof val === "object" && !Array.isArray(val) && val !== null;

/**
 * Check if value is an object.
 */
export const isObject = isObj;

/**
 * Check if value is a promise.
 */
export const isProm = <T = any>(val: any): val is Promise<T> =>
  val && val.then && typeof val.then === "function";

/**
 * Check if value is not a promise.
 */
export const isNotProm = <T = any>(val: T): boolean => !isProm<T>(val);

/**
 * Check if value is a promise.
 */
export const isPromise = isProm;

/**
 * Check if value is not a promise.
 */
export const isNotPromise = isNotProm;

/**
 * Check if value is undefined.
 */
export const isUndef = (val: any): val is undefined =>
  typeof val === "undefined";

/**
 * Check if value is undefined.
 */
export const isUndefined = isUndef;

/**
 * Check if value is null.
 */
export const isNull = <T = any>(val: T | null): val is null => val === null;

/**
 * Check if value is not null.
 */
export const isNotNull = <T = any>(val: T | null): val is T => !isNull(val);

/**
 * Check if value is null or undefined.
 */
export const isNullish = <T = any>(
  val: T | undefined | null
): val is undefined | null => isNull(val) || isUndef(val);

/**
 * Check if value is not null or undefined.
 */
export const isNotNullish = <T = any>(
  val: T | undefined | null
): val is NonNullable<T> => !isNullish(val);

export type Primative = boolean | number | string | symbol | null | undefined;

/**
 * Check if value is primative.
 */
export const isPrimative = (val: any): val is Primative =>
  isSome(isBoolean, isNumber, isString, isSymbol, isNull, isUndefined)(val);

/**
 * Check if value is not primative.
 */
export const isNonPrimative = <T = any>(val: T | Primative): val is T => !isPrimative(val);

/**
 * Check if two values are the same.
 */
export const isSame = (val1: any, val2: any): boolean => Object.is(val1, val2);

type Falsy = false | 0 | "" | null | undefined;

/**
 * Check if value is falsy.
 */
export const isFalsy = (val: any): val is Falsy => !val;

/**
 * Check if value is truthy.
 */
export const isTruthy = <T = any>(val: T | Falsy): val is T => !!val;

/**
 * Check if value is blank/empty string.
 */
export const isBlank = (val: any): val is "" =>
  isStr(val) && /^\s*$/.test(val.trim());


/**
 * Predicate type used for isEvery and isSome utilites.
 */
 export type CheckPredicate = (val: any) => boolean;

export const isEvery =
  (...checks: CheckPredicate[]) =>
  (...vals: any[]): boolean =>
    checks.every((isValid) => vals.every(isValid));

export const isSome =
  (...checks: CheckPredicate[]) =>
  <T = any>(...vals: T[]): boolean =>
    checks.some((isValid) => vals.some(isValid));

export const asserts = (condition: any, msg?: string): asserts condition => {
  if (!condition) {
    throw new Error(msg);
  }
};
