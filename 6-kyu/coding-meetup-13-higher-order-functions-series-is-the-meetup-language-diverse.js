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
function isLanguageDiverse(devs) {
    let languageCounts = [0, 0, 0]; // [pythonCount, rubyCount, jsCount]

    for (let dev of devs) {
        if (dev.language === "Python") {
            languageCounts[0]++;
        } else if (dev.language === "Ruby") {
            languageCounts[1]++;
        } else if (dev.language === "JavaScript") {
            languageCounts[2]++;
        }
    }

    const minLanguageCount = Math.min(...languageCounts); 
    const maxLanguageCount = Math.max(...languageCounts);

    return maxLanguageCount <= (2 * minLanguageCount);
}

const devs = [
    { firstName: "Daniel", lastName: "J.", country: "Aruba", continent: "Americas", age: 42, language: "Python" },
    { firstName: "Kseniya", lastName: "T.", country: "Belarus", continent: "Europe", age: 22, language: "Ruby" },
    { firstName: "Sou", lastName: "B.", country: "Japan", continent: "Asia", age: 43, language: "Ruby" },
    { firstName: "Hanna", lastName: "L.", country: "Hungary", continent: "Europe", age: 95, language: "JavaScript" },
    { firstName: "Jayden", lastName: "P.", country: "Jamaica", continent: "Americas", age: 18, language: "JavaScript" },
    { firstName: "Joao", lastName: "D.", country: "Portugal", continent: "Europe", age: 25, language: "JavaScript" },
];
console.log(isLanguageDiverse(devs)); // false
