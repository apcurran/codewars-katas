"use strict";

/**
 * solution 1
 * time: O(1)
 * space: O(1)
 *
 * @param {Date} birthday
 * @returns {string}
 */
function getVillainName(birthday) {
    const m = [
        "Evil",
        "Vile",
        "Cruel",
        "Trashy",
        "Despicable",
        "Embarrassing",
        "Disreputable",
        "Atrocious",
        "Twirling",
        "Orange",
        "Terrifying",
        "Awkward",
    ];
    const d = [
        "Mustache",
        "Pickle",
        "Hood Ornament",
        "Raisin",
        "Recycling Bin",
        "Potato",
        "Tomato",
        "House Cat",
        "Teaspoon",
        "Laundry Basket",
    ];

    const birthdayMonth = birthday.getMonth();
    const villainFirstName = m[birthdayMonth];
    const birthdayDay = birthday.getDate();
    const villainLastName = d[birthdayDay % 10];

    return `The ${villainFirstName} ${villainLastName}`;
}

console.log(getVillainName(new Date("May 3"))); // "The Despicable Raisin"
