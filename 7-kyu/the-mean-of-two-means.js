// /**
//  * solution 1
//  * time: O(x + y)
//  * space: O(x + y)
//  *
//  * @param {number[]} arr
//  * @param {number} x
//  * @param {number} y
//  * @returns {number}
//  */
// function getMean(arr, x, y) {
//     if (x <= 1 || y <= 1 || x > arr.length || y > arr.length) {
//         return -1;
//     }

//     // mean of first x elements
//     const xMean = arr.slice(0, x).reduce(sum, 0) / x;
//     // mean of last y elements
//     const yMean = arr.slice(-y).reduce(sum, 0) / y;
//     //  mean of both prior means
//     return (xMean + yMean) / 2;
// }

// /**
//  * @param {number} prev
//  * @param {number} curr
//  * @returns {number}
//  */
// function sum(prev, curr) {
//     return prev + curr;
// }

/**
 * solution 2 -- optimized memory usage
 * time: O(x + y)
 * space: O(1)
 *
 * @param {number[]} arr
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
function getMean(arr, x, y) {
    if (x <= 1 || y <= 1 || x > arr.length || y > arr.length) {
        return -1;
    }

    // mean of first x elements
    const xMean = sum(arr, 0, x) / x;
    // mean of last y elements
    const yMean = sum(arr, arr.length - y, arr.length) / y;
    //  mean of both prior means
    return (xMean + yMean) / 2;
}

/**
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 */
function sum(arr, start, end) {
    let total = 0;

    for (let i = start; i < end; i++) {
        total += arr[i];
    }

    return total;
}

console.log(getMean([1, 3, 2, 4], 2, 3)); // 2.5
console.log(getMean([1, 3, 2, 4], 1, 2)); // -1
console.log(getMean([1, 3, 2, 4], 2, 8)); // -1
