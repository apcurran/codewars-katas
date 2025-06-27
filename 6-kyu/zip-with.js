"use strict";

/**
 * solution 1
 * n = smaller list length of a0 and a1
 * time: O(n)
 * space: O(n)
 *
 * @param {function} fn
 * @param {number[]} a0
 * @param {number[]} a1
 * @returns {number[]}
 */
function zipWith(fn, a0, a1) {
    const shorterList = a0.length < a1.length ? a0 : a1;

    return shorterList.map((shorterListNum, index) => {
        const a0Num = a0[index];
        const a1Num = a1[index];

        return fn(a0Num, a1Num);
    });
}

console.log(zipWith(Math.pow, [10, 10, 10, 10], [0, 1, 2, 3])); //  [1,10,100,1000]
console.log(
    zipWith(
        function (a, b) {
            return a + b;
        },
        [0, 1, 2, 3],
        [0, 1, 2, 3],
    ),
); //  [0,2,4,6]
console.log(zipWith((a, b) => a + b, [0, 1, 2, 3, 4], [6, 5, 4, 3, 2, 1])); // [6,6,6,6,6  ]
