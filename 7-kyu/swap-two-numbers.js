"use strict";

/**
 *
 * @param {[number, number]} ary
 * @returns {[number, number]}
 */
const swap = (ary) => ([ary[0], ary[1]] = [ary[1], ary[0]]);

console.log(swap([123, 456])); // [456, 123]
