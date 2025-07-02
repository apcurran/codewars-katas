"use strict";

/**
 * solution 1
 * n = parts length
 * m = part length
 * time: O(n * m)
 * space: O(n)
 *
 * @param {string[]} parts
 * @returns {string}
 */
function makeSentence(parts) {
    const noPeriods = parts.filter(function removePeriods(part) {
        return !part.includes(".");
    });
    const sentence = noPeriods.join(" ");
    const noSpacesBeforeCommas = sentence.replaceAll(/\s+,/g, ",");

    return `${noSpacesBeforeCommas}.`;
}

console.log(makeSentence(["hello", ",", "my", "dear"])); // 'hello, my dear.'
