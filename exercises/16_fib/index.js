// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function memoize(fn) {
//   const cache = {}
//   return function(...args) {
//     if(cache[args]) {
//       return cache[args]
//     } 
//     const result =  fn.apply(this, args)
//     cache[args] = result
//     return result
//   }
// }
// function slowFib(n) {
//   if(n < 2) return n
//   return fib(n - 1) + fib(n - 2)
// }
// const fib = memoize(slowFib)

// function fib(n) {
//   if(n < 2) return n
//   return fib(n - 1) + fib(n - 2)
// }

function fib(n, result = [0, 1]) {
  // base case
  if(n < 2) return result[n]
  // trigger recursion
  fib(n - 1, result)
  // after previous stack resolved
  result.push(result[n-1] + result[n-2])
  return result[n]
}

// function fib(n, result = []) {
//   if(n === 0) {
//     result.push(n)
//     return result[n]
//   }
//   fib(n - 1, result)
//   if(n === 1) {
//     result.push(n)
//   } else {
//     result.push(result[n-1] + result[n-2])
//   }
//   return result[n]
// }

// function fib(n) {
//   const result = [0, 1]
//   let counter = 2
//   while(counter <= n) {
//     result.push(result[counter - 1] + result[counter - 2])
//     counter++
//   }
//   return result[n]
// }

// console.log("index #0", fib(0))
// console.log("index #1", fib(1))
// console.log("index #2", fib(2))
// console.log("index #3", fib(3))
// console.log("index #4", fib(4))
// console.log("index #5", fib(5))
// console.log("index #6", fib(6))
// console.log("index #7", fib(7))
console.log("index #15", fib(15))
console.log("index #45", fib(45))
console.log("index #100", fib(100))
console.log("index #10000", fib(1000))
module.exports = fib;
