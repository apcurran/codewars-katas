"use strict";

/**
 * solution 1 -- sort and hashmap
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {string[]} a
 * @returns {string[][]}
 */
function boatLoader(a) {
    const animals = a
        .filter(function removeNums(value) {
            return typeof value === "string";
        })
        .sort(function sortAlpha(animal1, animal2) {
            const animal1Lower = animal1.toLowerCase();
            const animal2Lower = animal2.toLowerCase();

            if (animal1Lower === animal2Lower) {
                // both same letter? prioritize uppercase letter first
                return animal1 < animal2 ? -1 : 1;
            } else {
                // different letters? compare based on alpha char order
                return animal1Lower < animal2Lower ? -1 : 1;
            }
        });

    let animalCounts = new Map();

    for (let animal of animals) {
        const animalPreviousCount = animalCounts.get(animal) || 0;
        animalCounts.set(animal, animalPreviousCount + 1);
    }

    let animalPairs = [];

    for (let [animal, animalCount] of animalCounts) {
        // only add tuple pairs for count >= 2
        if (animalCount >= 2) {
            animalPairs.push([animal, animal]);
        }
    }

    return animalPairs;
}

console.log(boatLoader([5, 6, 5, "g", "g", "G", "c", "p", "x", "z", "Z", "G", "c", "g", "g"]));
// [['c','c'],['G','G'],['g','g']]
