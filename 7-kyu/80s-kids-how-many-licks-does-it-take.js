"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {object} env
 * @returns {string}
 */
function totalLicks(env) {
    const normalLicksTotal = 252;
    let licksSum = normalLicksTotal;
    let toughestChallengeValue = -Infinity;
    let toughestChallenge = "";

    for (let property in env) {
        const value = env[property];
        licksSum += value;

        if (value > 0 && value > toughestChallengeValue) {
            toughestChallengeValue = value;
            toughestChallenge = property;
        }
    }

    if (toughestChallenge === "") {
        return `It took ${licksSum} licks to get to the tootsie roll center of a tootsie pop.`;
    } else {
        return `It took ${licksSum} licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was ${toughestChallenge}.`;
    }
}

console.log(totalLicks({ "freezing temps": 10, "clear skies": -2 }));
// "It took 260 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was freezing temps."
console.log(totalLicks({ "happiness": -5, "clear skies": -2 }));
// "It took 245 licks to get to the tootsie roll center of a tootsie pop."
