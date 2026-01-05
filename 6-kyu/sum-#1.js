/**
 * solution 1 -- closure
 * time: O(1)
 * space: O(1)
 *
 * @param {number} a
 * @returns {number|function} returns 0 if empty args, otherwise a recursive closure fn
 */
function sum(a) {
    // first call is empty parens
    if (a === undefined) {
        return 0;
    }

    let valuesSum = a;

    return function addNextValue(b) {
        // if empty parens follow up, return total so far
        if (b === undefined) {
            return valuesSum;
        }

        // otherwise, add the b value to total
        valuesSum += b;

        return addNextValue;
    };
}

console.log(sum(4)(5)(9)()); // 18
console.log(sum(5)()); // 5
console.log(sum()); // 0
