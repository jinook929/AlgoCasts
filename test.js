


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

function arrayManipulation(n, queries) {
  // Write your code here
  const arr = Array(n).fill(0)
  for(let i = 0; i < queries.length; i++) {
      const left = queries[i][0] - 1
      const right = queries[i][1] - 1
      const addition = Array(right - left + 1).fill(queries[i][2])
      const arrSlice = (right >= n - 1) ? arr.slice(left) : arr.slice(left, right + 1)
      for(let i = 0; i < addition.length; i++) {
        addition[i] = addition[i] + arrSlice[i]
      }
      // for(let j = left; j <= right; j++) {
      //     arr[j - 1] += queries[i][2]
      // }
  }
  return Math.max(...arr)
}

// console.log(arrayManipulation(10, [[1,5,3], [4,8,7], [6,9,1]]))
console.log(arrayManipulation(5, [[1,2,100], [2,5,100], [3,4,100]]))