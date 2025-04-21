"use strict";

/**
 * solution 1
 * n = lottery length
 * v = lotto ticket value
 * time: O(n * v) -- stringify value
 * space: O(v)
 * 
 * @param {string[]} lottery 
 */
function scratch(lottery) {
    let total = 0;

    for (let ticket of lottery) {
        const [firstWord, secondWord, thirdWord, value] = ticket.split(" ");

        if (firstWord === secondWord && secondWord === thirdWord) {
            total += Number(value);
        }
    }

    return total;
}

console.log(scratch([
    "tiger tiger tiger 100",
    "rabbit dragon snake 100",
    "rat ox pig 1000",
    "dog cock sheep 10",
    "horse monkey rat 5",
    "dog dog dog 1000",
]));
