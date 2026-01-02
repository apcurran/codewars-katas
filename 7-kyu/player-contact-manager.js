/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string|null} players
 * @returns {[]}
 */
function playerManager(players) {
    let results = [];

    if (!players) {
        return results;
    }

    const playersList = players.split(", ");

    for (let i = 0; i < playersList.length; i += 2) {
        const name = playersList[i];
        const contactNum = Number(playersList[i + 1]);
        const playerInfo = {
            player: name,
            contact: contactNum,
        };
        results.push(playerInfo);
    }

    return results;
}

console.log(playerManager("John Doe, 8167238327, Jane Doe, 8163723827"));
//, [
//     { player: "John Doe", contact: 8167238327 },
//     { player: "Jane Doe", contact: 8163723827 },
// ]
console.log(playerManager(""));
// []
