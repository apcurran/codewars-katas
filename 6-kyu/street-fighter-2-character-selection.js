"use strict";

/**
 * solution 1
 * n = moves len
 * time: O(n)
 * space: O(n)
 *
 * @param {string[][]} fighters
 * @param {number[]} startingPos
 * @param {string[]} moves
 * @returns {string[]}
 */
function streetFighterSelection(fighters, startingPos, moves) {
    let [currPosY, currPosX] = startingPos;
    let selectedCharacters = [];

    for (let move of moves) {
        if (move === "up") {
            currPosY = 0;
        } else if (move === "down") {
            currPosY = 1;
        } else if (move === "right") {
            const newPos = currPosX === 5 ? 0 : currPosX + 1;
            currPosX = newPos;
        } else if (move === "left") {
            const newPos = currPosX === 0 ? 5 : currPosX - 1;
            currPosX = newPos;
        }

        const characterHovered = fighters[currPosY][currPosX];
        selectedCharacters.push(characterHovered);
    }

    return selectedCharacters;
}

const fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"],
];
const startingPosition = [0, 0];
const moves = ["up", "left", "right", "left", "left"];

console.log(streetFighterSelection(fighters, startingPosition, moves)); // ['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
