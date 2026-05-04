/**
 * solution 1 -- with bool flag
 * n = arr length
 * m = sumOfPositiveNums and negativeNumsCount str length
 * time: O(n + m)
 * space: O(m)
 *
 * @param {number[]} arr
 * @returns {string} - "sumOfPositiveNums negativeNumsCount"
 */
function sumLength(arr) {
    let positiveNumsSum = 0;
    let negativeNumsCount = 0;
    let isNegativeFlag = true;

    for (let num of arr) {
        if (num > 0) {
            positiveNumsSum += num;
        } else if (num === 0) {
            if (isNegativeFlag) {
                negativeNumsCount++;
            }
            // flip flag
            isNegativeFlag = !isNegativeFlag;
        } else {
            // negative num
            negativeNumsCount++;
        }
    }

    return `${positiveNumsSum} ${negativeNumsCount}`;
}

console.log(sumLength([-1, 2, 3, 4, 0, 1, 0, -2, 0, -3])); // "10 5"
