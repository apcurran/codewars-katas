function gcd(a, b) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    
    return a;
}
  
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

/**
 * 
 * @param {Array[]} pairs - Array of arrays
 * @returns {number} - Return the sum of differences between products and LCMs 
 */
function sumDifferencesBetweenProductsAndLCMs(pairs){
    let finalResult = 0;

    for (let innerArr of pairs) {
        const product = innerArr.reduce((prevNum, currNum) => prevNum * currNum);
        const leastCommonMultiple = lcm(...innerArr);
        const differenceBetweenProductAndLcm = product - leastCommonMultiple;

        finalResult += differenceBetweenProductAndLcm;
    }

    return finalResult;
}

// console.log(sumDifferencesBetweenProductsAndLCMs([[15,18], [4,5], [12,60]]));
console.log((sumDifferencesBetweenProductsAndLCMs([[1,1], [0,0], [13,91]])));