"use strict";

/**
 * solution 1 -- two pointers
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {boolean}
 */
function solve(str) {
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        const leftCharCode = str.charCodeAt(left);
        const rightCharCode = str.charCodeAt(right);
        const charCodesDistance = Math.abs(leftCharCode - rightCharCode);

        // the distance between the two ASCII codes must be less than or equal to 2
        // if not, each letter on both sides cannot be changed to be identical
        // when this rule is broken, the string cannot be a palindrome
        if (charCodesDistance > 2 || charCodesDistance === 1) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

console.log(solve("abba")); // true
console.log(solve("abaazaba")); // false
console.log(solve("abccba")); // true
console.log(solve("adfa")); // true
console.log(solve("ae")); // false
console.log(solve("abzy")); // false
console.log(solve("ababbaba")); // true
console.log(solve("sq")); // true
console.log(solve("kxbkwgyydkcbtjcosgikfdyhuuprubpwthgflucpyylbofvqxkkvqthmdnywpaunfihvupbwpruwfybdmgeuocltdaidyyewmbzm")); // true
