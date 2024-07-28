// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let strLen = str.length - 1;
  let strArr = str.split('');

  for (i = 0; i <= (strLen/2); i++) {
    return strArr[i] === strArr[strLen - i];
  }
}

module.exports = palindrome;


// MINE
// function palindrome(str) {
//   let reversed = str.split('').reduce((rev, char) => {
//     return char + rev;
//   }, '');

//   return reversed === str ? true : false;
// }


// SG SOLUTION 1
// function palindrome(str) {
//   const reversed = str.split('').reverse().join('');

//   return reversed === str;
// }

// SG SOLUTION 2
// function palindrome(str) {
//   let strLen = str.length - 1;
//   str.split('').every((char, i) => {
//     return char === str[strLen - i];
//   })
// }
