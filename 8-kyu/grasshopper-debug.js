"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {number} temp
 * @returns {string}
 */
function weatherInfo(temp) {
    const c = convertToCelsius(temp);

    if (c < 0) {
        return `${c} is freezing temperature`;
    } else {
        return `${c} is above freezing temperature`;
    }
}

/**
 * @param {number} fahrenheitTemp
 * @returns {number}
 */
function convertToCelsius(fahrenheitTemp) {
    const celsius = (fahrenheitTemp - 32) * (5 / 9);

    return celsius;
}

console.log(weatherInfo(50)); // "10 is above freezing temperature"
console.log(weatherInfo(23)); //  "-5 is freezing temperature"
