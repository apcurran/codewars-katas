/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {any[]} array
 * @param {function} iterator
 * @returns {number} index of found or -1
 */
function findInArray(array, iterator) {
    return array.findIndex(iterator);
}

var trueIfEven = function (value, index) {
    return value % 2 === 0;
};
console.log(findInArray([1, 3, 5, 6, 7], trueIfEven)); // 3
