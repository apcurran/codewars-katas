/**
 * solution 1
 * time: O(n * m)
 * space: O(n)
 *
 * @param {string} str (comma-separated)
 * @returns {string}
 */
function checkRoot(str) {
    const values = str.split(",");

    if (values.length !== 4) {
        return "incorrect input";
    }

    const DIGITS = /^[0-9]+$/;
    const isInvalid = values.some((val) => !DIGITS.test(val) || val === "0");

    if (isInvalid) {
        return "incorrect input";
    }

    let prevNum = Number(values[0]) - 1;
    let product = 1;

    for (let numStr of values) {
        const num = Number(numStr);
        const expectedNum = prevNum + 1;

        if (num !== expectedNum) {
            return "not consecutive";
        }

        product *= num;
        prevNum = num;
    }

    const perfectNum = product + 1;
    const root = Math.sqrt(perfectNum);

    return `${perfectNum}, ${root}`;
}

console.log(checkRoot("4,5,6,7")); // "841, 29"
console.log(checkRoot("3,s,5,6")); // "incorrect input"
console.log(checkRoot("11,13,14,15")); // "not consecutive"
console.log(checkRoot("99,99,100,101")); // "not consecutive"
console.log(checkRoot("0,1,2,3")); // "incorrect input"
