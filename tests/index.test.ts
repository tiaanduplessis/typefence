import { test, expect, describe } from "vitest";

import * as t from "../src";

describe("typefence", () => {
  test("should check if value is array", () => {
    expect(t.isArr(new Array(10))).toBeTruthy();
    expect(t.isArr([])).toBeTruthy();
    expect(t.isArr("[]")).toBeFalsy();
    expect(t.isArr(null)).toBeFalsy();
    expect(t.isArr({})).toBeFalsy();
    expect(t.isNotArr(null)).toBeTruthy();
  });

  test("should check if value is boolean", () => {
    expect(t.isBool(true)).toBeTruthy();
    expect(t.isBool(false)).toBeTruthy();
    expect(t.isBool(new Boolean())).toBeTruthy();
    expect(t.isBool(1)).toBeFalsy();
    expect(t.isBool("false")).toBeFalsy();
  });

  test("should check if value is date", () => {
    expect(t.isDate(new Date())).toBeTruthy();
  });

  test("should check if value is empty", () => {
    expect(t.isEmpty([])).toBeTruthy();
    expect(t.isEmpty("")).toBeTruthy();
    expect(t.isEmpty({})).toBeTruthy();
    expect(t.isEmpty(" ")).toBeFalsy();
  });

  test("should check if value is error", () => {
    expect(t.isErr(new Error("Error"))).toBeTruthy();
    expect(t.isErr("Error")).toBeFalsy();
  });

  test("should check if value is JSON strictly", () => {
    expect(t.isJSON('{"foo": true}')).toBeTruthy();
    expect(t.isJSON("NOT JSON")).toBeFalsy();
    expect(t.isJSON(null)).toBeFalsy();
    expect(t.isJSON(false)).toBeFalsy();
    expect(t.isJSON(true)).toBeFalsy();
  });

  test("should check if value is function", () => {
    expect(t.isFunc(() => {})).toBeTruthy();
    expect(t.isFunc(function noop() {})).toBeTruthy();
    expect(t.isFunc("")).toBeFalsy();
    expect(t.isFunc(1)).toBeFalsy();
  });

  test("should check if value is string", () => {
    expect(t.isStr("")).toBeTruthy();
    expect(t.isStr("true")).toBeTruthy();
    expect(t.isStr(undefined)).toBeFalsy();
  });

  test("should check if value is undefined", () => {
    expect(t.isUndef(undefined)).toBeTruthy();
    expect(t.isUndef("str")).toBeFalsy();
    expect(t.isUndef(1)).toBeFalsy();
  });

  test("should check if value is symbol", () => {
    expect(t.isSym(Symbol("test"))).toBeTruthy();
  });

  test("should check if value is object", () => {
    expect(t.isObj({})).toBeTruthy();
    expect(t.isObj({ foo: true })).toBeTruthy();
    expect(t.isObj("{}")).toBeFalsy();
  });

  test("should check if value is promise", () => {
    expect(t.isProm(Promise.resolve({}))).toBeTruthy();
    expect(t.isProm(new Promise(() => {}))).toBeTruthy();
  });

  test("should check if value is null", () => {
    expect(t.isNull(null)).toBeTruthy();
    expect(t.isNull("")).toBeFalsy();
  });

  test("should check if value is number", () => {
    expect(t.isNum(1)).toBeTruthy();
    expect(t.isNum(1.5)).toBeTruthy();
    expect(t.isNum("1")).toBeFalsy();
  });

  test("should check if value is integer", () => {
    expect(t.isInt(1)).toBeTruthy();
    expect(t.isInt(1500)).toBeTruthy();
    expect(t.isInt(1.5)).toBeFalsy();
  });

  test("should check if value is nullish", () => {
    expect(t.isNullish(null)).toBeTruthy();
    expect(t.isNullish(undefined)).toBeTruthy();
    expect(t.isNotNullish("")).toBeTruthy();
  });

  test("should check if value meets every predicate", () => {
    const isChecks = t.isEvery(t.isObj, t.isEmpty)
    expect(isChecks({})).toBeTruthy();
  });

  test("should check if value meets some predicate", () => {
    const isSomeChecks = t.isSome(t.isStr, t.isBool, t.isNum);
    expect(isSomeChecks("str")).toBeTruthy();
  });

  test('should assert condition', () => {
    expect(() => t.asserts(true, 'true')).not.toThrowError('true');
    expect(() => t.asserts(false, 'false')).toThrowError('false');
  })

  test('should check if values are the same', () => {
    expect(t.isSame(true, true)).toBeTruthy()
    expect(t.isSame('true', 'true')).toBeTruthy()
    expect(t.isSame(true, false)).toBeFalsy()
  })

  test('should check if falsy', () => {
    expect(t.isFalsy(false)).toBeTruthy()
    expect(t.isFalsy(undefined)).toBeTruthy()
    expect(t.isFalsy(null)).toBeTruthy()
    expect(t.isFalsy(0)).toBeTruthy()
    expect(t.isFalsy('')).toBeTruthy()
  })

  test('should check if truthy', () => {
    expect(t.isTruthy(true)).toBeTruthy()
    expect(t.isTruthy('true')).toBeTruthy()
    expect(t.isTruthy(1)).toBeTruthy()
    expect(t.isTruthy(1.5)).toBeTruthy()
    expect(t.isTruthy({})).toBeTruthy()
    expect(t.isTruthy([])).toBeTruthy()
  })
});
