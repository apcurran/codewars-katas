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
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {Vector} v1
 * @param {Vector} v2
 * @returns {Vector} result vector
 */
function crossProduct(v1, v2) {
    const x = v1.y * v2.z - v1.z * v2.y;
    const y = v1.z * v2.x - v1.x * v2.z;
    const z = v1.x * v2.y - v1.y * v2.x;

    return new Vector(x, y, z);
}
