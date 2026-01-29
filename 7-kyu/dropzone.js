/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {[number, number]} fire
 * @param {[number, number][]} dropzones
 * @returns {[number, number]}
 */
function dropzone([fireX, fireY], dropzones) {
    let closestZone = [];
    let minDistanceSquared = Infinity;

    for (let [zoneX, zoneY] of dropzones) {
        // euclidean distance formula
        const distanceSquared = (zoneX - fireX) ** 2 + (zoneY - fireY) ** 2;

        if (distanceSquared < minDistanceSquared) {
            // update to new closest zone
            minDistanceSquared = distanceSquared;
            closestZone = [zoneX, zoneY];
        }
    }

    return closestZone;
}

console.log(
    dropzone(
        [1, 1],
        [
            [0, 1],
            [1, 0],
            [2, 2],
        ],
    ),
); // [0, 1]
