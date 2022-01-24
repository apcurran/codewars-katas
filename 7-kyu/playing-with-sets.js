"use strict";

const a = new Set([1, 2]);
const b = new Set([2, 3]);

function union(a, b) {
    const resultArr = [...a, ...b];

    return new Set(resultArr);
}

console.log(union(a, b));