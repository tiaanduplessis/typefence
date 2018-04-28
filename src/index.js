export default {
  isArr (val) {
    return val && Array.isArray(val)
  },

  isBool (val) {
    return typeof val === 'boolean' || val instanceof Boolean
  },

  isDate (val) {
    return Object.prototype.toString.call(val) === '[object Date]'
  },

  isEmpty (val) {
    return (this.isStr(val) && val === '') || (this.isArr(val) && val.length === 0) || (this.isObj(val) && Object.keys(val).length === 0)
  },

  isErr (val) {
    return val instanceof Error && typeof val.message !== 'undefined'
  },

  isJSON (val) {
    try {
      JSON.parse(val)
      return true
    } catch (error) {
      return false
    }
  },

  isFunc (val) {
    return Object.prototype.toString.call(val) === '[object Function]'
  },

  isStr (val) {
    return Object.prototype.toString.call(val) === '[object String]'
  },

  isUndef (val) {
    return val === undefined && typeof val === 'undefined'
  },

  isSym (val) {
    return typeof val === 'symbol'
  },

  isRegex (val) {
    return val && typeof val === 'object' && val.constructor === RegExp
  },

  isObj (val) {
    return val && typeof val === 'object' && val.constructor === Object
  },

  isProm (val) {
    return val && val.then && typeof val.then === 'function'
  },

  isNull (val) {
    return val === null
  },

  isNum (val) {
    return Object.prototype.toString.call(val) === '[object Number]' && isFinite(val)
  },

  isInt (val) {
    return this.isNum(val) && Number.isInteger(val)
  }

}
