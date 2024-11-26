"use strict";

Array.prototype.pops = function () {
    for (let i = this.length - 1; i >= 0; i--) {
        if (this.hasOwnProperty(i)) {
            return this.pop();
        } else {
            this.pop();
        }
    }
};

const array1 = [1, 2, 3, , , ,];
console.log(array1.pops()); // 3
console.log(array1); // [1, 2]
console.log("\n");


Array.prototype.shifts = function () {
    for (let i = 0; i < this.length; i++) {
        if (this.hasOwnProperty(i)) {
            return this.shift();
        } else {
            this.shift();
            i--;
        }
    }
};

const array2 = [, , , 1, 2, 3];
console.log(array2.shifts()); // 1 
console.log(array2); // = [2, 3]
