/**
 * solution 1
 * time: O(a + b)
 * space: O(a + b)
 *
 * @param {Array} colleagueDays
 * @param {Array} myDays
 * @returns {"Right"|"Wrong"|"Same"|"Not possible"}
 */
function holidayCount(colleagueDays, myDays) {
    const colleagueDaysNum = colleagueDays.filter(onlyNum);
    const myDaysNum = myDays.filter(onlyNum);

    if (colleagueDaysNum.length === 0 || myDaysNum.length === 0) {
        return "Not possible";
    } else if (colleagueDaysNum[0] > myDaysNum[0]) {
        return "Right";
    } else if (colleagueDaysNum[0] < myDaysNum[0]) {
        return "Wrong";
    } else {
        return "Same";
    }
}

console.log(holidayCount(["g", 3, "a"], ["j", 2, "r"])); // "Right"
console.log(
    holidayCount(
        ["code", "is", 146.7, "good", "I", "hope", 35],
        [102, "and", "hopefully", "also", "this", "passes"],
    ),
); // "Wrong"

/**
 * @param {any} value
 * @returns {boolean}
 */
function onlyNum(value) {
    return Number.isFinite(value) && Number.isInteger(value);
}
