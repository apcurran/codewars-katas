"use strict";

/**
 * solution 1
 * time: O(n * log n) -- sort
 * space: O(n) -- sort
 *
 * @param {number[]} party
 * @returns {number}
 */
function partyPeople(party) {
    party.sort(function sortDesc(personA, personB) {
        return personB - personA;
    });

    let peopleStayingCount = party.length;

    for (let partyPeoplePreference of party) {
        if (partyPeoplePreference > peopleStayingCount) {
            peopleStayingCount--;
        }
    }

    return peopleStayingCount;
}

console.log(partyPeople([4, 5, 4, 1])); // 1
console.log(partyPeople([10, 12, 15, 15, 5])); // 0
