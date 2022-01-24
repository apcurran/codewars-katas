"use strict";

/**
 * You will be given a string with two arguments,
 * the first argument will tell you which teams are playing, and
 * the second argument tells you what has happened in the match.
 * Calculate the points, and return a string containing the teams final scores.
 * The team names should be sorted in the same order as in the first argument.
 * 
 * @param {string} teams 
 * @param {string} actions
 * @returns {string} 
 */
function quidditchScoreboard(teams, actions) {
    let team1Score = 0;
    let team2Score = 0;
    const [team1, team2] = teams.split(" vs ");
    const actionsArr = actions.split(", ");

    const actionsMap = new Map([
        // Goal
        ["Quaffle goal", 10],
        // Fouls
        ["Blatching foul", -30],
        ["Blurting foul", -30],
        ["Bumphing foul", -30],
        ["Haverstacking foul", -30],
        ["Quaffle-pocking foul", -30],
        ["Stooging foul", -30],
        // Snitch ender
        ["Caught Snitch", 150]
    ]);

    for (let i = 0; i < actionsArr.length; i++) {
        const [currTeam, currTeamAction] = actionsArr[i].split(": ");
        const actionPoints = actionsMap.get(currTeamAction);

        if (currTeamAction === "Caught Snitch") {
            console.log("running snitch total")
            currTeam === team1 ? team1Score += actionPoints : team2Score += actionPoints;

            break;
        }

        currTeam === team1 ? team1Score += actionPoints : team2Score += actionPoints;
    }

    return `${team1}: ${team1Score}, ${team2}: ${team2Score}`;
}

console.log(quidditchScoreboard("Ilkley vs Yorkshire", "Ilkley: Quaffle goal, Yorkshire: Haverstacking foul, Yorkshire: Caught Snitch")); // "Ilkley: 10, Yorkshire: 120"
