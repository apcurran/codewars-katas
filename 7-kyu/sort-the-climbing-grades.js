"use strict";

/**
 * solution 1
 * n = arr length
 * time: O(n * log n) -- sort uses fixed O(20) array.indexOf() call -- constant time op
 * space: O(n) -- default array.sort() func call uses linear memory
 *
 * @param {string[]} arr
 * @returns {string[]} sorted list
 */
function sortGrades(arr) {
    const boulderingGradesOrdering = [
        "VB",
        "V0",
        "V0+",
        "V1",
        "V2",
        "V3",
        "V4",
        "V5",
        "V6",
        "V7",
        "V8",
        "V9",
        "V10",
        "V11",
        "V12",
        "V13",
        "V14",
        "V15",
        "V16",
        "V17",
    ];

    return arr.sort(function sortGradesAsc(gradeA, gradeB) {
        return boulderingGradesOrdering.indexOf(gradeA) - boulderingGradesOrdering.indexOf(gradeB);
    });
}

console.log(sortGrades(["V7", "V12", "V1"])); // ["V1", "V7", "V12"]
console.log(sortGrades([])); // []
