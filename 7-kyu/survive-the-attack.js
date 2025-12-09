"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} attackers
 * @param {number[]} defenders
 * @returns {boolean}
 */
function hasSurvived(attackers, defenders) {
    let attackingSurvivorsCount = 0;
    let defendingSurvivorsCount = 0;

    const longestLengthList = attackers.length >= defenders.length ? attackers : defenders;
    // iterate whichever list is the longest (attackers or defenders)
    for (let i = 0; i < longestLengthList.length; i++) {
        const attacker = attackers[i];
        const defender = defenders[i];

        if (attacker > defender || defender === undefined) {
            // add attacker as a survivor
            attackingSurvivorsCount++;
        } else if (defender > attacker || attacker === undefined) {
            // add defender as a survivor
            defendingSurvivorsCount++;
        }
    }

    if (defendingSurvivorsCount === attackingSurvivorsCount) {
        // calculate total damage for each team
        const attackersTotalDamage = attackers.reduce(
            (total, currentValue) => total + currentValue,
            0,
        );
        const defendersTotalDamage = defenders.reduce(
            (total, currentValue) => total + currentValue,
            0,
        );

        return defendersTotalDamage >= attackersTotalDamage;
    }

    return defendingSurvivorsCount > attackingSurvivorsCount;
}

console.log(hasSurvived([2, 9, 9, 7], [1, 1, 3, 8])); // false
console.log(hasSurvived([1, 3, 5, 7], [2, 4, 6, 8])); // true
console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7, 7])); // true
