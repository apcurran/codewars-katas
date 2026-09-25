/**
 * solution 1
 * time: O(1)
 * space: O(1) -- not including string result
 *
 * @param {number} birthYear
 * @param {number} birthMonth
 * @param {number} birthDay
 * @returns {string}
 */
function ageInDays(birthYear, birthMonth, birthDay) {
    const birth = new Date(birthYear, birthMonth - 1, birthDay); // account for Date 0-based months
    const now = new Date();

    const msPerDay = 24 * 60 * 60 * 1000;
    const totalDays = Math.floor((now - birth) / msPerDay);

    return `You are ${totalDays} days old`;
}
