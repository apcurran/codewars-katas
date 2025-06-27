"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 */
class Block {
    constructor([width, length, height]) {
        this.width = width;
        this.length = length;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getLength() {
        return this.length;
    }

    getHeight() {
        return this.height;
    }

    getVolume() {
        return this.width * this.length * this.height;
    }

    getSurfaceArea() {
        const face1Area = 2 * (this.width * this.length);
        const face2Area = 2 * (this.width * this.height);
        const face3Area = 2 * (this.length * this.height);

        return face1Area + face2Area + face3Area;
    }
}

let b = new Block([2, 4, 6]);
console.log( b.getWidth() ); // 2
console.log( b.getLength() ); // 4
console.log( b.getHeight() ); // 6
console.log( b.getVolume() ); // 48
console.log( b.getSurfaceArea() ); // 88
