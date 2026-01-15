// /**
//  * solution 1 -- correct, but TLE
//  * time: O(n^2)
//  * space: O(n)
//  *
//  * @param {string} string
//  * @param {string[]} transformations
//  * @returns {string}
//  */
// function stringTransformation(string, transformations) {
//     let result = string;
//     // iterate transformations str array
//     for (let transformation of transformations) {
//         // for each op, apply to current string
//         if (transformation === "U") {
//             result = result.toUpperCase();
//         } else if (transformation === "L") {
//             result = result.toLowerCase();
//         } else if (transformation === "R") {
//             result = strReverse(result);
//         } else if (transformation === "D") {
//             result = strDuplicate(result);
//         } else {
//             throw new Error("Somthing went terribly wrong.");
//         }
//     }
//     // return result after all ops applied
//     return result;
// }

// /**
//  * @param {string} str
//  * @returns {string}
//  */
// function strReverse(str) {
//     let reversed = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }

//     return reversed;
// }

// /**
//  * @param {string} str
//  * @returns {string}
//  */
// function strDuplicate(str) {
//     let duplicated = "";

//     for (let char of str) {
//         duplicated += char + char;
//     }

//     return duplicated;
// }

/**
 * solution 2 -- optimized
 * time: O(n)
 * space: O(n)
 *
 * @param {string} string
 * @param {string[]} transformations
 * @returns {string}
 */
function stringTransformation(string, transformations) {
    let makeUpper = false;
    let makeLower = false;
    let doReverse = false;
    let duplicateCount = 1;

    for (let transformation of transformations) {
        if (transformation === "U") {
            makeUpper = true;
            makeLower = false;
        } else if (transformation === "L") {
            makeLower = true;
            makeUpper = false;
        } else if (transformation === "R") {
            doReverse = !doReverse;
        } else if (transformation === "D") {
            duplicateCount *= 2;
        } else {
            throw new Error("Somthing went terribly wrong.");
        }
    }

    let result = string;

    if (makeUpper) {
        result = result.toUpperCase();
    }

    if (makeLower) {
        result = result.toLowerCase();
    }

    if (doReverse) {
        result = result.split("").reverse().join("");
    }

    if (duplicateCount > 1) {
        let arr = [];

        for (let char of result) {
            const totalChar = char.repeat(duplicateCount);
            arr.push(totalChar);
        }

        return arr.join("");
    }

    return result;
}

console.log(stringTransformation("abcd", ["U", "R"])); // "DCBA"
// "abcd" → "ABCD" → "DCBA"
console.log(stringTransformation("abc", ["D", "L"])); // "aabbcc"
// "abc" → "aabbcc" → "aabbcc" (lowercase already applied)
console.log(stringTransformation("AbCd", ["L", "R"])); // "dcba"
// "AbCd" → "abcd" → "dcba"
