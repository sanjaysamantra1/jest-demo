import { add, arr1, arr2, factorial, fetchComments, fetchUser, greet, isEven, sub } from "./util"

describe('This is test suite for util file', () => {
  it('Testing add function', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(2, -3)).toBe(-1);
    expect(add(-2, -3)).toBe(-5);
    expect(add(-2, -3)).not.toBe(5);
  })
  it('Testing sub function', () => {
    expect(sub(10, 5)).toBe(5);
    expect(sub(10, 2)).toBe(8);
  })
  it('Testing isEven function', () => {
    expect(isEven(2)).toBe(true)
    expect(isEven(3)).not.toBe(true)
    expect(isEven(4)).toBe(true)
  })
  it('Testing toEqual', () => {
    expect(arr1).toEqual(arr2);
  })
  it('Testing factorial', () => {
    expect(factorial(5)).toBe(120);
  })
  it('Testing Promise', () => {
    return fetchUser().then(response => {
      expect(response.length).toBe(10);
      console.log(response.length)
    })
  })
  it('Testing async await', async () => {
    let data = await fetchComments();
    expect(data.length).toBe(500);
  })
  it('Testing mock', () => {
    const myMock = jest.fn(() => { console.log('This is Mock Function') });
    greet('Sanjay', myMock);
  })
})