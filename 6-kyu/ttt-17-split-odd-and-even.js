/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} n
 * @returns {number[]}
 */
function splitOddAndEven(n) {
    const strNum = String(n);
    let currentVal = strNum[0]; // initialize to first digit
    let results = [];

    for (let i = 1; i < strNum.length; i++) {
        const prevDigit = Number(strNum[i - 1]);
        const currentDigit = Number(strNum[i]);

        // same parity (more back-to-back even or odd digits)
        if (prevDigit % 2 === currentDigit % 2) {
            // continue to "build out" the number, adding str digits
            currentVal += strNum[i];
        } else {
            // parity changed, add currentVal to results
            results.push(Number(currentVal));
            // reset currentVal
            currentVal = strNum[i];
        }
    }

    // add last val to results after loop finishes
    results.push(Number(currentVal));

    return results;
}

console.log(splitOddAndEven(123)); // [1, 2, 3]
console.log(splitOddAndEven(223)); // [22, 3]
console.log(splitOddAndEven(111)); // [111]
console.log(splitOddAndEven(13579)); // [13579]
console.log(splitOddAndEven(135246)); // [135, 246]
console.log(splitOddAndEven(123456)); // [1, 2, 3, 4, 5, 6]
