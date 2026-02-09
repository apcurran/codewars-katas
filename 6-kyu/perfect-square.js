/**
 * solution 1
 * time: O(n * m)
 * space: O(x)
 *
 * @param {string} str
 * @returns {boolean}
 */
function perfectSquare(str) {
    const rows = str.split("\n");
    const height = rows.length;
    const width = rows[0].length;

    if (height !== width) {
        return false; // not a square
    }

    for (let rowIndex = 0; rowIndex < height; rowIndex++) {
        const currentRow = rows[rowIndex];

        if (currentRow.length !== width) {
            return false;
        }

        for (let colIndex = 0; colIndex < currentRow.length; colIndex++) {
            if (currentRow[colIndex] !== ".") {
                return false;
            }
        }
    }

    return true;
}

console.log(perfectSquare("...\n...\n...")); // true
console.log(perfectSquare("..,\n..\n...")); // false
console.log(perfectSquare("...\n,..\n...")); // false
