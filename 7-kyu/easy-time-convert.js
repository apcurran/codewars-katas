/**
 * solution 1
 * n = hours length
 * m = minutes length
 * time: O(n + m) -- string conversion
 * space: O(n + m)
 *
 * @param {number} num
 * @returns {string} "hh:mm"
 */
function timeConvert(num) {
    const hours = String(Math.floor(num / 60)).padStart(2, "0");
    const minutes = String(num % 60).padStart(2, "0");

    if (num <= 0) {
        return "00:00";
    } else {
        return `${hours}:${minutes}`;
    }
}

console.log(timeConvert(78)); // "01:18"
