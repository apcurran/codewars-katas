"use strict";

function sumOfIntegersInString(str) {
    const matchesArr = str.match(/\d+/g);

    if (!matchesArr) return 0;

    return matchesArr.reduce((total, curr) => total + Number(curr), 0);
}

console.log(
    sumOfIntegersInString(
        "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog",
    ),
); // 3635
console.log(sumOfIntegersInString("Dogs are our best friends."));
