"use strict";

// /**
//  * solution 1
//  * time: O(n)
//  * space: O(1)
//  * 
//  * @param {string} str 
//  * @returns {boolean}
//  */
// function password(str) {
//     if (str.length < 8) {
//         return false;
//     }

//     let hasUppercaseLetter = false;
//     let hasLowercaseLetter = false;
//     let hasNumber = false;

//     for (let char of str) {
//         const charCode = char.charCodeAt(0);

//         if (charCode >= "A".charCodeAt(0) && charCode <= "Z".charCodeAt(0)) {
//             hasUppercaseLetter = true;
//         }

//         if (charCode >= "a".charCodeAt(0) && charCode <= "z".charCodeAt(0)) {
//             hasLowercaseLetter = true;
//         }

//         if (charCode >= "0".charCodeAt(0) && charCode <= "9".charCodeAt(0)) {
//             hasNumber = true;
//         }

//         if (hasUppercaseLetter && hasLowercaseLetter && hasNumber) {
//             // early return
//             return true;
//         }
//     }

//     return false;
// }

/**
 * solution 2 -- regex
 * time: O(n)
 * space: O(1)
 * 
 * @param {string} str 
 * @returns {boolean}
 */
function password(str) {
    if (str.length < 8) {
        return false;
    }
    
    if (!/[A-Z]/.test(str)) return false;
    
    if (!/[a-z]/.test(str)) return false;

    if (!/[0-9]/.test(str)) return false;

    // all passed validation
    return true;
}

console.log(password("Abcd1234")); // true
console.log(password("Abcd123")); // false
