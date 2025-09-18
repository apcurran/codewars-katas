/**
 * solution 1
 * time: O(n)
 * space: O(n) -- stringify num
 *
 * @param {number} num
 * @returns {string}
 */
function hiddenWord(num) {
    const invertedMap = new Map([
        [6, "a"],
        [1, "b"],
        [7, "d"],
        [4, "e"],
        [3, "i"],
        [2, "l"],
        [9, "m"],
        [8, "n"],
        [0, "o"],
        [5, "t"],
    ]);
    const strNum = String(num);
    let result = "";

    for (let i = 0; i < strNum.length; i++) {
        const digit = Number(strNum[i]);
        const mappedChar = invertedMap.get(digit);
        result += mappedChar;
    }

    return result;
}

console.log(hiddenWord(637)); // "aid"
console.log(hiddenWord(7415)); // "debt"
console.log(hiddenWord(49632)); // "email"
console.log(hiddenWord(942547)); // "melted"
