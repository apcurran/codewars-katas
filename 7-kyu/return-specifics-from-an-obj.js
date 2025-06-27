"use strict";

/**
 * 
 * @param {object} obj 
 * @returns {any[]}
 */
function returnSpecifics(obj) {
    const objEntries = Object.entries(obj);

    if (objEntries.length === 0) return ["The Object is Empty"];

    let numberValues = [];
    let functionValues = [];

    for (let [key, val] of objEntries) {
        if (typeof val === "number") {
            numberValues.push(val);
        }

        if (typeof val === "function") {
            functionValues.push(key);
        }
    }

    return [...numberValues, ...functionValues];
}

console.log( returnSpecifics(
    {
        a:1,
        b:"str",
        c:2,
        d:true,
        e:function(a){
            return a;
        },
        f:3,
    },
) ); // [1, 2, 3, "e"]
console.log( returnSpecifics({}) ); // ['The Object is Empty']
