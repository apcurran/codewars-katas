// /**
//  * solution 1 -- brute force (TLE)
//  * time: O(n^3)
//  * space: O(1)
//  *
//  * @param {string} input
//  * @returns {number} - sum of all vowel counts in substrs
//  */
// function vowelRecognition(input) {
//     const vowels = "aeiouAEIOU";
//     let vowelsSum = 0;

//     for (let i = 0; i < input.length; i++) {
//         for (let j = i; j < input.length; j++) {
//             let substrVowelCount = 0;

//             for (let k = i; k <= j; k++) {
//                 if (vowels.includes(input[k])) {
//                     substrVowelCount++;
//                 }
//             }

//             vowelsSum += substrVowelCount;
//         }
//     }

//     return vowelsSum;
// }

/**
 * solution 2 -- brute force (TLE)
 * time: O(n^2)
 * space: O(1)
 *
 * @param {string} input
 * @returns {number} - sum of all vowel counts in substrs
 */
function vowelRecognition(input) {
    const vowels = "aeiouAEIOU";
    let vowelsSum = 0;

    for (let i = 0; i < input.length; i++) {
        let substrVowelCount = 0;

        for (let j = i; j < input.length; j++) {
            if (vowels.includes(input[j])) {
                substrVowelCount++;
            }

            vowelsSum += substrVowelCount;
        }
    }

    return vowelsSum;
}

console.log(vowelRecognition("baceb")); // 16
