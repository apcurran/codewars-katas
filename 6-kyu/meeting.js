"use strict";

/**
 * Solution 1
 * Time: O(n)
 * Space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function meeting(str) {
    const nameArr = str
        .toUpperCase()
        .split(";");
    const orderedNames = nameArr.map((name) => {
        const [firstName, lastName] = name.split(":");

        return [lastName, firstName];
    });
    
    const alphaOrderedNames = orderedNames.sort((a, b) => {
        const [aLastName, aFirstName] = a;
        const [bLastName, bFirstName] = b;

        if (aLastName === bLastName) {
            // Compare first names if last names are the same
            if (aFirstName === bFirstName) {
                return 0;
            } else if (aFirstName < bFirstName) {
                return -1;
            } else {
                return 1;
            }
        } else if (aLastName < bLastName) {
            return -1;
        } else {
            return 1;
        }
    });

    const formattedNamesArr = alphaOrderedNames.map((fullName) => {
        const [lastName, firstName] = fullName;

        return `(${lastName}, ${firstName})`;
    });

    return formattedNamesArr.join("");
}

console.log( meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill") ); // "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
