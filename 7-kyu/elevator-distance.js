"use strict";

function elevatorDistance(arr) {
    let distance = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        const val = Math.abs(arr[i] - arr[i + 1]);
        distance += val;
    }

    return distance;
}

console.log( elevatorDistance([5, 2, 8]) ); // 9
console.log( elevatorDistance([1, 2, 3]) ); // 2
console.log( elevatorDistance([7, 1, 7, 1]) ); // 18
