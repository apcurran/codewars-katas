/**
 * solution 1
 * time: O(n * sqrt(m))
 * space: O(x)
 *
 * @param {*} a
 * @param {*} a
 * @returns {string} segment of prime sequence
 */
function solve(a, b) {
    let sequence = "";
    // start at first prime num
    let currentNum = 2;

    // continue until the end is reached
    while (sequence.length < a + b) {
        if (isPrime(currentNum)) {
            sequence += currentNum;
        }
        // always incr num to continue to next possible prime
        currentNum++;
    }

    return sequence.slice(a, a + b);
}

console.log(solve(2, 2)); // "57"
console.log(solve(10, 3)); // "192"

/**
 * @param {number} val
 * @returns {boolean}
 */
function isPrime(val) {
    if (val < 2) {
        return false;
    }

    // only even prime that exists
    if (val === 2) {
        return true;
    }

    // exclude all other even nums
    if (val % 2 === 0) {
        return false;
    }

    // check each num up until val sqrt to determine if any are divisible evenly
    for (let i = 3; i <= Math.sqrt(val); i += 2) {
        if (val % i === 0) {
            return false;
        }
    }

    return true;
}
