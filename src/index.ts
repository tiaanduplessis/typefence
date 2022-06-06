export const isArr = <T = any>(val: any): val is T[] =>
  val && Array.isArray(val);
export const isNotArr = <T = any>(val: any): boolean => !isArr<T>(val);
export const isArray = isArr;
export const isNotArray = isNotArr;

export const isBool = (val: any): val is boolean =>
  typeof val === "boolean" || val instanceof Boolean;
export const isNotBool = (val: any): boolean => !isBool(val);
export const isBoolean = isBool;
export const isNotBoolean = isNotBool;

export const isDate = (val: any): val is Date =>
  Object.prototype.toString.call(val) === "[object Date]";
export const isNotDate = (val: any): boolean => !isDate(val);

export const isStr = (val: any): val is string =>
  Object.prototype.toString.call(val) === "[object String]";
export const isNotStr = (val: any): boolean => !isStr(val);
export const isString = isStr;
export const isNotString = isNotStr;

export const isNum = (val: any): val is number =>
  Object.prototype.toString.call(val) === "[object Number]" &&
  Number.isFinite(val);
export const isNotNum = (val: any): boolean => !isNum(val);
export const isNumber = isNum;
export const isNotNumber = isNotNum;

export const isInt = (val: any): val is number =>
  isNum(val) && Number.isInteger(val);
export const isInteger = isInt;

export const isEmpty = (val: any): boolean =>
  (isStr(val) && val === "") ||
  (isArr(val) && val.length === 0) ||
  (isObj(val) && Object.keys(val).length === 0);

export const isErr = (val: any): val is Error =>
  val instanceof Error && typeof val.message !== "undefined";
export const isError = isErr;

export const isJSON = (val: any, strict: boolean = true): val is string => {
  try {
    const result = JSON.parse(val);
    return strict ? isObj(result) : true;
  } catch {
    return false;
  }
};
export const isJson = isJSON;

export const isFunc = (val: any): val is Function =>
  Object.prototype.toString.call(val) === "[object Function]";
export const isFunction = isFunc;

export const isUndef = (val: any): val is undefined =>
  typeof val === "undefined";
export const isUndefined = isUndef;

export const isSym = (val: any): val is symbol => typeof val === "symbol";
export const isSymbol = isSym;
export const isNotSym = (val: any): val is any => !isSym(val);
export const isNotSymbol = isNotSym;

export const isRegex = (val: any): val is RegExp =>
  val && typeof val === "object" && val.constructor === RegExp;

export const isObj = (val: any): boolean =>
  val && typeof val === "object" && !Array.isArray(val) && val !== null;
export const isObject = isObj;

export const isProm = <T = any>(val: any): val is Promise<T> =>
  val && val.then && typeof val.then === "function";
export const isNotProm = <T = any>(val: any): boolean => !isProm<T>(val);
export const isPromise = isProm;
export const isNotPromise = isNotProm;

export const isNull = (val: any): val is null => val === null;
export const isNotNull = (val: any): val is null => !isNull(val);

export const isNullish = (val: any): boolean => isNull(val) || isUndef(val);
export const isNotNullish = (val: any): boolean => !isNullish(val);

export type CheckPredicate = (val: any) => boolean;

export const isEvery =
  (...checks: CheckPredicate[]) =>
  (...vals: any[]): boolean =>
    checks.every((isValid) => vals.every(isValid));

export const isSome =
  (...checks: CheckPredicate[]) =>
  (...vals: any[]): boolean =>
    checks.some((isValid) => vals.some(isValid));

export const asserts = (condition: any, msg?: string): asserts condition  =>{
  if (!condition) {
    throw new Error(msg);
  }
}

export const isSame = (val1: any, val2: any): boolean => Object.is(val1, val2);

export const isTruthy = (val: any): boolean => !!val;
export const isFalsy = (val: any): boolean => !val;