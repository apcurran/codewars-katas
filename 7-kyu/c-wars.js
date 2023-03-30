"use strict";

/**
 * solution 1
 * time: O(n + m)
 * space: O(n + m)
 * 
 * @param {string} str 
 * @returns {string}
 */
function initials(str){
    const words = str.split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const uppercaseInitial = word[0].toUpperCase();

        if (i === words.length - 1) {
            // last elem
            const fullword = uppercaseInitial + word.slice(1);
            result.push(fullword);

            break;
        }

        result.push(uppercaseInitial);
    }

    return result.join(".");
}

console.log( initials("code wars") ); // "C.Wars"
console.log( initials("Barack Hussain obama") ); // "B.H.Obama"
