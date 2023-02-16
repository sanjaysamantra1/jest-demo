export function add(a, b) {
  return a + b;
}
export function sub(a, b) {
  return a - b;
}

export function isEven(x) {
  return x % 2 === 0;
}

export const arr1 = [10, 20, 30, 40];
export const arr2 = [10, 20, 30, 40];

export function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
