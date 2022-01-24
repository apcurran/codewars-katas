"use strict";

/**
 * 
 * @param {array} arr 
 * @param {string} direction 
 * @param {number} steps 
 */
function loopArr(arr, direction, steps) {
    if (direction === "left") {
        // Left
        const pulledOutElems = arr.splice(0, steps);

        return [...arr, ...pulledOutElems];
    } else {
        // Right
        const pulledOutElems = arr.splice(-steps, steps);

        return [...pulledOutElems, ...arr];
    }
}

// console.log(loopArr([1, 5, 87, 45, 8, 8], 'left', 2)); // [87, 45, 8, 8, 1, 5]
console.log(loopArr([1, 5, 87, 45, 8, 8], "right", 2)); // [8, 8, 1, 5, 87, 45]