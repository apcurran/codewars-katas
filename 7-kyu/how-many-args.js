"use strict";

function args_count(...args) {
    return args.length;
}

console.log(args_count(1, 2, 3)); // 3
console.log(args_count(1, 2, 3, 10)); // 4
