"use strict";

/**
 * @typedef {{
 *   firstName: string,
 *   lastName: string,
 *   country: string,
 *   continent: string,
 *   age: number,
 *   language: string
 * }} Developer
 */

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {Developer[]} devs 
 * @returns {boolean}
 */
function isAgeDiverse(devs) {
    let ageGroups = {
        teens: false,
        twenties: false,
        thirties: false,
        forties: false,
        fifties: false,
        sixties: false,
        seventies: false,
        eighties: false,
        nineties: false,
        centenarian: false,
    };

    for (let dev of devs) {
        if (dev.age >= 10 && dev.age <= 19) {
            ageGroups.teens = true;
        } else if (dev.age >= 20 && dev.age <= 29) {
            ageGroups.twenties = true;
        } else if (dev.age >= 30 && dev.age <= 39) {
            ageGroups.thirties = true;
        } else if (dev.age >= 40 && dev.age <= 49) {
            ageGroups.forties = true;
        } else if (dev.age >= 50 && dev.age <= 59) {
            ageGroups.fifties = true;
        } else if (dev.age >= 60 && dev.age <= 69) {
            ageGroups.sixties = true;
        } else if (dev.age >= 70 && dev.age <= 79) {
            ageGroups.seventies = true;
        } else if (dev.age >= 80 && dev.age <= 89) {
            ageGroups.eighties = true;
        } else if (dev.age >= 90 && dev.age <= 99) {
            ageGroups.nineties = true;
        } else if (dev.age >= 100) {
            ageGroups.centenarian = true;
        }
    }

    return Object.values(ageGroups)
        .every(function isAgeGroupHere(ageGroup) {
            return ageGroup === true;
        });
}

const list1 = [
    { firstName: "Harry", lastName: "K.", country: "Brazil", continent: "Americas", age: 19, language: "Python" },
    { firstName: "Kseniya", lastName: "T.", country: "Belarus", continent: "Europe", age: 29, language: "JavaScript" },
    { firstName: "Jing", lastName: "X.", country: "China", continent: "Asia", age: 39, language: "Ruby" },
    { firstName: "Noa", lastName: "A.", country: "Israel", continent: "Asia", age: 40, language: "Ruby" },
    { firstName: "Andrei", lastName: "E.", country: "Romania", continent: "Europe", age: 59, language: "C" },
    { firstName: "Maria", lastName: "S.", country: "Peru", continent: "Americas", age: 60, language: "C" },
    { firstName: "Lukas", lastName: "X.", country: "Croatia", continent: "Europe", age: 75, language: "Python" },
    { firstName: "Chloe", lastName: "K.", country: "Guernsey", continent: "Europe", age: 88, language: "Ruby" },
    { firstName: "Viktoria", lastName: "W.", country: "Bulgaria", continent: "Europe", age: 98, language: "PHP" },
    { firstName: "Piotr", lastName: "B.", country: "Poland", continent: "Europe", age: 128, language: "JavaScript" },
];
console.log(isAgeDiverse(list1)); // true
