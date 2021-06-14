// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {}
  for(const char of str) {
    chars[char] = chars[char] + 1 || 1

    // chars[char] ? chars[char]++ : chars[char] = 1
    
    // if(Object.keys(chars).includes(char)) {
    //   chars
    //   chars[char] = chars[char] + 1
    // } else {
    //   chars[char] = 1
    // }
  }
  
  // let maxValue = 0
  // let maxCharResult = ""
  // for(const [k, v] of Object.entries(chars)) {
  //   if(v > maxValue) {
  //     maxValue = v
  //     maxCharResult = k
  //   }
  // }
  // return maxCharResult

  // let maxValue = 0
  // let maxCharReturn = ""
  // for(const key in chars) {
  //   if(chars[key] > maxValue) {
  //     maxValue = chars[key]
  //     maxCharReturn = key
  //   }
  // }
  // return maxCharReturn

  // return Object.keys(chars).reduce((acc, el) => chars[acc] > chars[el] ? acc : el)
}
// console.log(maxChar("abcccccccd"))
// console.log(maxChar("apple 1231111"))
module.exports = maxChar;
