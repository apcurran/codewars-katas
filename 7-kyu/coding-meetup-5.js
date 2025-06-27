"use strict";

/**
 * Solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {object[]} list
 * @returns {object}
 */
function countLanguages(list) {
    const langs = list.map((obj) => obj.language);
    let resObj = {};

    for (let lang of langs) {
        if (lang in resObj) {
            const prevVal = resObj[lang];
            resObj[lang] = prevVal + 1;
        } else {
            resObj[lang] = 1;
        }
    }

    return resObj;
}

console.log(
    countLanguages([
        {
            firstName: "Noah",
            lastName: "M.",
            country: "Switzerland",
            continent: "Europe",
            age: 19,
            language: "C",
        },
        {
            firstName: "Anna",
            lastName: "R.",
            country: "Liechtenstein",
            continent: "Europe",
            age: 52,
            language: "JavaScript",
        },
        {
            firstName: "Ramon",
            lastName: "R.",
            country: "Paraguay",
            continent: "Americas",
            age: 29,
            language: "Ruby",
        },
        {
            firstName: "George",
            lastName: "B.",
            country: "England",
            continent: "Europe",
            age: 81,
            language: "C",
        },
    ]),
);
