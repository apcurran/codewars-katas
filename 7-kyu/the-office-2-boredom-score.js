"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {object} staff
 * @returns {string}
 */
function boredom(staff) {
    const departmentScores = {
        accounts: 1,
        finance: 2,
        canteen: 10,
        regulation: 3,
        trading: 6,
        change: 6,
        IS: 8,
        retail: 5,
        cleaning: 4,
        "pissing about": 25,
    };
    let teamCumulativeScore = 0;

    for (let person in staff) {
        const personDepartment = staff[person];
        const personDepartmentScore = departmentScores[personDepartment];
        teamCumulativeScore += personDepartmentScore;
    }

    if (teamCumulativeScore >= 100) {
        return "party time!!";
    } else if (teamCumulativeScore < 100 && teamCumulativeScore > 80) {
        return "i can handle this";
    } else {
        return "kill me now";
    }
}

console.log(
    boredom({
        tim: "IS",
        jim: "finance",
        randy: "pissing about",
        sandy: "cleaning",
        andy: "cleaning",
        katie: "cleaning",
        laura: "pissing about",
        saajid: "regulation",
        alex: "regulation",
        john: "accounts",
        mr: "canteen",
    }),
); // "i can handle this"
