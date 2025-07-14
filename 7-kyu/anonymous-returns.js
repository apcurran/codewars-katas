"use strict";

/**
 * solution 1
 */
let alpha = {
    name: "My Alpha",
    getNameFunc: function () {
        return () => {
            return this.name;
        };
    },
};

// /**
//  * solution 2
//  */
// let alpha = {
//     name: "My Alpha",
//     getNameFunc: function () {
//         return function () {
//             return this.name;
//         }.bind(this);
//     },
// };

console.log(alpha.getNameFunc()()); // "My Alpha"
