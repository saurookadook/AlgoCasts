// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str
    .split(' ')
    .map(word => {
      return `${word[0].toUpperCase()}${word.slice(1)}`
      // let wordArr = word.split('');
      // wordArr[0] = wordArr[0].toUpperCase();
      // return wordArr.join('');
    })
    .join(' ');
}

module.exports = capitalize;


// MINE
// function capitalize(str) {
//   return str
//     .split(' ')
//     .map(word => {
//       return `${word[0].toUpperCase()}${word.slice(1)}`
//       // let wordArr = word.split('');
//       // wordArr[0] = wordArr[0].toUpperCase();
//       // return wordArr.join('');
//     })
//     .join(' ');
// }


// SG SOLUTION 1
// function capitalize(str) {
//   const words = [];

//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(' ');
// }

// SG SOLUTION 2
// function capitalize(str) {
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i - 1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }
  
//   return result;
// }