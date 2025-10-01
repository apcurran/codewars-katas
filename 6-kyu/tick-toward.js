/**
 * solution 1
 * time: O(n)
 * space: O(1) -- not counting results array
 *
 * @param {[number, number]} start
 * @param {[number, number]} end
 * @returns {number[][]}
 */
function tickToward(start, end) {
    const [endX, endY] = end;
    let [startX, startY] = start;
    let points = [[startX, startY]]; // start with initial coord points in results array

    while (startX !== endX || startY !== endY) {
        if (startX < endX) {
            startX++;
        } else if (startX > endX) {
            startX--;
        }

        if (startY < endY) {
            startY++;
        } else if (startY > endY) {
            startY--;
        }

        points.push([startX, startY]);
    }

    return points;
}

console.log(tickToward([5, 5], [5, 7])); // => [[5,5],[5,6],[5,7]]
console.log(tickToward([3, 2], [4, 5])); // => [[3,2],[4,3],[4,4],[4,5]]
console.log(tickToward([5, 1], [5, -2])); // => [[5,1],[5,0],[5,-1],[5,-2]]
