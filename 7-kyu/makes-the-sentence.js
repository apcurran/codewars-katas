/**
 * solution 1
 * time: O(n * log n + m * log m)
 * space: O(n + m)
 *
 * @param {string[]} characterArray
 * @param {string} sentenceString
 * @returns {boolean}
 */
function makesTheSentence(characterArray, sentenceString) {
    const sortedCharacterStr = characterArray.sort().join("");
    const sortedSentenceCharsStr = sentenceString
        .split("")
        .filter((char) => char !== " ")
        .sort()
        .join("");

    return sortedCharacterStr === sortedSentenceCharsStr;
}

console.log(
    makesTheSentence(
        ["D", "u", "c", "k", "s", "q", "u", "a", "c", "k", "."],
        "Ducks quack.",
    ),
); // true
