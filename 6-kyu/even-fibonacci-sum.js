/**
 * solution 1 -- iterative
 * time: O(log n)
 * space: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
function fibonacci(n) {
    let sum = 0;
    let current = 0; // first fib value
    let next = 1; // second fib value

    while (current < n) {
        // check if new num is even -> add to total
        if (current % 2 === 0) {
            sum += current;
        }

        const newFibNum = current + next;
        // move current and next values over
        current = next;
        next = newFibNum;
    }

    return sum;
}

console.log(fibonacci(33)); // 10
