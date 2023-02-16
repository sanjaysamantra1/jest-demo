import { add, arr1, arr2, factorial, isEven, sub } from "./util";

describe("Test suite for utils file", () => {
  it("testcase for add method", () => {
    expect(add(1, 2)).toBe(3);
    expect(add(10, 20)).toBe(30);
    expect(add(2, -3)).toBe(-1);
  });

  it("testcase for sub method", () => {
    expect(sub(20, 10)).toBe(10);
    expect(sub(10, 20)).toBe(-10);
    expect(sub(2, -3)).toBe(5);
  });

  it("should test isEven method", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).not.toBe(true);
  });

  it("array comparison", () => {
    expect(arr1).toEqual(arr2);
    expect(arr1).toContain(40);
    expect(arr1).not.toContain(50);
  });

  it("should test factorial method", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
  });
  
});
