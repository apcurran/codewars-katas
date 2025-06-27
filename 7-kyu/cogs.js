"use strict";

/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {number[]} cogs
 * @returns {number}
 */
function cogRpm(cogs) {
    const cogFirst = cogs[0];
    const cogLast = cogs[cogs.length - 1];
    // direction flips each cog in list (this means even length lists have a neg, odd length pos)
    const rotationDirectionMultiplier = cogs.length % 2 === 0 ? -1 : 1;

    return rotationDirectionMultiplier * (cogFirst / cogLast);
}

console.log(cogRpm([100, 75])); // -1.3 (repeating)
