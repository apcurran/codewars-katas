Array.prototype.first = function () {
    return this[0];
};

Array.prototype.last = function () {
    return this.at(-1);
};

console.log([0, 5, -5].first()); // +0
