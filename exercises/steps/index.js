// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === status.length) {
    console.log(stair);
    steps(n, row + 1);
  }

  // if (stair.length <= row) {
  //   stair += '#';
  // } else {
  //   stair += ' ';
  // }
  // refactor:
  const add = stair.length <= row ? '#' : ' ';

  steps(n, row, stair + add);
}

module.exports = steps;


// MINE
// function steps(n) {
//   i = 1;
//   let poundStr = '';

//   while (i <= n) {
//     poundStr = poundStr.trimEnd() + '#';
//     if (i !== n) {
//       poundStr = poundStr.padEnd(n);
//     }
//     console.log(poundStr);
//     i++;
//   }
// }


// SG SOLUTION 1
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
//   }
// }

// SG SOLUTION 2 (recursive)