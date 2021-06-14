// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // const a = sortedString(stringA)
  // const b = sortedString(stringB)
  // return a === b ? true : false
  return sortedString(stringA) === sortedString(stringB)

  // const a = {}, b = {}

  // // for(const ch of stringA.toLowerCase().split("").filter(ch => ch.match(/\w/)).join("")) {
  // // for(const ch of stringA.toLowerCase().replace(/[^\w]/g, "")) {
  // for(const ch of mapChars(stringA)) {
  //   a[ch] = a[ch] + 1 || 1
  // }

  // for(const ch of mapChars(stringB)) {
  //   b[ch] = b[ch] + 1 || 1
  // }

  // if(Object.keys(a).length !== Object.keys(b).length) return false

  // for(const key in a) {
  //   if(a[key] !== b[key]) return false
  // }

  // return true
}

// const mapChars = str => str.replace(/[^\w]/g, "").toLowerCase()
const sortedString = str => str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")

module.exports = anagrams;
