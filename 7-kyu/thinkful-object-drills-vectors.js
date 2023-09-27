"use strict";

class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * @param {Vector} vectorObj 
     * @returns {Vector}
     */
    add(vectorObj) {
        const xSum = this.x + vectorObj.x;
        const ySum = this.y + vectorObj.y;

        return new Vector(xSum, ySum);
    }
}

console.log(new Vector(3, 4));
