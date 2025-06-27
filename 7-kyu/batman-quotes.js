"uses strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {string[]} quotes
 * @param {string} hero
 * @returns {string}
 */
function getQuote(quotes, hero) {
    const quoteIndex = getIndexFromStr(hero);
    const selectedQuote = quotes[quoteIndex];
    const heroFirstChar = hero[0];
    let heroName;

    if (heroFirstChar === "B") {
        heroName = "Batman";
    } else if (heroFirstChar === "R") {
        heroName = "Robin";
    } else {
        heroName = "Joker";
    }

    return `${heroName}: ${selectedQuote}`;
}

/**
 * @param {string} str
 * @returns {number}
 */
function getIndexFromStr(str) {
    const NUMS = /[0-9]/;

    for (let char of str) {
        if (NUMS.test(char)) {
            return Number(char);
        }
    }
}

console.log(
    getQuote(
        [
            "I am vengeance. I am the night. I am Batman!",
            "Holy haberdashery, Batman!",
            "Let's put a smile on that faaaceee!",
        ],
        "Rob1n",
    ),
);
// "Robin: Holy haberdashery, Batman!
