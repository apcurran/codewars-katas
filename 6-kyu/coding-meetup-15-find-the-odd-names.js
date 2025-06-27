"use strict";

/**
 * solution 1
 * n = people length
 * m = firstName length
 * time: O(n * m)
 * space: O(n)
 *
 * @param {object[]} people
 * @returns {object[]}
 */
function findOddNames(people) {
    return people.filter((person) => {
        const firstName = person.firstName;
        let asciiCharCodesSum = 0;

        for (let char of firstName) {
            const charCode = char.charCodeAt(0);
            asciiCharCodesSum += charCode;
        }

        // keep if charCodesSum of first name is odd
        if (asciiCharCodesSum % 2 !== 0) {
            return true;
        }
    });
}

const list1 = [
    {
        firstName: "Aba",
        lastName: "N.",
        country: "Ghana",
        continent: "Africa",
        age: 21,
        language: "Python",
    },
    {
        firstName: "Abb",
        lastName: "O.",
        country: "Israel",
        continent: "Asia",
        age: 39,
        language: "Java",
    },
];
console.log(findOddNames(list1));
// [
//     { firstName: "Abb", lastName: "O.", country: "Israel", continent: "Asia", age: 39, language: "Java" }
// ];
