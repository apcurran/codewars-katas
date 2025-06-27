"use strict";

class Vector {
    /**
     * @param {number} x 
     * @param {number} y 
     * @param {number} z 
     */
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;        
    }
}

/**
 * 
 * @param {Vector} v1 
 * @param {Vector} v2 
 * @returns {number}
 */
function dotProduct(v1, v2) {
    return (v1.x * v2.x) + (v1.y * v2.y) + (v1.z * v2.z);
}

console.log(dotProduct(new Vector(2, 0, -1), new Vector(0, -2, 1))); // -1
