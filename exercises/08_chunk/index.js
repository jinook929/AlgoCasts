// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

  const chunkResult =[]
  let counter = 0
  while(counter < array.length) {
    chunkResult.push(array.slice(counter, counter + size))
    counter += size
  }
  // while(array.length !== 0) {
  //   counter +=size
  //   chunkResult.push(array.splice(0, size))
  // }
  return chunkResult

  // const chunkedResult =[]
  // for(const el of array) {
  //   const lastArr = chunkedResult[chunkedResult.length - 1]
  //   if(!lastArr || lastArr.length === size) {
  //     chunkedResult.push([el])
  //   } else {
  //     lastArr.push(el)
  //   }
  // }
  // return chunkedResult

  // const result = []
  // let tmpArr = []
  // let counter = 0
  // for(const el of array) {
  //   tmpArr.push(el)
  //   counter++
  //   if(counter % size === 0) {
  //     result.push(tmpArr)
  //     tmpArr =[]
  //   } else if(counter === array.length) {
  //     result.push(tmpArr)
  //   }
  // }
  // return result
}
console.log(chunk([1, 2, 3, 4, 5], 2))
module.exports = chunk;
