/**
 * solution 1 -- charCode mapping
 * time: O(n)
 * space: O(1)
 *
 * @param {string} title
 * @returns {number}
 */
function titleToNumber(title) {
    let currentTotal = 0;

    for (let char of title) {
        const calc = currentTotal * 26;
        const charValue = char.charCodeAt(0) - "A".charCodeAt(0) + 1;
        const charTotal = calc + charValue;
        currentTotal = charTotal;
    }

    return currentTotal;
}

console.log(titleToNumber("CODE")); // 62_977
