/**
 * solution 1
 * time: O(1) -- fixed arr size (4)
 * space: O(1) -- fixed arr size (4)
 *
 * @param {string[]} birthdays
 * @returns {string}
 */
function showMyPassword(birthdays) {
    birthdays.sort(function sortByDatesAsc(a, b) {
        return new Date(a) - new Date(b);
    });
    const [dad, mom, john, gf] = birthdays;

    // get last 2 digits for the year of John's birth
    const johnsDigits = john.split("-")[0].slice(-2);
    // last two digits of the year of John's girlfriend's birth
    const gfDigits = gf.split("-")[0].slice(-2);
    // month of John's dad's birth(if the month less than 10, digit 5 should be `0`)
    const dadDigits = dad.split("-")[1].padStart(2, "0");
    // day of John's mom's birth(if the day less than 10, digit 7 should be `0`)
    const momsDigits = mom.split("-")[2].padStart(2, "0");

    return `${johnsDigits}${gfDigits}${dadDigits}${momsDigits}`;
}

console.log(
    showMyPassword(["1968-1-2", "1980-8-15", "1982-9-20", "1966-12-3"]),
); // "80821202"
