function sumSquareEvenRootOdd(nums) {
    let total = 0;

    for (let num of nums) {
        if (num % 2 === 0) {
            const squared = num ** 2;

            total += squared;
        } else {
            const root = Math.sqrt(num);

            total += root;
        }
    }

    return Number(total.toFixed(2));
}

console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0])); // 91.61
console.log(sumSquareEvenRootOdd([1, 14, 9, 8, 17, 21])); // 272.71
