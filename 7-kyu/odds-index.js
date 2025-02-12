"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {any[]} arr 
 * @returns {boolean}
 */
function oddBall(arr) {
    const oddWordIndex = arr.indexOf("odd");

    for (let elem of arr) {
        if (typeof elem === "number" && elem === oddWordIndex) {
            return true;
        }
    }

    return false;
}

console.log(oddBall(["even",4,"even",7,"even",55,"even",6,"even",10,"odd",3,"even"])); // true
console.log(oddBall(["even",4,"even",7,"even",55,"even",6,"even",9,"odd",3,"even"])); // false
console.log(oddBall(["even",10,"odd",2,"even"])); // true
