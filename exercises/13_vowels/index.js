// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  return str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0
  // return str.split("").filter(ch => ch.match(/[aeiou]/i)).length
  // return str.split("").filter(ch => ch.match(/(a|e|i|o|u)/i)).length
}

module.exports = vowels;
