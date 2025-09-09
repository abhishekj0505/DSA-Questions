function createFibonacci() {
  const memo = {};

  function fib(n) {
    if (n <= 1) return n;

    if (memo[n] !== undefined) {
      return memo[n]; // return cached value
    }

    memo[n] = fib(n - 1) + fib(n - 2); // store in cache
    return memo[n];
  }

  return fib;
}

const fibonacci = createFibonacci();

console.log(fibonacci(0));  // 0
console.log(fibonacci(1));  // 1
console.log(fibonacci(6));  // 8
console.log(fibonacci(10)); // 55
