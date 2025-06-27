/**
 *
 * @param {number} seconds - Total time in number of seconds
 * @returns {string} - contains hours and minutes as a formatted string
 */
function toTime(seconds) {
    "use strict";

    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);

    return `${hours} hour(s) and ${mins} minute(s)`;
}

console.log(toTime(3600)); // '1 hour(s) and 0 minute(s)'
console.log(toTime(323500)); // '89 hour(s) and 51 minute(s)'
