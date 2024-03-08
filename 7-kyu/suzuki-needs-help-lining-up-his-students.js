"use strict";

/**
 * solution 1
 * time: O(n * log n)
 * space: O(n)
 * 
 * @param {string} students 
 * @returns {string[]}
 */
function lineupStudents(students) {
    return students
            .split(" ")
            .sort(function sortLengthDescReverseAlpha(studentA, studentB) {
                if (studentA.length > studentB.length) {
                    return -1;
                } else if (studentA.length < studentB.length) {
                    return 1;
                } else {
                    // if same length sort by reverse alphabetical order
                    return studentB.localeCompare(studentA);
                }
            });
}

console.log(lineupStudents("Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi"));
// [
//     "Takehiko",
//     "Takayuki",
//     "Takahiro",
//     "Takeshi",
//     "Takeshi",
//     "Takashi",
//     "Tadashi",
//     "Takeo",
//     "Takao"
// ];
