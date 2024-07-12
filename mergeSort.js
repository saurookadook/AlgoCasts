const mergeSort = (arr) => {
    if (arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

const merge = (left, right) => {
    const results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [ ...results, ...left, ...right ];
}



/**
 * with logging
 */
const runWithLogging = (unsortedArr) => {

    const mergeSort = (arr) => {
        console.log('++++++++++++++++++++++++++++++++++++++++++++++ mergeSort ++++++++++++++++++++++++++++++++++++++++++++++ ');
        console.log('arr: ', arr);
        if (arr.length === 1) {
            console.log('mergeSort: return single val', arr);
            return arr;
        }

        const center = Math.floor(arr.length / 2);
        const left = arr.slice(0, center);
        const right = arr.slice(center);

        console.log('---------------------------------------------- mergeSort: before merge ---------------------------------------------- ');
        console.log('left: ', left);
        console.log('right: ', right);
        return merge(mergeSort(left), mergeSort(right));
    }

    const merge = (left, right) => {
        console.log('---------------------------------------------- merge ---------------------------------------------- ');
        console.log('left: ', left);
        console.log('right: ', right);
        const results = [];

        while (left.length && right.length) {
            console.log('---------------------------------------------- merge: inside while ---------------------------------------------- ');
            if (left[0] < right[0]) {
                console.log('---------------------------------------------- merge: left shift ---------------------------------------------- ');
                console.log('results: ', results);
                console.log('left: ', left[0]);
                results.push(left.shift());
            } else {
                console.log('---------------------------------------------- merge: right shift ---------------------------------------------- ');
                console.log('results: ', results);
                console.log('right: ', right[0]);
                results.push(right.shift());
            }
        }

        console.log('---------------------------------------------- merge: before spread ---------------------------------------------- ');
        console.log('results: ', results);
        console.log('left: ', left);
        console.log('right: ', right);
        return [ ...results, ...left, ...right ];
    }

    return mergeSort(unsortedArr);
};


runWithLogging([3, 6, 4, 1, 9, 10, 11, 100, 39, 31, 40, 687, 78, 40, 101]);
