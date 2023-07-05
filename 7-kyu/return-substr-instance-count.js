"use strict";

/**
 * solution 1
 * n = fullText length
 * m = seachText length
 * time: O(n * m)
 * space: O(m)
 * 
 * @param {string} fullText 
 * @param {string} searchText 
 * @returns {number}
 */
function solution(fullText, searchText){
    let substrInstanceCount = 0;

    for (let i = 0; i < fullText.length; i++) {
        const substr = fullText.slice(i, i + searchText.length);

        if (substr === searchText) substrInstanceCount++;
    }

    return substrInstanceCount;
}

console.log( solution("aa_bb_cc_dd_bb_e", "bb") ); // 2
console.log( solution("aaabbbcccc", "bbb") ); // 1
