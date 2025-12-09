function reverseNumber(num) {
    const numSign = Math.sign(num); // 1 or -1, mult num later by sign
    const numWithoutSign = Math.abs(num);

    const reversedNumStr = numWithoutSign.toString().split("").reverse().join("");
    const finalReversedNum = numSign * Number(reversedNumStr);

    return finalReversedNum;
}

console.log(reverseNumber(123));
console.log(reverseNumber(-123));
console.log(reverseNumber(1000));
console.log(reverseNumber(0));
