"use strict";

const Spectrometer = {
    /**
     * solution 1
     * time: O(n)
     * space: O(1)
     * 
     * @param {number[]} atomicMasses 
     * @returns {number}
     */
    getHeaviest(atomicMasses) {
        let largestValue = 0;

        for (let value of atomicMasses) {
            largestValue = Math.max(largestValue, value);
        }

        return largestValue;
    },
};

let tinySample = [286, 287, 288, 289, 290, 292];
let actual = Spectrometer.getHeaviest(tinySample);
console.log(actual);
