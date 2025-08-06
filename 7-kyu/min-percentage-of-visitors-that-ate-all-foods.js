"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} foodsPercentages
 * @returns {number}
 */
function minimumPercentage(foodsPercentages) {
    const foodsPercentagesTotal = foodsPercentages.reduce((sum, curr) => {
        return sum + curr;
    }, 0);
    const maxOver = foodsPercentagesTotal - 100 * (foodsPercentages.length - 1);

    return Math.max(0, maxOver);
}

console.log(minimumPercentage([76])); // 76.0
console.log(minimumPercentage([50, 100])); // 50.0
console.log(minimumPercentage([50, 50])); // 0.0
console.log(minimumPercentage([100, 100, 100])); // 100.0
console.log(minimumPercentage([65, 80, 80, 90])); // 15.0
