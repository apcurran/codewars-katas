"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {string[]} chestItems 
 * @returns {number} total stone pickaxes that can be crafted from materials
 */
function stonePick(chestItems) {
    const COBBLESTONES_PER_PICKAXE = 3;
    const STICKS_PER_PICKAXE = 2;
    const STICKS_PER_WOOD = 4;

    let cobblestonesCount = 0;
    let sticksCount = 0;

    for (let item of chestItems) {
        if (item === "Cobblestone") {
            cobblestonesCount++;
        } else if (item === "Wood") {
            sticksCount += STICKS_PER_WOOD;
        } else if (item === "Sticks") {
            sticksCount++;
        }
    }

    const cobblestonePickaxes = Math.floor(cobblestonesCount / COBBLESTONES_PER_PICKAXE);
    const sticksPickaxes = Math.floor(sticksCount / STICKS_PER_PICKAXE);
    const totalPickaxesCraftable = Math.min(cobblestonePickaxes, sticksPickaxes);

    return totalPickaxesCraftable;
}

console.log(stonePick(["Sticks", "Sticks", "Cobblestone", "Cobblestone", "Cobblestone"]));
// 1

console.log(stonePick(["Wood", "Cobblestone", "Cobblestone", "Cobblestone"]));
// 1

console.log(stonePick(["Sticks", "Wool", "Cobblestone"]));
// 0
