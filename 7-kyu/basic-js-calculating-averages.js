"use strict";

var Calculator = {
    /**
     * solution 1
     * time: O(n)
     * space: O(1)
     * 
     * @param  {...number} args 
     * @returns {number}
     */
    average(...args) {
        if (args.length === 0) return 0;

        const sum = args.reduce((sum, currentNum) => sum + currentNum, 0);

        return sum / args.length;
    },
};

console.log(Calculator.average()); // 0
console.log(Calculator.average(3, 4, 5)); // 4
