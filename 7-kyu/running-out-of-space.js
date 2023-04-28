"use strict";

/**
 * solution 1
 * n = words length
 * m = chunk length
 * time: O(n^2)
 * space: O(n + m)
 * 
 * @param {string[]} words 
 * @returns {string[]}
 */
function spacey(words){
    let results = [];

    for (let i = 0; i < words.length; i++) {
        let chunks = [];

        for (let j = 0; j < i + 1; j++) {
            const currentWord = words[j];
            chunks.push(currentWord);
        }

        const chunkNoSpace = chunks.join("");
        results.push(chunkNoSpace);
    }

    return results;
}

console.log( spacey(["i", "have","no","space"]) ); // ['i','ihave','ihaveno','ihavenospace']
