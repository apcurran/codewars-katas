/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function kebabize(str) {
    return str
        .replace(/[^a-z]/gi, "")
        .replace(/^[A-Z]/, (letter) => letter.toLowerCase())
        .replace(/[A-Z]/g, (letter) => "-" + letter.toLowerCase());
}

console.log( kebabize("camelsHaveThreeHumps") ); // "camels-have-three-humps"
console.log( kebabize("camelsHave3Humps") ); // "camels-have-humps"
