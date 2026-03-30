/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @returns {string}
 */
function encode(s) {
    let result = "";
    let leftPointer = 0;
    let rightPointer = s.length - 1;

    while (leftPointer <= rightPointer) {
        const letterA = s[leftPointer];
        const letterB = s[rightPointer];

        if (leftPointer === rightPointer) {
            result += letterA;

            break;
        }

        result += letterA + letterB;

        // move pointers
        leftPointer++;
        rightPointer--;
    }

    return result;
}

console.log(encode("codewars")); // "csordaew"
console.log(encode("white")); // "wehti"

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @returns {string}
 */
function decode(s) {
    // first letter is start of original word
    let front = [];
    // next letter is last letter of original word
    let back = [];

    for (let i = 0; i < s.length; i += 2) {
        const frontLetter = s[i];
        front.push(frontLetter);

        if (s[i + 1]) {
            const backLetter = s[i + 1];
            back.push(backLetter);
        }
    }

    return [...front, ...back.reverse()].join("");
}

console.log(decode("wehti")); // "white"
