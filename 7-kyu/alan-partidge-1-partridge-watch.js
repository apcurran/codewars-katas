/**
 * solution 1
 * n = array length
 * m = exlamations length
 * time: O(n + m)
 * space: O(m)
 *
 * @param {string[]} x
 * @returns {string}
 */
function part(x) {
    const alanTerms = [
        "Partridge",
        "PearTree",
        "Chat",
        "Dan",
        "Toblerone",
        "Lynn",
        "AlphaPapa",
        "Nomad",
    ];
    let termsCount = 0;

    for (let value of x) {
        if (alanTerms.includes(value)) {
            termsCount++;
        }
    }

    const exclamations = "!".repeat(termsCount);

    if (termsCount === 0) {
        return "Lynn, I've pierced my foot on a spike!!";
    } else {
        return `Mine's a Pint${exclamations}`;
    }
}

console.log(part(["Grouse", "Partridge", "Pheasant"])); // 'Mine\'s a Pint!'
console.log(part(["Pheasant", "Goose", "Starling", "Robin"])); // 'Lynn, I\'ve pierced my foot on a spike!!'
