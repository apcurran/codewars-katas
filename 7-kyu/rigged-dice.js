/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 *
 * @returns {number}
 */
function throwRigged() {
    const sixChance = Math.floor(Math.random() * 99); // value from 0-99

    if (sixChance <= 21) {
        return 6;
    }

    // otherwise...
    const anotherChance = Math.floor(Math.random() * 4) + 1; // value from 1-5

    return anotherChance;
}
