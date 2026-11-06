/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @returns {string}
 */
function debug(s) {
    // remove "bug" from str unless plural "bugs"
    return s.replace(/bug(?!s)/gi, "");
}

console.log(debug("obugobugobuoobugsoo")); // "ooobuoobugsoo"
console.log(debug("obbugugo")); // "obugo"
console.log(debug("bugs bunny")); // "bugs bunny"
console.log(debug("bugs buggy")); // "bugs gy"
