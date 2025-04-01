"use strict";

let fruitsName = ["apple", "pear", "banana"];

/**
 * solution 1
 * n = fruits length
 * m = fruitsName length
 * x = current fruit length
 * time: O(n * m)
 * space: O(x) -- slice copy of curr fruit (not including results array)
 * 
 * @param {string[]} fruits 
 * @returns {string[]}
 */
function cutFruits(fruits) {
    let results = [];

    for (let fruit of fruits) {
        if (!fruitsName.includes(fruit)) {
            // else, add whole string to results
            results.push(fruit);

            continue;
        }

        // if valid, cut in half
        const halfway = Math.ceil(fruit.length / 2);
        const fruitFirstHalf = fruit.slice(0, halfway);
        const fruitSecondHalf = fruit.slice(halfway);
        results.push(fruitFirstHalf, fruitSecondHalf);
    }

    return results;
}

console.log(cutFruits(["apple", "pear", "banana", "bomb"]));
// ["app", "le", "pe", "ar", "ban", "ana", "bomb"]
