"use strict";

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    const currDateObj = new Date(currentDate);
    const exprDateObj = new Date(expirationDate);

    if (enteredCode === correctCode && currDateObj <= exprDateObj) {
        return true;
    }

    return false;
}

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'));
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'));