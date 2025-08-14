"use strict";

/**
 * solution 1 -- hashmap and sort
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {array} records
 * @param {number} nTop
 * @returns {array}
 */
function topScores(records, nTop) {
    if (nTop <= 0) return [];

    let peopleMap = new Map();
    // save the highest score instance of each name
    for (let tuple of records) {
        const [name, score] = tuple;
        const previousScore = peopleMap.get(name) || 0;
        const updatedScore = Math.max(previousScore, score);
        peopleMap.set(name, Math.max(previousScore, updatedScore));
    }

    const collator = new Intl.Collator("en", { sensitivity: "base" });
    const sortedPeople = [...peopleMap.entries()].sort(
        function sortByScoreThenAlph(
            [tupleAName, tupleAScore],
            [tupleBName, tupleBScore],
        ) {
            if (tupleAScore === tupleBScore) {
                return collator.compare(tupleAName, tupleBName);
            } else {
                return tupleBScore - tupleAScore;
            }
        },
    );

    return sortedPeople.slice(0, nTop);
}

const records = [
    ["Bob", 100],
    ["Jane", 120],
    ["Alice", 10],
    ["Bob", 110],
    ["Bob", 10],
];
console.log(topScores(records, 3));
// [["Jane", 120], ["Bob", 110], ["Alice", 10]]

console.log(
    topScores(
        [
            ["Sauron", 1000],
            ["Frodo", 500],
            ["Frank", 500],
            ["Bilbo", 100],
        ],
        3,
    ),
);
// [
//     ["Sauron", 1000],
//     ["Frank", 500],
//     ["Frodo", 500],
// ];
