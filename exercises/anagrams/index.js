// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const buildLetterCountMap = string => {
  return string.match(/([A-Z])/gi).reduce((obj, char) => {
    // alternatively:
    // obj[char] = obj[char] + 1 || 1;
    // return obj
    if (obj[char]) {
      obj[char] += 1;
    } else if (char !== " ") {
      obj[char] = 1;
    }

    return obj;
  }, {});
}

function anagrams(stringA, stringB) {
  let judgement = false; // lol

  if (stringA.length === stringB.length) {
    let lettersOne = stringA.length >= stringB.length ? buildLetterCountMap(stringA) : buildLetterCountMap(stringB);
    let lettersTwo = stringA.length <= stringB.length ? buildLetterCountMap(stringB) : buildLetterCountMap(stringA);

    Object.keys(lettersOne).forEach(key => {
      judgement = lettersOne[key] === lettersTwo[key];
    });
  }

  return judgement;
}

module.exports = anagrams;


// MINE
// const simplifyLetters = string => {
//   return string.toLowerCase().match(/([A-Z])/gi).reduce((obj, char) => {
//     // alternatively:
//     // obj[char] = obj[char] + 1 || 1;
//     // return obj
//     if (obj[char]) {
//       obj[char] += 1;
//       return obj;
//     } else if (char !== " ") {
//       obj[char] = 1;
//       return obj;
//     }
//   }, {});
// }

// function anagrams(stringA, stringB) {
//   let judgement = false; // lol

//   if (stringA.length === stringB.length) {
//     let lettersOne = stringA.length >= stringB.length ? simplifyLetters(stringA) : simplifyLetters(stringB);
//     let lettersTwo = stringA.length <= stringB.length ? simplifyLetters(stringB) : simplifyLetters(stringA);

//     Object.keys(lettersOne).forEach(key => {
//       judgement = lettersOne[key] === lettersTwo[key];
//     });
//   }

//   return judgement;
// }


// SG SOLUTION 1
// const buildCharMap = str => {
//   const charMap = {}

//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   return charMap;
// }

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);

//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }

//   for (let char of aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }

//   return true;
// }

// SG SOLUTION 2
const cleanString = str => {
  return str.replace(/[^\w]/g, '').split('').sort().join('');
}

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}
