import { add, arr1, arr2, factorial, isEven, sub } from "./util";

//  describe  = test suite
describe("This is Test suite for util file", () => {
  // it  = testcase
  it.skip("This is a testcase to test add functionality", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(2, -3)).toBe(-1);
    expect(add(-2, 3)).toBe(1);
    expect(add(-2, -3)).toBe(-5);
    expect(add(-2, -3)).not.toBe(undefined);
    expect(add(-2, -3)).not.toBe(null);
  });

  test("This is a testcase to test sub functionality", () => {
    expect(sub(5, 3)).toBe(2);
    expect(sub(5, -3)).toBe(8);
    expect(sub(-5, 3)).toBe(-8);
  });

  it("This is a testcase to test isEven functionality", () => {
    expect(isEven(5)).toBe(false);
    expect(isEven(4)).toBe(true);
  });

  it("This is a testcase to test toEqual", () => {
    expect(arr1).toEqual(arr2);
    expect(arr1).toBeDefined();
  });

  it("This is a testcase to test factorial functionality", () => {
    expect(factorial(5)).toBe(120);
    debugger;
    expect(factorial(4)).toBe(24);
  });
});
