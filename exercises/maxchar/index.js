// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const allChars = str.split('');
  let charCount = {};
  let count = 0;
  let favChar = '';

  for (let char of allChars) {
    if ( charCount[char] ) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }

  Object.keys(charCount).forEach(key => {
    if (charCount[key] > count) {
      count = charCount[key];
      favChar = key;
    }
  })
  
  return favChar;
}

module.exports = maxChar;

// MINE
// function maxChar(str) {
//   const allChars = str.split('');
//   let charCount = {};
//   let count = 0;
//   let favChar = '';

//   for (let char of allChars) {
//     if ( charCount[char] ) {
//       charCount[char] += 1;
//     } else {
//       charCount[char] = 1;
//     }
//   }
//   console.log(charCount);

//   charCount.keys().forEach(key => {
//     if (charCount[key] > count) {
//       count = charCount[key];
//       favChar = key;
//     }
//   })
  
//   return favChar;
// }


// SG SOLUTION 1
// function maxChar(str) {
//   const chars = {};
//   let count = 0;
//   let favChar = '';

//   for (let char of str) {
//     // also: chars[char] = chars[char] + 1 || 1;
//     if ( !chars[char] ) {
//       chars[char] = 1;
//     } else {
//       chars[char]++;
//     }
//   }

//   Object.keys(chars).forEach(key => {
//     if (chars[key] > count) {
//       count = chars[key];
//       favChar = key;
//     }
//   })
  
//   return favChar;
// }

// SG SOLUTION 2
// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of str) {
//     if ( charMap[char] ) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   for (let char of charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
  
//   return maxChar;
// }