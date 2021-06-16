// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, cols = n) {
  if(n === 0) return  
  steps(n - 1, cols)
  console.log("#".repeat(n) + " ".repeat(cols - n))
  
  // function steps(n, cols = n, row = "") {
  // if(n === 0) return  
  // steps(n - 1, cols)
  // for(let i = 0; i < cols; i++) {
  //   i < n ? row += "#" : " "
  // }
  // console.log(row)

  // for(let i = 0; i < n; i++) {
  //   let row = ""
  //   for(let j = 0; j < n; i++) {
  //     console.log(i >= j ? row += "#" : " ")
  //   }
  // }

  // for(let i = 1; i <= n; i++) {
  //   console.log("#".repeat(i) + " ".repeat(n - i))
  // }
}
steps(7)
steps(5)
module.exports = steps;
