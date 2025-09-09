
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args); 
    } else {
      return function (...nextArgs) {
        return curried.apply(this, args.concat(nextArgs));
      };
    }
  };
}


function sum(a, b, c) {
  return a + b + c;
}


const curriedSum = curry(sum);

// Different ways of calling
console.log(curriedSum(1)(2)(3));   
console.log(curriedSum(1, 2)(3));   
console.log(curriedSum(1)(2, 3));   
console.log(curriedSum(1, 2, 3));   
