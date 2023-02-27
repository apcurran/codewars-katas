"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} name 
 * @returns {string}
 */
function initializeNames(name) {
    const nameParts = name.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts[nameParts.length - 1];

    if (nameParts.length === 1) return firstName;

    if (nameParts.length === 2) return `${firstName} ${lastName}`;

    let middleInitials = [];

    for (let i = 1; i < nameParts.length - 1; i++) {
        const middleName = nameParts[i];
        const middleInitial = `${middleName[0]}.`;
        middleInitials.push(middleInitial);
    }

    const middleInitialsString = middleInitials.join(" ");

    return `${firstName} ${middleInitialsString} ${lastName}`;
}

console.log( initializeNames("Lois Mary Lane") ); // 'Lois M. Lane'
console.log( initializeNames("Dimitri") ); // 'Dimitri'
console.log( initializeNames("Alice Betty Catherine Davis") ); // 'Alice B. C. Davis'
