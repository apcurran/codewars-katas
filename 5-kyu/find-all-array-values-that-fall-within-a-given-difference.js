/**
 * solution 1
 * time: O(n * log n) -- sorting
 * space: O(n)
 */
class GroupByDifference {
    /**
     * @param {number[]} numbers
     */
    constructor(numbers) {
        this.arr = numbers;
    }

    find(difference) {
        if (this.arr.length === 0) {
            return [];
        }

        const sorted = [...this.arr].sort((a, b) => a - b);

        return sorted.filter(function keepValid(currValue, index, currArr) {
            const prevNeighbor = currArr[index - 1];
            const isValidPrev = index > 0 && currValue - prevNeighbor <= difference;

            const nextNeighbor = currArr[index + 1];
            const isValidNext =
                index < currArr.length - 1 && nextNeighbor - currValue <= difference;

            return isValidPrev || isValidNext;
        });
    }
}

console.log(new GroupByDifference([5, 32, 5, 1, 31, 70, 30, 8]).find(3));
// => [5,5,8,30,31,32]
