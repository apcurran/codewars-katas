// Working answer but not compatible with older Node versions.
/**
 * 
 * @param {string} word - Given word string to match for vowels
 * @returns {number[]} - Array of nums for indices of matched vowels 
 */
function vowelIndices(word){
    const regex = /a|e|i|o|u/gi;
    const matches = [...word.matchAll(regex)];
    const resultArr = matches.map((match) => match.index + 1);
    
    return resultArr;
}

/**
 * 
 * @param {string} word - Given word string to match for vowels
 * @returns {number[]} - Array of nums for indices of matched vowels 
 */
// function vowelIndices(word){
//     const regex = /a|e|i|o|u|y/gi;
//     let match;
//     let resultArr = [];

//     while ((match = regex.exec(word)) != null) {
//         resultArr.push(match.index + 1);
//     }

//     return resultArr;
// }

console.log(vowelIndices("super"));