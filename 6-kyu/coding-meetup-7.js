"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {object[]]} list
 * @returns {object[]}
 */
function findSenior(list) {
    list.sort((objA, objB) => objA.age - objB.age);

    return list.filter((obj) => obj.age === list[list.length - 1].age);
}

var list1 = [
    {
        firstName: "Gabriel",
        lastName: "X.",
        country: "Monaco",
        continent: "Europe",
        age: 49,
        language: "PHP",
    },
    {
        firstName: "Odval",
        lastName: "F.",
        country: "Mongolia",
        continent: "Asia",
        age: 38,
        language: "Python",
    },
    {
        firstName: "Emilija",
        lastName: "S.",
        country: "Lithuania",
        continent: "Europe",
        age: 19,
        language: "Python",
    },
    {
        firstName: "Sou",
        lastName: "B.",
        country: "Japan",
        continent: "Asia",
        age: 49,
        language: "PHP",
    },
];
console.log(findSenior(list1));
// [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]
