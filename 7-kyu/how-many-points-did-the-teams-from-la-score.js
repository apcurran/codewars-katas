"use strict";

/**
 * solution 1 -- regex test
 * n = teams length
 * x = teamName length
 * m = teamScore length
 * time: O(n * (x + m))
 * space: O(m)
 * 
 * @param {array[]} teams 
 * @returns {number}
 */
function getLosAngelesPoints(teams) {
    const laIdentifier = /^Los Angeles [A-Za-z]+/;
    let laScore = 0;


    for (let [teamName, teamScore] of teams) {
        if (laIdentifier.test(teamName)) {
            // LA team found
            // get score
            const score = Number(teamScore.split(":")[0]);
            laScore += score;
        }
    }

    return laScore;
}

const basketballResults = [
    ["Dallas Mavericks", "492:513"],
    ["Los Angeles Lakers", "641:637"],
    ["Houston Rockets", "494:458"],
    ["Los Angeles Clippers", "382:422"],
    ["New Orleans Pelicans", "433:454"],
    ["Oklahoma City Thunder", "315:318"],
    ["Golden State Warriors", "559:503"],
    ["Memphis Grizzlies", "550:511"],
    ["Portland Trail Blazers", "527:520"],
    ["Minnesota Timberwolves", "495:494"],
    ["Utah Jazz", "399:402"],
    ["Sacramento Kings", "420:431"],
    ["San Antonio Spurs", "469:460"],
    ["Phoenix Suns", "523:522"],
    ["Denver Nuggets", "646:658"]
];
console.log(getLosAngelesPoints(basketballResults)); // 1023 (641 + 382)
