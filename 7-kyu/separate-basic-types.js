"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {any[]} arr
 * @returns {object}
 */
function separateTypes(arr) {
    let typesObject = {};
    // iterate list
    for (let elem of arr) {
        // check element's type
        const elemType = typeof elem;

        if (typesObject[elemType] === undefined) {
            // if this type does not exist, create a property of this type and add this elem to a list
            typesObject[elemType] = [elem];
        } else {
            // otherwise, add this elem to the pre-existing property's list
            typesObject[elemType].push(elem);
        }
    }
    // return the finished object
    return typesObject;
}

console.log(separateTypes(["a", 1, 2, false, "b"]));
// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }
