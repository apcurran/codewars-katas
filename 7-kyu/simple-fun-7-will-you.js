/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {boolean} young
 * @param {boolean} beautiful
 * @param {boolean} loved
 * @returns {boolean}
 */
function willYou(young, beautiful, loved) {
    if (young && beautiful && !loved) {
        return true;
    }

    if (loved && (!young || !beautiful)) {
        return true;
    }

    return false;
}

console.log(willYou(true, true, true)); // false
console.log(willYou(true, false, true)); // true
console.log(willYou(true, true, true)); // false
