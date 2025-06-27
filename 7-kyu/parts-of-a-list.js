"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n^2)
 * 
 * @param {string[]} arr 
 * @returns {string[][]}
 */
function partlist(arr) {
    let resArr = [];

    for (let i = 1; i < arr.length; i++) {
        const firstPartArr = arr
            .slice(0, i)
            .join(" ");
        
        const secondPartArr = arr
            .slice(i)
            .join(" ");
        const newArr = [firstPartArr, secondPartArr];
        resArr.push(newArr);
    }

    return resArr;
}

console.log( partlist(["az", "toto", "picaro", "zone", "kiwi"]) );
// [
//     ["az", "toto picaro zone kiwi"],
//     ["az toto", "picaro zone kiwi"],
//     ["az toto picaro", "zone kiwi"],
//     ["az toto picaro zone", "kiwi"]
// ]
