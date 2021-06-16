// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, numOfRows = n) {
  if(n === 0) return
  pyramid(n - 1, numOfRows)
  const spaces = " ".repeat(((numOfRows * 2 - 1) - (n * 2 - 1)) / 2)
  console.log(spaces + "#".repeat(n * 2 - 1) + spaces)

  // for(let i = 0; i < n; i++) {
  //   let row = ""
  //   for(let j = 0; j < n * 2 - 1; j++) {
  //     if(j >= ((n - 1) * 2) / 2 - i && j <= ((n - 1) * 2) / 2 + i) {
  //       row += "#"
  //     } else {
  //       row += " "
  //     }
  //     // if(j < (((n - i) * 2 - 1) / 2) - 1 || j > ((n * 2 - 1) / 2) + i) {
  //     //   row += " "
  //     // } else {
  //     //   row += "#"
  //     // }
  //   }
  //   console.log(row)
  // }

  // for(let i = 1; i <= n; i++) {
  //   const endSpaces = " ".repeat(((n * 2 - 1) - (i * 2 - 1)) / 2)
  //   console.log(endSpaces + "#".repeat(i * 2 - 1) + endSpaces)
  // }
}

module.exports = pyramid;
