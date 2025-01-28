"use strict";

/**
 * @param {...number} values
 * @returns {function} chain func
 */
function calculate(...values) {
    const firstValuesGroupSum = values.reduce((sum, current) => sum + current, 0);

    /**
     * @param  {...number} nextValues 
     * @returns {number} sum
     */
    function chainCalls(...nextValues) {
        const nextValuesGroupSum = nextValues.reduce((sum, current) => sum + current, 0);
        const groupsSum = firstValuesGroupSum + nextValuesGroupSum;

        return groupsSum;
    }

    return chainCalls;
}

console.log(calculate(1, 1)(1)); // 3
