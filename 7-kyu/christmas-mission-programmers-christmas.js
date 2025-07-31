"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n)
 *
 * @param {function[]} availableFuncs
 * @returns {string}
 */
function merryChristmas(availableFuncs) {
    const PHRASE = "Merry Christmas!";
    let results = [];

    for (let char of PHRASE) {
        // iterate funcs by calling each one and checking if equal
        for (let fn of availableFuncs) {
            if (fn() === char) {
                results.push(fn.name);
                // exit early, already found what we're looking for
                break;
            }
        }
    }

    return results.join(",");
}

var a = (x) => "M",
    b = (_) => "e",
    c = (_) => "r",
    d = (_) => "y",
    e = (_) => "C",
    f = (_) => "h",
    g = (_) => "i",
    h = (_) => "s",
    i = (_) => "t",
    j = (_) => "m",
    k = (_) => "a",
    l = (_) => " ",
    m = (_) => "!",
    funcs = [a, b, c, d, e, f, g, h, i, j, k, l, m];
console.log(merryChristmas(funcs)); // "a,b,c,c,d,l,e,f,c,g,h,i,j,k,h,m"
