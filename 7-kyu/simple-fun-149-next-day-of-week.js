"use strict";

/**
 * solution 1
 * time: O(1) -- stringify availableWeekDays will only be max 7 digits long which is constant and while loop will only iterate max 7 times to full circle
 * space: O(1)
 * 
 * @param {number} currentDay 
 * @param {number} availableWeekDays 
 * @returns {number}
 */
function nextDayOfWeek(currentDay, availableWeekDays) {
    const convertedDays = availableWeekDays.toString(2);
    let result = null;
    let i = currentDay + 1;
    
    while (result === null) {
        const day = convertedDays.at(-i);

        if (day === "1") {
            result = i;
        } else if (i > 7 || day === undefined) {
            i = 1;
        } else {
            i++;
        }
    }

    return result;
}

console.log(nextDayOfWeek(4, 42)); // 6
console.log(nextDayOfWeek(6, 42)); // 2
console.log(nextDayOfWeek(7, 42)); // 2
