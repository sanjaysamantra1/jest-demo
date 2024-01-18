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

export function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
}
export async function fetchComments() {
  let res = await fetch('https://jsonplaceholder.typicode.com/comments');
  let data = await res.json();
  return data;
}

export function greet(userName, callback) {
  for (let i = 1; i <= 10; i++) {
    callback(userName)
  }
}
