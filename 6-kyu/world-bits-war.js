/**
 * solution 1
 * n = numbers length
 * m = num digits for stringification
 * time: O(n * m)
 * space: O(m)
 *
 * @param {number[]} numbers
 * @returns {"odds win" | "evens win" | "tie"}
 */
function bitsWar(numbers) {
    let evenNumBitsTotal = 0;
    let oddNumBitsTotal = 0;

    for (let num of numbers) {
        const numBinary = num.toString(2);
        let oneBitsSum = 0;

        for (let digit of numBinary) {
            if (digit === "1") oneBitsSum++;
        }

        oneBitsSum *= Math.sign(num);

        if (num % 2 === 0) {
            evenNumBitsTotal += oneBitsSum;
        } else {
            oddNumBitsTotal += oneBitsSum;
        }
    }

    if (evenNumBitsTotal > oddNumBitsTotal) {
        return "evens win";
    } else if (evenNumBitsTotal < oddNumBitsTotal) {
        return "odds win";
    } else {
        return "tie";
    }
}

console.log(bitsWar([1, 5, 12])); // "odds win"
console.log(bitsWar([7, -3, 20])); // "evens win"
console.log(bitsWar([7, -3, -2, 6])); // "tie"
