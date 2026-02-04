/**
 * solution 1
 * time: O(n^2)
 * space: O(n) val variable building
 *
 * @param {string} s
 * @returns {number}
 */
function solve(s) {
    let counter = 0;

    for (let i = 0; i < s.length; i++) {
        let val = "";

        for (let j = i; j < s.length; j++) {
            val += s[j];

            if (BigInt(val) % 2n === 1n) {
                // odd val, increment counter -- use BigInt for large possible values
                counter++;
            }
        }
    }

    return counter;
}

console.log(solve("1341")); // 7
console.log(solve("1357")); // 10
console.log(solve("13471")); // 12
console.log(solve("134721")); // 13
console.log(solve("1347231")); // 20
console.log(solve("13472315")); // 28
