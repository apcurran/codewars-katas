"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {object[]} list
 * @returns {number}
 */
function getAverageAge(list) {
    const agesSum = list.reduce((sum, person) => sum + person.age, 0);

    return Math.round(agesSum / list.length);
}

const list1 = [
    { firstName: "Maria", lastName: "Y.", country: "Cyprus", continent: "Europe", age: 30, language: "Java" },
    { firstName: "Victoria", lastName: "T.", country: "Puerto Rico", continent: "Americas", age: 70, language: "Python" },
];

console.log( getAverageAge(list1) ); // 50
