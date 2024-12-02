"use strict";

/**
 * solution 1 -- two pointer technique
 * time: O(n)
 * space: O(1)
 * 
 * @param {number[]} arr 
 * @returns {void}
 */
function reverse(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const leftValue = arr[left];
        const rightValue = arr[right];
        arr[left] = rightValue;
        arr[right] = leftValue;

        left++;
        right--;
    }
}

console.log(reverse([1,2,3,4,5])); // arr = [5,4,3,2,1]
