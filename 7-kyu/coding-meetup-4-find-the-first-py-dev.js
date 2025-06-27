"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {object[]} list
 * @returns {string}
 */
function getFirstPython(list) {
    const pyDevObj = list.find((dev) => dev.language === "Python");

    if (!pyDevObj) return "There will be no Python developers";

    return `${pyDevObj.firstName}, ${pyDevObj.country}`;
}

const list1 = [
    {
        firstName: "Mark",
        lastName: "G.",
        country: "Scotland",
        continent: "Europe",
        age: 22,
        language: "JavaScript",
    },
    {
        firstName: "Victoria",
        lastName: "T.",
        country: "Puerto Rico",
        continent: "Americas",
        age: 30,
        language: "Python",
    },
    {
        firstName: "Emma",
        lastName: "B.",
        country: "Norway",
        continent: "Europe",
        age: 19,
        language: "Clojure",
    },
];
console.log(getFirstPython(list1)); // "Victoria, Puerto Rico"
