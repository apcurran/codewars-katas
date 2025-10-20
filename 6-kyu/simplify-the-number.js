/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {number} number
 * @returns {string}
 */
function simplify(number) {
    let result = [];
    const strNum = String(number);

    for (let i = 0; i < strNum.length; i++) {
        const strDigit = strNum[i];
        // for current digit, check if 0 -> skip
        if (strDigit === "0") continue;
        // check if last digit -> add digit alone
        if (i === strNum.length - 1) {
            result.push(strDigit);

            break;
        }

        const powerOfTen = 10 ** (strNum.length - i - 1);
        result.push(`${strDigit}*${powerOfTen}`);
    }

    return result.join("+");
}

console.log(simplify(56)); // "5*10+6"
