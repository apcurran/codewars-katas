"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string[]} arr 
 * @returns {string}
 */
function validName(arr) {
    if (arr.length === 0) {
        return "You must test at least one name.";
    }

    if (arr.length === 1) {
        return "Congratulations, you can choose any name you like!";
    }

    for (let i = 0; i < arr.length - 1; i++) {
        const currentNameLastLetter = arr[i].at(-1)?.toLowerCase();
        const nextNameFirstLetter = arr[i + 1][0]?.toLowerCase();

        if (currentNameLastLetter !== nextNameFirstLetter) {
            return "Back to the drawing board, your baby names are not compatible.";
        }
    }

    return "Congratulations, your baby names are compatible!";
}

console.log(validName(["Cruz", "Zuma"])); // "Congratulations, your baby names are compatible!"
console.log(validName(["Buddy Bear","Romeo", "Olive"])); // "Congratulations, your baby names are compatible!"
