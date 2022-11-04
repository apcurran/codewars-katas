"use strict";

class Player {
    constructor(name) {
        this.name = name;
    }
}

let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {array} players 
 * @param {number} goose 
 * @returns {string}
 */
function duckDuckGoose(players, goose) {
    const playersIndex = (goose - 1) % players.length;

    return (players[playersIndex]).name;
}

console.log( duckDuckGoose(players, 1) ); // "a"
console.log( duckDuckGoose(players, 3) ); // "c"
console.log( duckDuckGoose(players, 10) ); // "z"
