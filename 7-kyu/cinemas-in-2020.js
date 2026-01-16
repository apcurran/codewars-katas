/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {number[]} seats
 * @returns {number}
 */
function maximumSeating(seats) {
    let counter = 0;

    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) continue;

        const prev2 = seats[i - 2] || 0;
        const prev1 = seats[i - 1] || 0;
        const next1 = seats[i + 1] || 0;
        const next2 = seats[i + 2] || 0;

        if (prev2 === 0 && prev1 === 0 && next1 === 0 && next2 === 0) {
            seats[i] = 1;
            counter++;
        }
    }

    return counter;
}

console.log(maximumSeating([0, 0, 0, 1, 0, 0, 1, 0, 0, 0])); // 2
console.log(maximumSeating([0, 0, 0, 0])); // 2
console.log(maximumSeating([1, 0, 0, 0, 0, 0, 1])); // 1
