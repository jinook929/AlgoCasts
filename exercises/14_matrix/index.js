// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const result = []
  for(let i = 0; i < n; i++) {
    result.push(Array(n).fill(""))
  }

  let counter = 0
  let startRow = 0
  let endRow = n - 1
  let startColumn = 0
  let endColumn = n - 1

  while(startRow <= endRow && startColumn <= endColumn) {

    // current top row
    for(let i = startColumn; i <= endColumn; i++) {
      counter++
      result[startRow][i] = counter
    }
    startRow++

    // current far-right column
    for(let i = startRow; i <= endRow; i++) {
      counter++
      result[i][endRow] = counter
    }
    endColumn--

    // current bottom row
    for(let i = endColumn; i >= startColumn; i--) {
      counter++
      result[endRow][i] = counter
    }
    endRow--

    // current far-left column
    for(let i = endRow; i >= startRow; i--) {
      counter++
      result[i][startColumn] = counter
    }
    startColumn++
  }

  return result
}
console.log(matrix(6))
module.exports = matrix;
