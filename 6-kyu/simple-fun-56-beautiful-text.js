/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string} s
 * @param {number} l
 * @param {number} r
 */
function beautifulText(s, l, r) {
    const n = s.length;

    for (let w = l; w <= r; w++) {
        if (w === n) {
            return true;
        }

        if ((n + 1) % (w + 1) !== 0) {
            continue;
        }

        let isValidWidth = true;
        let currentCutIndex = w;

        while (currentCutIndex < n) {
            if (s[currentCutIndex] !== " ") {
                isValidWidth = false;

                break;
            }

            // move to next expected newline position
            currentCutIndex = currentCutIndex + (w + 1);
        }

        if (isValidWidth) {
            return true;
        }
    }

    return false;
}

console.log(beautifulText("Look at this example of a correct text", 5, 15)); // true
console.log(beautifulText("abc def ghi", 4, 10)); // false
