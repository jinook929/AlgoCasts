var pivotIndex = function(nums) {
  if(nums.slice(1).reduce((acc, el) => acc + el, 0) === 0) return 0

  let leftSum = 0
  let rightSum = 0
  
  for(let i = 0; i < nums.length; i++) {
      leftSum += nums[i]
      rightSum = nums.slice(i + 2).reduce((acc, el) => acc + el, 0)
      if(leftSum === rightSum) return i + 1
  }

  return -1
};

// console.log("Hello!")
// console.log(pivotIndex([1,7,3,6,5,6]))
// console.log(pivotIndex([1,2,3]))
// console.log(pivotIndex([2,1,-1]))
// console.log(pivotIndex([1,4,2,5]))
// console.log(pivotIndex([2,3,4,1,4,5]))


// https://www.hackerrank.com/challenges/crush/problem
// Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.

// a b k
// 1 5 3
// 4 8 7
// 6 9 1

// index->	 1 2 3  4  5 6 7 8 9 10
// 	        [0,0,0, 0, 0,0,0,0,0, 0]
// 	        [3,3,3, 3, 3,0,0,0,0, 0]
// 	        [3,3,3,10,10,7,7,7,0, 0]
// 	        [3,3,3,10,10,8,8,8,1, 0]

function arrayManipulation(n, queries) {
  // Write your code here
  const arr = Array(n).fill(0)
  for(let i = 0; i < queries.length; i++) {
      const left = queries[i][0] - 1
      const right = queries[i][1] - 1
      let additionLength = right - left + 1
      for(let j = left; j < left + additionLength; j++) {
        arr[j] += queries[i][2]
      }
      console.log(arr)
  }
  return Math.max(...arr)
}

console.log(arrayManipulation(10, [[1,5,3], [4,8,7], [6,9,1]]))
console.log(arrayManipulation(5, [[1,2,100], [2,5,100], [3,4,100]]))
console.log(arrayManipulation(10, [[2,6,8], [3,5,7], [1,8,1], [5,9,15]]))