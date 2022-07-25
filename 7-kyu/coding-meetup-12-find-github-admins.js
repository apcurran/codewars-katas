"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {object[]} list 
 * @param {string} lang 
 * @returns {object[]}
 */
function findAdmin(list, lang) {
    return list.filter((devObj) => {
        if (devObj.language === lang && devObj.githubAdmin === "yes") {
            return true;
        }

        return false;
    }); 
}

const list1 = [
    { firstName: "Harry", lastName: "K.", country: "Brazil", continent: "Americas", age: 22, language: "JavaScript", githubAdmin: "yes" },
    { firstName: "Kseniya", lastName: "T.", country: "Belarus", continent: "Europe", age: 49, language: "Ruby", githubAdmin: "no" },
    { firstName: "Jing", lastName: "X.", country: "China", continent: "Asia", age: 34, language: "JavaScript", githubAdmin: "yes" },
    { firstName: "Piotr", lastName: "B.", country: "Poland", continent: "Europe", age: 128, language: "JavaScript", githubAdmin: "no" }
];
console.log( findAdmin(list1, "JavaScript") );
// [
//     { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
//     { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
// ]