function evenOrOdd(strNum) {
    let evenSum = 0;
    let oddSum = 0;

    for (let val of strNum) {
        const currValNum = Number(val);

        if (currValNum % 2 === 0) { // Even val
            evenSum += currValNum;
        } else {
            oddSum += currValNum;
        }
    }

    if (evenSum > oddSum) {
        return "Even is greater than Odd";
    } else if (oddSum > evenSum) {
        return "Odd is greater than Even";
    } else {
        return "Even and Odd are the same";
    }
}

console.log(evenOrOdd("12")); //'Even is greater than Odd'
console.log(evenOrOdd("123")); //'Odd is greater than Even'
console.log(evenOrOdd("112")); //'Even and Odd are the same'