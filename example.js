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