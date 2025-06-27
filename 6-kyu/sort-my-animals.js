"use strict";

/** @typedef {{ name: String, numberOfLegs: Number }} Animal */

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {Animal[]} animals 
 * @returns {Array}
 */
function sortAnimal(animals) {
    if (animals.length === 0) {
        return [];
    }

    const copy = [...animals];

    return copy.sort(comparisonFunc);
}

/**
 * @param {Animal} objA 
 * @param {Animal} objB 
 */
function comparisonFunc(objA, objB) {
    // compare num of legs
    const objALegsCount = objA.numberOfLegs;
    const objBLegsCount = objB.numberOfLegs;

    if (objALegsCount < objBLegsCount) {
        return -1;
    } else if (objALegsCount > objBLegsCount) {
        return 1;
    }

    // then compare name
    const objAName = objA.name;
    const objBName = objB.name;

    return objAName.localeCompare(objBName);
}

const animals = [
    { name: "Cat", numberOfLegs: 4 },
    { name: "Snake", numberOfLegs: 0 },
    { name: "Dog", numberOfLegs: 4 },
    { name: "Pig", numberOfLegs: 4 },
    { name: "Human", numberOfLegs: 2 },
    { name: "Bird", numberOfLegs: 2 },
];
console.log(sortAnimal(animals));
// [
//     { name: "Snake", numberOfLegs: 0 },
//     { name: "Bird", numberOfLegs: 2 },
//     { name: "Human", numberOfLegs: 2 },
//     { name: "Cat", numberOfLegs: 4 },
//     { name: "Dog", numberOfLegs: 4 },
//     { name: "Pig", numberOfLegs: 4 }
// ];
