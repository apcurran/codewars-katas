"use strict";

function color2grey(clrImg) {
    return clrImg.map((innerArr) => {
        return innerArr.map((secondInnerArr) => {
            const totalPixelVal = secondInnerArr.reduce((total, currVal) => total + currVal, 0);
            const avgPixelVal = Math.round(totalPixelVal / 3);
            const greyscaledArr = [avgPixelVal, avgPixelVal, avgPixelVal];

            return greyscaledArr;
        });
    });
}

console.log(
    color2grey([
        [
            [123, 231, 12],
            [56, 43, 124],
        ],
        [
            [78, 152, 76],
            [64, 132, 200],
        ],
    ]),
); // [[[122,122,122],[74,74,74]],[[102,102,102],[132,132,132]]]
