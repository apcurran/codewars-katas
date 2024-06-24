"use strict";

/**
 * @param {number[]} arr 
 * @returns {number}
 */
function multi(arr) {
    return arr.reduce(function getProduct(product, currentNum) {
        return product * currentNum;
    }, 1);
}

/**
 * @param {number[]} arr 
 * @returns {number}
 */
function add(arr) {
    return arr.reduce(function getSum(sum, currentNum) {
        return sum + currentNum;
    }, 0);
}

/**
 * @param {string} str 
 * @returns {string}
 */
function reverse(str) {
    return str.split("").reverse().join("");
}
