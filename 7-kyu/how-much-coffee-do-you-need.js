/**
 * solution 1
 * time: O(n * m) -- lowercasing of event
 * space: O(m) -- lowercasing of event
 *
 * @param {string[]} events
 * @returns {number}
 */
function howMuchCoffee(events) {
    const ACCEPTABLE_EVENTS = ["cw", "dog", "cat", "movie"];
    let count = 0;

    for (let event of events) {
        const eventLower = event.toLowerCase();

        if (!ACCEPTABLE_EVENTS.includes(event.toLowerCase())) {
            continue;
        }

        count += event === eventLower ? 1 : 2;

        if (count > 3) {
            return "You need extra sleep";
        }
    }

    return count;
}

console.log(howMuchCoffee(["cw", "CAT"])); // 3
