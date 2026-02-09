/**
 * solution 1
 * time: O(log n) -- shrinking exponentially (reverse of fib seq growth)
 * space: O(1)
 *
 * @param {number} first
 * @param {number} second
 * @returns {[number, number]}
 */
function solution(first, second) {
    let a = first;
    let b = second;
    // loop/recursion until beginning vals are reached
    while (a <= b) {
        // sub two vals to get next prior val in seq
        const newC = b - a;

        if (newC > a) {
            break;
        }

        const temp = a;
        a = newC;
        b = temp;
    }

    return [a, b];
}

console.log(solution(398, 644)); // [2, 6]
console.log(solution(15, 28)); // [2, 13]
