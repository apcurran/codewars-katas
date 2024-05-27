"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number} num 
 * @returns {string}
 */
function balancedNum(num) {
    const strNum = String(num);
    // determine if oddLen or evenLen
    const isOddLength = strNum.length % 2 === 1;
    let leftDigitsSum = 0;
    let rightDigitsSum = 0;

    let left = 0;
    let right = strNum.length - 1;
    // odd length -> one middle digit
    if (isOddLength) {
        while (left < right) {
            const leftDigit = Number(strNum[left]);
            const rightDigit = Number(strNum[right]);
            leftDigitsSum += leftDigit;
            rightDigitsSum += rightDigit;
    
            left++;
            right--;
        }
    } else {
        while (left < right - 1) {
            const leftDigit = Number(strNum[left]);
            const rightDigit = Number(strNum[right]);
            leftDigitsSum += leftDigit;
            rightDigitsSum += rightDigit;
    
            left++;
            right--;
        }
    }

    return leftDigitsSum === rightDigitsSum ? "Balanced" : "Not Balanced";
}

console.log(balancedNum(7)); // "Balanced"
console.log(balancedNum(92645)); // "Not Balanced"
console.log(balancedNum(295591)); // "Not Balanced"
