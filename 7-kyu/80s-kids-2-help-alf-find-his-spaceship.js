"use strict";


/**
 * solution 1
 * n = myMap rows
 * m = myMap cols
 * time: O(n * m)
 * space: O(n * m)
 * 
 * @param {string} myMap starts from [0, 0] bottom left corner
 * @returns {[number, number]|"Spaceship lost forever."}
 */
function findSpaceship(myMap) {
    if (!myMap) return "Spaceship lost forever.";

    const mapList = myMap.split("\n");

    for (let i = mapList.length - 1; i >= 0; i--) {
        const currentRow = mapList[i];

        for (let j = 0; j < currentRow.length; j++) {
            const currentColumn = mapList[i][j];
            
            if (currentColumn === "X") {
                const adjustedXCoord = j;
                const adjustedYCoord = mapList.length - i - 1;

                return [adjustedXCoord, adjustedYCoord];
            }
        }
    }

    return "Spaceship lost forever.";
}

const myMap = "..........\n..........\n..........\n.......X..\n..........\n..........";
console.log(findSpaceship(myMap)); // [7, 2]
