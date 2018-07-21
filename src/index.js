
export function isArr (val) {
  return val && Array.isArray(val)
}

export function isBool (val) {
  return typeof val === 'boolean' || val instanceof Boolean
}

export function isDate (val) {
  return Object.prototype.toString.call(val) === '[object Date]'
}

export function isEmpty (val) {
  return (isStr(val) && val === '') || (isArr(val) && val.length === 0) || (isObj(val) && Object.keys(val).length === 0)
}

export function isErr (val) {
  return val instanceof Error && typeof val.message !== 'undefined'
}

export function isJSON (val) {
  try {
    JSON.parse(val)
    return true
  } catch (error) {
    return false
  }
}

export function isFunc (val) {
  return Object.prototype.toString.call(val) === '[object Function]'
}

export function isStr (val) {
  return Object.prototype.toString.call(val) === '[object String]'
}

export function isUndef (val) {
  return val === undefined && typeof val === 'undefined'
}

export function isSym (val) {
  return typeof val === 'symbol'
}

export function isRegex (val) {
  return val && typeof val === 'object' && val.constructor === RegExp
}

export function isObj (val) {
  return val && typeof val === 'object' && val.constructor === Object
}

export function isProm (val) {
  return val && val.then && typeof val.then === 'function'
}

export function isNull (val) {
  return val === null
}

export function isNum (val) {
  return Object.prototype.toString.call(val) === '[object Number]' && isFinite(val)
}

export function isInt (val) {
  return isNum(val) && Number.isInteger(val)
}
