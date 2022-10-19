"use strict";

/**
 * solution 1 -- map cache
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} s1 
 * @param {string} s2 
 * @returns {boolean}
 */
function merryChristmas(s1, s2) {
    const xmasStr = "Merry Christmas!";
    let christmasStrMap = new Map();

    for (let char of xmasStr) {
        const prevFreq = christmasStrMap.get(char) || 0;
        christmasStrMap.set(char, prevFreq + 1);
    }

    let s1Map = new Map();
    
    for (let char of s1) {
        const prevFreq = s1Map.get(char) || 0;
        s1Map.set(char, prevFreq + 1);
    }

    for (let char of s2) {
        if (s1Map.has(char)) {
            const letterFreq = s1Map.get(char);
            const updatedFreq = letterFreq - 1;
            
            if (updatedFreq === 0) {
                // remove from map
                s1Map.delete(char);
            } else {
                // decrement by one
                s1Map.set(char, updatedFreq);
            }
        } else {
            // add to map
            s1Map.set(char, 1);
        }
    }

    // iterate s1 str and check if same as x-mas str
    for (let [char, freq] of s1Map) {
        if (!christmasStrMap.has(char)) return false;

        const xmasStrCharFreq = christmasStrMap.get(char);

        if (xmasStrCharFreq !== freq) return false;
    }

    return true;
}

console.log( merryChristmas("abcMerry Christmas!", "abc") ); // true
console.log( merryChristmas("abcerry hristmas!", "abcMC") ); // true
console.log( merryChristmas("abcMerry Christmas!", "bad") ); // false
