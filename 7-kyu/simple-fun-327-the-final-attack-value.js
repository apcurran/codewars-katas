"use strict";

/**
 * solution 1
 * n = monsterList size
 * a = playerAttackValue
 * b = monsterDefenseValue
 * time: O(n * log(min(a, b)))
 * space: O(1) -- no extra data structures or recursive calls used
 *
 * @param {number} playerAttackValue
 * @param {number[]} monsterList
 * @returns {number}
 */
function finalAttackValue(playerAttackValue, monsterList) {
    for (let monsterDefenseValue of monsterList) {
        if (monsterDefenseValue <= playerAttackValue) {
            playerAttackValue += monsterDefenseValue;
        } else {
            playerAttackValue += getGCD(playerAttackValue, monsterDefenseValue);
        }
    }

    return playerAttackValue;
}

console.log(finalAttackValue(50, [50, 105, 200])); // 110

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getGCD(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}
