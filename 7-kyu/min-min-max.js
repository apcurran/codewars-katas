/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {number[]} arr 
 * @returns {number[]}
 */
function minMinMax(arr) {
    const smallest = Math.min(...arr);
    const largest = Math.max(...arr);
    const uniqueNumbers = new Set(arr);
    let minimumAbsent = null;

    for (let i = smallest; i < largest; i++) {
        if (!uniqueNumbers.has(i)) {
            minimumAbsent = i;
            break;
        }
    }

    return [smallest, minimumAbsent, largest];
}

console.log( minMinMax([-1, 4, 5, -23, 24]) ); // [-23, -22, 24]
