// /**
//  * solution 1
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {number[]} arr
//  * @returns {number} index of replacement 0
//  */
// function replaceZero(arr) {
//     let largestSum = 0;
//     let replacementIndex = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let leftOnesCount = 0;

//         for (let left = i - 1; left >= 0; left--) {
//             if (arr[left] === 1) {
//                 leftOnesCount++;
//             } else {
//                 // reset ones count if broken by a 0
//                 break;
//             }
//         }

//         let rightOnesCount = 0;

//         for (let right = i + 1; right < arr.length; right++) {
//             if (arr[right] === 1) {
//                 rightOnesCount++;
//             } else {
//                 break;
//             }
//         }

//         const currentOnesTotal = leftOnesCount + rightOnesCount;

//         if (currentOnesTotal >= largestSum) {
//             largestSum = currentOnesTotal;
//             // update index
//             replacementIndex = i;
//         }
//     }

//     return replacementIndex;
// }

/**
 * solution 2 -- sliding window
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} arr
 * @returns {number} index of replacement 0
 */
function replaceZero(arr) {
    let left = 0;
    let zeroIndex = -1;
    let bestIndex = -1;
    let maxLength = 0;

    for (let right = 0; right < arr.length; right++) {
        if (arr[right] === 0) {
            // move left pointer past the prev zero
            left = zeroIndex + 1;
            zeroIndex = right;
        }

        const windowLength = right - left + 1;

        // >= updates the latest index in tie cases
        if (windowLength >= maxLength) {
            maxLength = windowLength;
            bestIndex = zeroIndex;
        }
    }

    return bestIndex;
}

console.log(
    replaceZero([1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1]),
); // 10
