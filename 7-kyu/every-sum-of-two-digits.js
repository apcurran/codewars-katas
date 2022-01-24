"use strict";


function digits(num) {
    const strNum = num.toString();
    let resultArr = [];
    
    for (let i = 0; i < strNum.length - 1; i++) {
        for (let j = i + 1; j < strNum.length; j++) {
            const outerNumDigit = Number(strNum[i]);
            const innerNumDigit = Number(strNum[j]);
            
            const digitSum = outerNumDigit + innerNumDigit;
            resultArr.push(digitSum);
        }
    }
    
    return resultArr;
}