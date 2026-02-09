/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} apples
 * @returns {number}
 */
function minSteps(apples) {
    const target = apples.reduce((sum, curr) => sum + curr, 0) / apples.length;
    const isDivisible = Number.isInteger(target);

    if (!isDivisible) {
        return -1; // impossible
    }

    let counter = 0;

    for (let appleCount of apples) {
        const gap = appleCount - target;

        if (gap % 2 !== 0) {
            return -1;
        }

        if (gap > 0) {
            const stepsToRemoveSurplus = (appleCount - target) / 2;
            counter += stepsToRemoveSurplus;
        }
    }

    return counter;
}

console.log(minSteps([7, 15, 9, 5])); // 3
console.log(minSteps([7, 7, 7, 7])); // 0
console.log(minSteps([7, 7, 7, 5])); // -1
