// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  const len = arr.length

  for (i = 0; i < len; i++) {
    for (j = 0; j < (len - i -1); j++) {
      if (arr[j] > arr[j+1]) {
        let k = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = k;

        // OR
        // const lesser = arr[j+1];
        // arr[j+1] = arr[j];
        // arr[j] = lesser;
      }
    }
  }

  return arr;
}

function selectionSort(arr) {
  let indexOfMin;
  const len = arr.length;

  for (i = 0; i < len; i++) {
    indexOfMin = i;

    for (j = i+1; j < len; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin != i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
      // MINE
      // let tmp = arr[i];
      // arr[i] = arr[indexOfMin];
      // arr[indexOfMin] = tmp;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  
  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
