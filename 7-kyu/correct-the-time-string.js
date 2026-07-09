/**
 * solution 1 -- Math
 * time: O(n)
 * space: O(n)
 *
 * @param {string} timeString
 * @returns {string}
 */
function timeCorrect(timeString) {
    // If the input-string is null or empty return exactly this value!
    if (timeString === null || timeString === "") {
        return timeString;
    }

    // Validate format using Regex (exactly "XX:XX:XX")
    const timeRegex = /^\d{2}:\d{2}:\d{2}$/;

    if (!timeRegex.test(timeString)) {
        return null;
    }

    let [hours, minutes, seconds] = timeString.split(":").map(Number);

    if (seconds >= 60) {
        minutes += Math.floor(seconds / 60);
        seconds %= 60;
    }

    if (minutes >= 60) {
        hours += Math.floor(minutes / 60);
        minutes %= 60;
    }

    hours %= 24;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

console.log(timeCorrect("11:70:10")); // "12:10:10"
