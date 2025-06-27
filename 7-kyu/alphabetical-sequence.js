"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function alphaSeq(str) {
    let alphabeticalStrList = str
        .toLowerCase()
        .split("")
        .sort();
    let result = [];

    for (let char of alphabeticalStrList) {
        const charN = char.charCodeAt(0) - 96;
        const uppercaseChar = char.toUpperCase();
        const repeatingLowercaseCharChunk = char.repeat(charN - 1);
        const completeChunk = uppercaseChar + repeatingLowercaseCharChunk;
        result.push(completeChunk);
    }

    return result.join(",");
}

console.log(alphaSeq("ZpglnRxqenU"));
// "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"
