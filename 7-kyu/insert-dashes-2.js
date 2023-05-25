"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} num 
 * @returns {string}
 */
function insertDashII(num) {
    const strNum = String(num);
    let results = [];

    for (let i = 0; i < strNum.length; i++) {
        const currentNumStr = strNum[i];
        const nextNumStr = strNum[i + 1];

        if (nextNumStr === undefined) {
            results.push(currentNumStr);

            break;
        }

        if (currentNumStr === "0" || nextNumStr === "0") {
            results.push(currentNumStr);

            continue;
        }

        if (Number(currentNumStr) % 2 === 0 &&
            Number(nextNumStr) % 2 === 0) {
            // adjacent even nums have "*" between them
            results.push(currentNumStr, "*");

            continue;
        }

        if (Number(currentNumStr) % 2 !== 0 &&
            Number(nextNumStr) % 2 !== 0) {
            // adjacent odd nums have "-" between them
            results.push(currentNumStr, "-");

            continue;
        }

        results.push(currentNumStr);
    }

    return results.join("");
}

console.log( insertDashII(454793) ); // 4547-9-3
console.log( insertDashII(1012356895) ); // 10123-56*89-5
