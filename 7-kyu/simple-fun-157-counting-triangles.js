/**
 * solution 1 -- math formula
 * time: O(n^3) -> nested loops
 * space: O(n) -> sorting
 *
 * @param {number[]} V
 * @returns {number} num of ways to form a triangle of 3 values
 */
function countingTriangles(V) {
    V.sort(function sortAsc(a, b) {
        return a - b;
    });
    let counter = 0;

    for (let i = 0; i < V.length; i++) {
        for (let j = i + 1; j < V.length; j++) {
            for (let k = j + 1; k < V.length; k++) {
                const a = V[i];
                const b = V[j];
                const c = V[k];

                // Triangle Inequality Theorem (sum of smaller legs must be greater than hypotenuse)
                if (a + b > c) {
                    counter++;
                }
            }
        }
    }

    return counter;
}

console.log(countingTriangles([2, 3, 7, 4])); // 1 [2, 3, 4, 7]
console.log(countingTriangles([5, 6, 7, 8])); // 4
