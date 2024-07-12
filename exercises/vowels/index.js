// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let allVowels = str.match(/[aeiou]/gi);

  // if (allVowels) {
  //   return allVowels.length;
  // }
  // return 0;
  // refactor:
  return allVowels ? allVowels.length : 0;
}

module.exports = vowels;


// MINE
// function vowels(str) {
//   let allVowels = str.match(/[aeiou]/gi)

//   if (allVowels) {
//     return allVowels.length;
//   }
//   return 0;
// }


// SG SOLUTION 1 (iterative)
// function vowels(str) {
//   let counter = 0;
//   // const checker = 'aeiou';
//   const checker = ['a', 'e', 'i', 'o', 'u'];

//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       counter++;
//     }
//   }

//   return counter;
// }

// SG SOLUTION 2 (RegEx)
// function vowerls(str) {
//   const matches = str.match(/[aeiou]/gi);

//   return matches ? matches.length : 0;
// }