/**
 * solution 1 -- non-regex
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {number} - middle digit(s) in the product of each digit in the string otherwise, -1
 */
function findMiddle(str) {
    if (typeof str !== "string") {
        return -1;
    }

    const ALL_DIGITS = "0123456789";
    let foundDigits = [];

    for (let char of str) {
        if (ALL_DIGITS.includes(char)) {
            foundDigits.push(Number(char));
        }
    }

    if (foundDigits.length === 0) {
        return -1;
    }

    let digitsProduct = 1;

    for (let digit of foundDigits) {
        digitsProduct *= digit;
    }

    const digitsProductStr = String(digitsProduct);

    if (digitsProductStr.length % 2 === 1) {
        // if odd length, return middle digit
        const middleIndex = Math.floor(digitsProductStr.length / 2);
        const middle = Number(digitsProductStr[middleIndex]);

        return middle;
    } else {
        // even length, return middle two digits
        const indexEnd = Math.floor(digitsProductStr.length / 2);
        const middleTwoDigits = Number(digitsProductStr.slice(indexEnd - 1, indexEnd + 1));

        return middleTwoDigits;
    }
}

console.log(findMiddle("s7d8jd9")); // 7 * 8 * 9 -> 504 -> 0
console.log(findMiddle("8888")); // 4096 -> 9
console.log(findMiddle("abc")); // -1
