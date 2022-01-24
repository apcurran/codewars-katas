function countPositivesSumNegatives(inputArr) {
    if (inputArr == null || inputArr.length === 0) {
      return [];
    }
    
    let positiveNumsArr = [];
    let negativeNumsTotal = 0;
    
    for (let num of inputArr) {
      if (num > 0) {
        positiveNumsArr.push(num);
      } else {
        negativeNumsTotal += num;
      }
    }
    
    return [positiveNumsArr.length, negativeNumsTotal];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])); // [10, -65]
console.log(countPositivesSumNegatives([])); // []
console.log(countPositivesSumNegatives(null)); // []