"use strict";

Object.defineProperty(Array.prototype, "containsAll", {
    /**
     * solution 1
     * n = items array
     * m = neededElements array
     * time: O(n * m)
     * space: O(1)
     * 
     * @param {number[]} neededElements 
     * @returns {boolean}
     */
    value: function containsAll(neededElements) {
        const items = this;

        for (let num of neededElements) {
            const isWithinItems = items.includes(num);

            if (!isWithinItems) return false;
        }

        return true;
    }
});