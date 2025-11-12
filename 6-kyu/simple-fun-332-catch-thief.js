/**
 * solution 1 -- hashset
 * n = queue length
 * m = range length
 * time: O(n * m)
 * space: O(n)
 *
 * @param {string} queue
 * @returns {number}
 */
function catchThief(queue) {
    let caughtThievesIndices = new Set();

    for (let i = 0; i < queue.length; i++) {
        const current = Number(queue[i]);

        // skip non-police
        if (Number.isNaN(current)) {
            continue;
        }

        const startRange = Math.max(0, i - current);
        const endRange = Math.min(queue.length - 1, i + current);

        for (let j = startRange; j <= endRange; j++) {
            if (queue[j] === "X") {
                // add thief index -- caught by police
                caughtThievesIndices.add(j);
            }
        }
    }

    return caughtThievesIndices.size;
}

console.log(catchThief("X1X#2X#XX")); // 3
console.log(catchThief("X5X#3X###XXXX##1#X1X")); // 5
