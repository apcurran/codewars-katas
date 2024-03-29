"use strict";

/**
 * @typedef {{
 *   firstName: String,
 *   lastName: String,
 *   country: String,
 *   continent: String,
 *   age: Number,
 *   language: String,
 * }} Person
*/

// /**
//  * solution 1
//  * n = list length
//  * m = Person properties
//  * time: O(n * m)
//  * space: O(n)
//  * 
//  * @param {Person[]} list 
//  * @returns {{
//  *  firstName: String,
//  *   lastName: String,
//  *   country: String,
//  *   continent: String,
//  *   age: Number,
//  *   language: String,
//  *   question: String,
//  * }[]}
//  */
// function askForMissingDetails(list) {
//     // filter
//     return list
//         .filter(function getMissingDetailsDevs(person) {
//             for (let prop in person) {
//                 const value = person[prop];

//                 if (value === null) {
//                     // keep in array
//                     return true;
//                 }
//             }
//         })
//         .map(function addQuestionFieldToMissingDetailsDevs(person) {
//             let missingProp = "";

//             for (let prop in person) {
//                 const value = person[prop];

//                 if (value === null) {
//                     missingProp = prop;

//                     break;
//                 }
//             }

//             const questionValue = `Hi, could you please provide your ${missingProp}.`;

//             return {
//                 ...person,
//                 question: questionValue
//             };
//         });
// }

/**
 * solution 2
 * n = list length
 * m = Person properties
 * time: O(n * m)
 * space: O(n)
 * 
 * @param {Person[]} list 
 * @returns {{
 *  firstName: String,
 *   lastName: String,
 *   country: String,
 *   continent: String,
 *   age: Number,
 *   language: String,
 *   question: String,
 * }[]}
 */
function askForMissingDetails(list) {
    let missingDetailsDevs = [];

    for (let person of list) {
        for (let prop in person) {
            if (person[prop] === null) {
                const question = `Hi, could you please provide your ${prop}.`;
                const updatedPerson = {
                    ...person,
                    question
                };
                missingDetailsDevs.push(updatedPerson);

                break;
            }
        }
    }

    return missingDetailsDevs;
}

const list1 = [
    { firstName: null, lastName: "I.", country: "Argentina", continent: "Americas", age: 35, language: "Java" },
    { firstName: "Lukas", lastName: "X.", country: "Croatia", continent: "Europe", age: 35, language: null },
    { firstName: "Madison", lastName: "U.", country: "United States", continent: "Americas", age: 32, language: "Ruby" }
];

console.log(askForMissingDetails(list1));
// [
//     {
//         firstName: null, lastName: "I.", country: "Argentina", continent: "Americas", age: 35, language: "Java",
//         question: "Hi, could you please provide your firstName."
//     },
//     {
//         firstName: "Lukas", lastName: "X.", country: "Croatia", continent: "Europe", age: 35, language: null,
//         question: "Hi, could you please provide your language."
//     }
// ];
