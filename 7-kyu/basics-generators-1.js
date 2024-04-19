"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @returns {Generator}
 */
function* generator() {
    let counter = 1;

    while (true) {
        const result = yield counter;

        if (result) {
            counter = result;
        } else {
            counter++;
        }
    }
}

const myGenerator = generator();
console.log((myGenerator.next().value)); // 1, "Gen => 1"));
console.log((myGenerator.next().value)); // 2, "Gen => 2"));
console.log((myGenerator.next().value)); // 3, "Gen => 3"));
console.log((myGenerator.next().value)); // 4, "Gen => 4"));
console.log((myGenerator.next().value)); // 5, "Gen => 5"));
console.log((myGenerator.next(10).value)); // 10, "Gen => 10"));
