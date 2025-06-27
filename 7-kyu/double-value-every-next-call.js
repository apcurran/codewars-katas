"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 */
class Class {
    static value = 0.5;

    static getNumber() {
        this.value *= 2;

        return this.value;
    }
}

console.log(Class.getNumber()); // 1
console.log(Class.getNumber()); // 2
console.log(Class.getNumber()); // 4
