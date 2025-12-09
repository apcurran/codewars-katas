"use strict";

/**
 * solution 1
 * m = total num of recipe key/val pairs
 * n = total num of available key/val pairs
 * time: O(n)
 * space: O(n)
 *
 * @param {object} recipe
 * @param {object} available
 * @returns {number}
 */
function cakes(recipe, available) {
    const availableMap = new Map(Object.entries(available));
    let cakeIngredientsAmtsArr = [];

    for (let [recipeKey, recipeVal] of Object.entries(recipe)) {
        // if key/val pair in recipe does not exist in available -> return 0 early
        if (!availableMap.has(recipeKey)) return 0;

        // then get available amt / recipe amt (store this val in arr)
        const availableAmt = availableMap.get(recipeKey);
        const ingredientAmt = Math.trunc(availableAmt / recipeVal);
        cakeIngredientsAmtsArr.push(ingredientAmt);
    }
    // return lowest amt as total num of cakes that can be made
    return Math.min(...cakeIngredientsAmtsArr);
}

console.log(
    cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }),
); // 2
console.log(
    cakes(
        { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
        { sugar: 500, flour: 2000, milk: 2000 },
    ),
); // 0
