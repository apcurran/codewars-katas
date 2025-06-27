"use strict";

// /**
//  * solution 1 -- math
//  * n = numbers
//  * time: O(max(n)) -- stringification dependent upon largest num
//  * space: O(max(n))
//  *
//  * @param {number} sine
//  * @returns {number[]}
//  */
// function sctc(sine) {
//     const cosine = Math.sqrt(1 - sine ** 2);
//     const tangent = cosine === 0 ? 0 : sine / cosine;
//     const cotangent = tangent === 0 ? null : (1 / tangent);

//     const roundedSine = Number(sine.toFixed(2));
//     const roundedCosine = Number(cosine.toFixed(2));
//     const roundedTangent = Number(tangent.toFixed(2));
//     const roundedCotangent = cotangent ? Number(cotangent.toFixed(2)) : null;

//     return [roundedSine, roundedCosine, roundedTangent, roundedCotangent].filter((value) => value !== null);
// }

/**
 * solution 2 -- optimized math
 * n = numbers
 * time: O(1)
 * space: O(1)
 *
 * @param {number} sine
 * @returns {number[]}
 */
function sctc(sine) {
    const cosine = Math.sqrt(1 - sine ** 2);
    const tangent = sine / cosine;
    const cotangent = 1 / tangent;
    const validValues = [sine, cosine, tangent, cotangent].filter(
        function removeInvalidValues(value) {
            return Number.isFinite(value);
        },
    );

    return validValues.map(function roundToTwoDecimalPlaces(num) {
        return Math.round(num * 100) / 100;
    });
}

console.log(sctc(1)); // [1, 0.0, 0.0]
console.log(sctc(0.5)); // [0.5, 0.87, 0.58, 1.73]
