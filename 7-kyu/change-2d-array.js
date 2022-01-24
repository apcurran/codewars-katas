"use strict";

function change2dArray(arr) {
    let arrCopy = [...arr];
    
    arrCopy.forEach((innerArr, outerIndex) => {
        if (innerArr[outerIndex] < 0) {
            innerArr[outerIndex] = 0;
        } else {
            innerArr[outerIndex] = 1;
        }
    });

    return arrCopy;
}

console.log(change2dArray(
    [
        [-1,  4, -5, -9,  3 ],
        [ 6, -4, -7,  4, -5 ],
        [ 3,  5,  0, -9, -1 ],
        [ 1,  5, -7, -8, -9 ],
        [-3,  2,  1, -5,  6 ]
    ]
));