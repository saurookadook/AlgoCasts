// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  if (array.length <= size) {
    return [ [ ...array ] ];
  } else {
    const chunksArr = [];
    let i = 0;

    for (let el of array) {
      if (!chunksArr[i] || chunksArr[i].length === size) {
        chunksArr.push([el])
        chunksArr[i].length === size ? i++ : i;
      } else {
        chunksArr[i].push(el);
      }
    }

    return chunksArr;
  }
}

module.exports = chunk;


// MINE
// function chunk(array, size) {
//   if (array.length <= size) {
//     return [ [ ...array ] ];
//   } else {
//     let chunksArr = [[]];
//     let i = 0;

//     array.forEach(el => {
//       if (chunksArr[i].length <= size) {
//         chunksArr[i].push(el);
//       } else {
//         i++
//         chunksArr.push([]);
//       }
//     })
//   }
// }


// SG SOLUTION 1
// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       chunked.push(element);
//     }
//   }

//   return chunked;
// }

// SG SOLUTION 2
// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;

//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size))
//     index += size;
//   }

//   return chunked;
// }