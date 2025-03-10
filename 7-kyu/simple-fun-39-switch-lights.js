"use strict";

/**
 * solution 1 -- nested loops
 * time: O(n^2)
 * space: O(1)
 * 
 * @param {number[]} lights 
 * @returns {number[]}
 */
function switchLights(lights) {
    for (let i = 0; i < lights.length; i++) {
        if (lights[i] === 0) continue;
        // for the current light -- if lit (1), then check all prior light statuses
        for (let j = 0; j <= i; j++) {
            // flip status
            lights[j] === 1 ? lights[j] = 0 : lights[j] = 1;
        }
    }

    return lights;
}

console.log(switchLights([1, 1, 1, 1, 1])); // [0, 1, 0, 1, 0]
