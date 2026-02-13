/**
 * solution 1 -- brute force
 * time: O(2^n)
 * space: O(n)
 *
 * @param {string[]} dictionary
 * @param {string} targetWord
 * @returns {boolean}
 */
function validWord(dictionary, targetWord) {
    /**
     * @param {string} remaining
     * @returns {boolean}
     */
    function helper(remaining) {
        if (remaining === "") {
            return true;
        }

        for (let word of dictionary) {
            if (remaining.startsWith(word)) {
                // remove matched word and call cursive fn
                const partial = remaining.slice(word.length);

                if (helper(partial)) {
                    return true;
                }
            }
        }

        return false;
    }

    return helper(targetWord);
}

console.log(validWord(["code", "wars"], "codewars")); // true
console.log(validWord(["code", "wars"], "codewar")); // false
