"use strict";

/**
 * @typedef {Object} Person
 * @property {number} age
 * @property {string} name
 */

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {Person[]} people 
 * @returns {Person[]}
 */
var OrderPeople = function (people) {
    return people.sort((personA, personB) => {
        return personA.age - personB.age;
    });
};

console.log(OrderPeople(
    [
        { age: 83, name: "joel" },
        { age: 46, name: "roger" },
        { age: 99, name: "vinny" },
        { age: 26, name: "don" },
        { age: 74, name: "brendan" }
    ]
)); // [{ age: 26, name: "don" }, { age: 46, name: "roger" }, { age: 74, name: "brendan" }, { age: 83, name: "joel" }, { age: 99, name: "vinny" }]

