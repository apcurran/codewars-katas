/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} [str] -- optional string
 * @returns {string}
 */
function ho(str) {
    if (str) {
        return `Ho ${str}`;
    }

    return "Ho!";
}

console.log(ho()); // should return "Ho!"
console.log(ho(ho())); // should return "Ho Ho!"
console.log(ho(ho(ho()))); // should return "Ho Ho Ho!"
