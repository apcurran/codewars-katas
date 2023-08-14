// /**
//  * solution 1
//  * time: O(n)
//  * space: O(n)
//  * 
//  * @param {number} n 
//  * @returns {number}
//  */
// function minDistance(n) {
//     const factors = getFactors(n);
    
//     if (factors.length <= 1) return 0;

//     let min = factors[1] - factors[0];
    
//     for (let i = 2; i < factors.length; i++) {
//         const currentFactor = factors[i];
//         const previousFactor = factors[i - 1];
//         const difference = currentFactor - previousFactor;
//         min = Math.min(min, difference);
//     }

//     return min;
// }

// /**
//  * @param {number} num 
//  * @returns {number[]}
//  */
// function getFactors(num) {
//     return [...Array(num + 1).keys()]
//                 .filter((i) => num % i === 0);
// }

/**
 * solution 2
 * time: O(n)
 * space: O(1)
 * 
 * @param {number} n 
 * @returns {number}
 */
function minDistance(n) {
    let min = n;
    let previous = 1;

    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            // is a factor of n
            const currentDifference = i - previous;
            min = Math.min(min, currentDifference);
            previous = i;
        }
    }

    return min;
}

console.log(minDistance(36)); // 1
