/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} distance
 * @param {number} speed
 * @returns {string}
 */
function reachDestination(distance, speed) {
    const timeRoundedToHalfHour = Math.round((distance / speed) * 2) / 2;

    return `The train will be there in ${timeRoundedToHalfHour} hour${timeRoundedToHalfHour === 1 ? "" : "s"}.`;
}

console.log(reachDestination(5, 10)); // 'The train will be there in 0.5 hours.'
console.log(reachDestination(80, 20)); // 'The train will be there in 4 hours.'
console.log(reachDestination(80, 80)); // 'The train will be there in 1 hour.'
