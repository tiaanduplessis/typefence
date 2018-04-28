import type from './src'

test('should export type checking functions', () => {
    expect(typeof type).toBe('object')
    expect(type.isArr).toBeDefined()
    expect(type.isBool).toBeDefined()
    expect(type.isFunc).toBeDefined()
})

test('should check if value is array', () => {
    expect(type.isArr(new Array(10))).toBeTruthy()
    expect(type.isArr([])).toBeTruthy()
    expect(type.isArr('[]')).toBeFalsy()
})

test('should check if value is boolean', () => {
    expect(type.isBool(true)).toBeTruthy()
    expect(type.isBool(false)).toBeTruthy()
    expect(type.isBool(new Boolean())).toBeTruthy()
    expect(type.isBool(1)).toBeFalsy()
    expect(type.isBool('false')).toBeFalsy()
})

test('should check if value is date', () => {
    expect(type.isDate(new Date())).toBeTruthy()
})

test('should check if value is empty', () => {
    expect(type.isEmpty([])).toBeTruthy()
    expect(type.isEmpty('')).toBeTruthy()
    expect(type.isEmpty({})).toBeTruthy()
    expect(type.isEmpty(' ')).toBeFalsy()
})

test('should check if value is error', () => {
    expect(type.isErr(new Error('Error'))).toBeTruthy()
    expect(type.isErr('Error')).toBeFalsy()
})

test('should check if value is JSON', () => {
    expect(type.isJSON('{"foo": true}'))
    expect(type.isJSON('NOT JSON')).toBeFalsy()
})

test('should check if value is function', () => {
    expect(type.isFunc(() => {})).toBeTruthy()
    expect(type.isFunc(function noop() {})).toBeTruthy()
    expect(type.isFunc('')).toBeFalsy()
    expect(type.isFunc(1)).toBeFalsy()
})

test('should check if value is string', () => {    
    expect(type.isStr('')).toBeTruthy()
    expect(type.isStr('true')).toBeTruthy()
    expect(type.isStr(undefined)).toBeFalsy()
})

test('should check if value is undefined', () => {
    expect(type.isUndef(undefined)).toBeTruthy()
    expect(type.isUndef('str')).toBeFalsy()
    expect(type.isUndef(1)).toBeFalsy()
})

test('should check if value is symbol', () => {
    expect(type.isSym(Symbol('test'))).toBeTruthy()
})

test('should check if value is object', () => {
    expect(type.isObj({})).toBeTruthy()
    expect(type.isObj({foo: true})).toBeTruthy()
    expect(type.isObj('{}')).toBeFalsy()
})

test('should check if value is promise', () => {
    expect(type.isProm(Promise.resolve({}))).toBeTruthy()
    expect(type.isProm(new Promise(() => {}))).toBeTruthy()
})

test('should check if value is null', () => {
    expect(type.isNull(null)).toBeTruthy()
    expect(type.isNull('')).toBeFalsy()
})

test('should check if value is number', () => {
    expect(type.isNum(1)).toBeTruthy()
    expect(type.isNum(1.5)).toBeTruthy()
    expect(type.isNum('1')).toBeFalsy()
})

test('should check if value is integer', () => {
    expect(type.isInt(1)).toBeTruthy()
    expect(type.isInt(1500)).toBeTruthy()
    expect(type.isInt(1.5)).toBeFalsy()
})