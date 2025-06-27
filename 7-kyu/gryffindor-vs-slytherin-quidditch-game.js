"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {[number, string]} gryffindor
 * @param {[number, string]} slytherin
 * @returns {string}
 */
function gameWinners(gryffindor, slytherin) {
    const SNITCH_VALUE = 150;
    const [gryffindorScore, isGryffindorSnitch] = gryffindor;
    const [slytherinScore, isSyltherinSnitch] = slytherin;
    const gryffindorTotal =
        isGryffindorSnitch === "yes"
            ? gryffindorScore + SNITCH_VALUE
            : gryffindorScore;
    const slytherinTotal =
        isSyltherinSnitch === "yes"
            ? slytherinScore + SNITCH_VALUE
            : slytherinScore;

    if (gryffindorTotal > slytherinTotal) {
        return "Gryffindor wins!";
    } else if (slytherinTotal > gryffindorTotal) {
        return "Slytherin wins!";
    } else {
        return "It's a draw!";
    }
}

console.log(gameWinners([100, "yes"], [100, "no"])); // "Gryffindor wins!"
console.log(gameWinners([350, "no"], [250, "yes"])); // "Slytherin wins!"
console.log(gameWinners([100, "yes"], [250, "no"])); // "It's a draw!"
