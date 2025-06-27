"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} chromosome1
 * @param {string} chromosome2
 * @param {number} index
 * @returns {[string, string]}
 */
function crossover(chromosome1, chromosome2, index) {
    const chromosome1PartA = chromosome1.slice(0, index);
    const chromosome1PartB = chromosome1.slice(index);

    const chromosome2PartA = chromosome2.slice(0, index);
    const chromosome2PartB = chromosome2.slice(index);

    // now swap parts from chromosomes
    const modifiedChromosome1 = chromosome1PartA + chromosome2PartB;
    const modifiedChromosome2 = chromosome2PartA + chromosome1PartB;

    return [modifiedChromosome1, modifiedChromosome2];
}

console.log(crossover("111000", "000110", 3)); // ["111110", "000000"]
