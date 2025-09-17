/**
 * solution 1
 * time: O(n * log m)
 * space: O(1)
 *
 * @param {number} l
 * @param {number} d
 * @param {number} x
 * @returns {[number, number]} [min, max]
 */
function minAndMax(l, d, x) {
    let min = Infinity;
    let max = -Infinity;

    for (let i = l; i <= d; i++) {
        const digitsSum = sumDigits(i);

        if (digitsSum === x) {
            if (i < min) {
                min = i;
            }

            if (i > max) {
                max = i;
            }
        }
    }

    return [min, max];
}

console.log(minAndMax(100, 200, 10)); // [109, 190]

/**
 * @param {number} num
 * @returns {number}
 */
function sumDigits(num) {
    num = Math.abs(num);
    let sum = 0;

    while (num > 0) {
        sum += num % 10; // add digit
        num = Math.floor(num / 10); // remove last digit
    }

    return sum;
}
