"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} a
 * @returns {number}
 */
function lamps(a) {
    let offSwitchCount = 0;
    let onSwitchCount = 0;

    for (let i = 0; i < a.length; i++) {
        const currentSwitch = a[i];
        const expectedOffSwitch = i % 2;

        if (currentSwitch !== expectedOffSwitch) {
            offSwitchCount++;
        } else {
            onSwitchCount++;
        }
    }

    return Math.min(offSwitchCount, onSwitchCount);
}

console.log(lamps([1, 0, 0, 1, 1, 1, 0])); // 3
