"use strict";

/**
 * solution 1
 * n = freelancersTime array length
 * time: O(n)
 * space: O(1)
 *
 * @param {number} projectMinutes
 * @param {number[][]} freelancersTime
 * @returns {string}
 */
function workNeeded(projectMinutes, freelancersTime) {
    let totalTimeLeft = projectMinutes;

    for (let [freelancerHours, freelancerMinutes] of freelancersTime) {
        const totalFreelancerTimeInMinutes =
            freelancerHours * 60 + freelancerMinutes;
        totalTimeLeft -= totalFreelancerTimeInMinutes;

        if (totalTimeLeft <= 0) {
            break;
        }
    }

    if (totalTimeLeft <= 0) {
        return "Easy Money!";
    } else {
        const [hours, minutes] = convertMinutesToHoursAndMinutes(totalTimeLeft);

        return `I need to work ${hours} hour(s) and ${minutes} minute(s)`;
    }
}

console.log(workNeeded(60, [[1, 0]])); // "Easy Money!"
console.log(workNeeded(60, [[0, 0]])); // "I need to work 1 hour(s) and 0 minute(s)"

/**
 * @param {number} timeInMinutes
 * @returns {[number, number]} [hours, minutes]
 */
function convertMinutesToHoursAndMinutes(timeInMinutes) {
    const MINUTES_IN_HOUR = 60;
    const hours = Math.floor(timeInMinutes / MINUTES_IN_HOUR);
    const minutes = timeInMinutes % MINUTES_IN_HOUR;

    return [hours, minutes];
}
