// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;


// MINE
// function pyramid(n) {
//   let i = 1;
//   let pyramidStr = '#';
//   let pyramidBase = n * 2 - 1;

//   while (i <= n) {
//     if (i !== 1) {
//       pyramidStr = pyramidStr.trim() + "##";
//     }

//     if (pyramidStr.length !== pyramidBase) {
//       pyramidStr = pyramidStr.padStart(Math.floor(pyramidBase/2) + i).padEnd(pyramidBase);
//     }
//     console.log(pyramidStr);
//     i++;
//   }
// }

// MINE (recursive)
// function pyramid(n, i = 1, pyrStr = '#', pyrBase = (n * 2 - 1)) {
//   if (i > n) {
//     return;
//   } else if (i !== 1) {
//     pyrStr = pyrStr.trim() + '##';
//   }

//   if (pyrStr.length !== pyrBase) {
//     pyrStr = pyrStr.padStart(Math.floor(pyrBase/2) + i).padEnd(pyrBase);
//   }
//   console.log(pyrStr);
//   i++;
//   pyramid(n, i, pyrStr);
// }


// SG SOLUTION 1 (iterative)
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);

//   for (let row = 0; row < n; row++) {
//     let level = '';

//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }

//     console.log(level);
//   }
// }

// SG SOLUTION 2 (recursive)
// function pyramid(n, row = 0, level = '') {
//   if (row === n) {
//     return;
//   }

//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   const midpoint = Math.floor((2 * n - 1) / 2);
//   let add;
//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = '#';
//   } else {
//     add = ' ';
//   }
//   pyramid(n, row, level + add);
// }