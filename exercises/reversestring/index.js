// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Without using reverse
  return str.split('').reduce((reversed, character) => {
    return character + reversed;
  }, '');

  // also: return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;


// MINE
// function reverse(str) {
//   // Without using reverse
//   let reversed = [];
//   let strLen = str.length;

//   for (i = 1; i <= strLen; i++) {
//     reversed.push(str[strLen - i]);
//   }

//   return reversed.join('');
// }


// SG SOLUTION 1
// function reverse(str) {
//   // With reverse
//   return str.split('').reverse().join('');
// }

// SG SOLUTION 2
// function reverse(str) {
//   // Without using reverse
//   let reversed = '';

//   for (let character of str) {
//     reversed = character + reversed;
//   }

//   return reversed;
// }