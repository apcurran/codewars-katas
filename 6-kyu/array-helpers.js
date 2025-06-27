"use strict";

Array.prototype.square = function () {
    // current array is 'this'
    return this.map((num) => num * num);
};

Array.prototype.cube = function () {
    return this.map((num) => num ** 3);
};

Array.prototype.average = function () {
    return this.sum() / this.length;
};

Array.prototype.sum = function () {
    return this.reduce((sum, num) => sum + num, 0);
};

Array.prototype.even = function () {
    return this.filter((num) => num % 2 === 0);
};

Array.prototype.odd = function () {
    return this.filter((num) => num % 2 !== 0);
};

var numbers = [1, 2, 3, 4, 5];

console.log(numbers.square()); // must return [1, 4, 9, 16, 25]
console.log(numbers.cube()); // must return [1, 8, 27, 64, 125]
console.log(numbers.average()); // must return 3
console.log(numbers.sum()); // must return 15
console.log(numbers.even()); // must return [2, 4]
console.log(numbers.odd()); // must return [1, 3, 5]
