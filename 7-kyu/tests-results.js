"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} grades 
 * @returns {array}
 */
function testResult(grades) {
    const classSum = grades.reduce((sum, current) => sum + current, 0);
    const classAverage = Number((classSum / grades.length).toFixed(3));
    let marks = {
        h: 0,
        a: 0,
        l: 0
    };

    for (let grade of grades) {
        if (grade === 9 || grade === 10) {
            // high grade
            marks["h"] = marks["h"] + 1;
        } else if (grade === 7 || grade === 8) {
            marks["a"] = marks["a"] + 1;
        } else {
            marks["l"] = marks["l"] + 1;
        }
    }

    if (marks["a"] === 0 && marks["l"] === 0) {
        // only high marks
        return [classAverage, marks, "They did well"];
    } else {
        return [classAverage, marks];
    }
}

console.log(testResult([10, 9, 9, 10, 9, 10, 9]));
// [9.429, {'h': 7, 'a': 0, 'l': 0}, 'They did well']

console.log(testResult([5, 6, 4, 8, 9, 8, 9, 10, 10, 10]));
// [7.9, {'h': 5, 'a': 2, 'l': 3}]

