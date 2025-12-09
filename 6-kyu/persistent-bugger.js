/**
 * Function that takes in a positive parameter num and returns its multiplicative persistence,
 * which is the number of times you must multiply the digits in num until you reach a single digit.
 * @param {number} num
 * @returns {number} - number for multiplicative persistence
 */
function persistence(num) {
    let splitStrNum = num.toString();
    let multiplicativePersistence = 0;

    while (splitStrNum.length > 1) {
        multiplicativePersistence++;

        const multipliedNum = splitStrNum.split("").reduce((prevNum, currNum) => {
            return Number(prevNum) * Number(currNum);
        });
        splitStrNum = multipliedNum.toString();
    }

    return multiplicativePersistence;
}

console.log(persistence(39)); // 3
