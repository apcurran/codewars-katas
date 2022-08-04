"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {object[]} list 
 * @returns {boolean}
 */
function isRubyComing(list) {
    return list.some((devObj) => devObj.language === "Ruby");
}

var list1 = [
    { firstName: "Sofia", lastName: "I.", country: "Argentina", continent: "Americas", age: 35, language: "Java" },
    { firstName: "Lukas", lastName: "X.", country: "Croatia", continent: "Europe", age: 35, language: "Python" },
    { firstName: "Madison", lastName: "U.", country: "United States", continent: "Americas", age: 32, language: "Ruby" }
];

console.log(isRubyComing(list1)); // true
