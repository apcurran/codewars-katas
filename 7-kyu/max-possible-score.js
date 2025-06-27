"use strict";

/**
 * solution 1
 * n = questions object
 * m = newQuestions array
 * time: O(n * m)
 * space: O(1)
 *
 * @param {object} questions
 * @param {string[]} newQuestions
 * @returns {number}
 */
function maxPossibleScore(questions, newQuestions) {
    let total = 0;

    for (let property in questions) {
        // check if current q is in newQs
        if (newQuestions.includes(property)) {
            // if yes, double value
            total += questions[property] * 2;
        } else {
            // else keep same value
            total += questions[property];
        }
    }

    return total;
}

console.log(maxPossibleScore({ a: 1, b: 2, c: 3 }, ["a", "c"])); // 10
