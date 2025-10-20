/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {string} str
 * @returns {string[]}
 */
function possiblePositions(str) {
    const BOARD_START_BOUNDARY = 1;
    const BOARD_END_BOUNDARY = 8;
    const column = str.charCodeAt(0) - 96;
    const row = Number(str[1]); // get int from "<string><num>" notation
    // knight possible moves:
    // two horizontal then one vertical
    // one horizontal then two vertical
    const knightPossibleMoves = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
    ];

    let results = [];

    for (let [dirX, dirY] of knightPossibleMoves) {
        const newColumn = column + dirX;
        const newRow = row + dirY;

        if (
            newColumn >= BOARD_START_BOUNDARY &&
            newColumn <= BOARD_END_BOUNDARY &&
            newRow >= BOARD_START_BOUNDARY &&
            newRow <= BOARD_END_BOUNDARY
        ) {
            const alphaChar = String.fromCharCode(newColumn + 96);
            const moveFullNotation = alphaChar + newRow;
            results.push(moveFullNotation);
        }
    }

    return results.sort();
}

console.log(possiblePositions("a1")); // ["b3", "c2"]
