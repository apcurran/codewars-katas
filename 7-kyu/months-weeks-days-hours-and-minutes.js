"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 * 
 * @param {number} totalMinutes 
 * @returns {string}
 */
function displayValue(totalMinutes) {
    const minutesInHour = 60;
    const minutesInDay = 1440;
    const minutesInWeek = 10080;
    const minutesInMonth = 40320;

    const months = Math.floor(totalMinutes / minutesInMonth);
    const formattedMonths = months > 0 ? `${months} ${months === 1 ? "month" : "months"}` : "";
    totalMinutes %= minutesInMonth;
    
    const weeks = Math.floor(totalMinutes / minutesInWeek);
    const formattedWeeks = weeks > 0 ? `${weeks} ${weeks === 1 ? "week" : "weeks"}` : "";

    totalMinutes %= minutesInWeek;

    const days = Math.floor(totalMinutes / minutesInDay);
    const formattedDays = days > 0 ? `${days} ${days === 1 ? "day" : "days"}` : "";

    totalMinutes %= minutesInDay;

    const hours = Math.floor(totalMinutes / minutesInHour);
    const formattedHours = hours > 0 ? `${hours} ${hours === 1 ? "hour" : "hours"}` : "";

    totalMinutes %= minutesInHour;

    const minutes = totalMinutes; // leftovers
    const formattedMinutes = minutes > 0 ? `${minutes} ${minutes === 1 ? "minute" : "minutes"}` : "";

    const values = [formattedMonths, formattedWeeks, formattedDays, formattedHours, formattedMinutes];

    return values
            .filter((value) => value !== "")
            .join(" ");
}

console.log(displayValue(52874)); // "1 month 1 week 1 day 17 hours 14 minutes"
