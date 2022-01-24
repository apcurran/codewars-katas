/**
 * Check that all values in the array are below or equal to the limit value.
 * @param {number[]} arr - Array of numbers
 * @param {number} limit - Limit that all numbers must be lower than or equal to 
 * @returns {boolean} - true or false if the array numbers are all below or equal to the limit value.
 */
function smallEnough(arr, limit){
    for (let val of arr) {
        if (val > limit) return false;
    }

    return true;
}

console.log(smallEnough([66, 101], 200)); // true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)); // false
