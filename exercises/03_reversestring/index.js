// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // return str.split("").reverse().join("");

  // let result = []
  // for(let i = 0; i < str.length; i++) {
  //   result.unshift(str[i])
  // }
  // return result.join("")
  
  // let result = "";
  // for(let i = str.length - 1; i >= 0; i--) {
  //     result += str[i];
  // }
  // return result;

  // let reversed = ""
  // for(const ch of str) {
  //   reversed = ch + reversed
  // }
  // return reversed

  // return str.split("").reduce((acc, el) => el + acc, "")
  
  // if(str === "") return ""
  // return reverse(str.substring(1)) + str[0]

  return str === "" ? "" : reverse(str.substring(1)) + str[0]
}

module.exports = reverse;
