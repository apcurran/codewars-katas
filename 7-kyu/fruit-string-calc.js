"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} string
 * @returns {number}
 */
function calculate(string) {
    const chunks = string.split(" ");
    const isAddition = string.includes("gains");
    let firstNum = 0;
    let secondNum = 0;

    for (let i = 0; i < chunks.length; i++) {
        const chunk = Number(chunks[i]);

        if (!Number.isNaN(chunk)) {
            firstNum = chunk;

            break;
        }
    }

    for (let i = chunks.length - 1; i >= 0; i--) {
        const chunk = Number(chunks[i]);

        if (!Number.isNaN(chunk)) {
            secondNum = chunk;

            break;
        }
    }

    if (isAddition) {
        return firstNum + secondNum;
    } else {
        return firstNum - secondNum;
    }
}

console.log(calculate("Panda has 48 apples and loses 4")); // 44
