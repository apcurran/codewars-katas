"use strict";

/**
 * solution 1 -- regex match
 * time: O(n)
 * space: O(n)
 *
 * @param {string} s
 * @returns {string[]|null}
 */
function cleverSplit(s) {
    return s.match(/\[.*?\]|\S+/g);
}

console.log(cleverSplit("Buy a !car [!red green !white] [cheap or !new]"));
// ['Buy', 'a', '!car', '[!red green !white]', '[cheap or !new]']
