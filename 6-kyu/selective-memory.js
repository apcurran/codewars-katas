"use strict";

/**
 * solution 1
 * time: O(n^2)
 * space: O(n + m)
 *
 * @param {string} memories
 * @returns {string}
 */
function select(memories) {
    let hateList = [];
    const memoriesList = memories.split(", ");

    for (let i = 0; i < memoriesList.length; i++) {
        const memory = memoriesList[i];

        if (memory[0] === "!") {
            // current person
            hateList.push(memory);
            hateList.push(memory.slice(1));
            // next person
            hateList.push(memoriesList[i + 1]);
        }
    }

    const updatedMemories = memoriesList.filter((person) => {
        return !hateList.includes(person);
    });

    return updatedMemories.join(", ");
}

console.log(
    select(
        "Albert Einstein, !Sarah Connor, Marilyn Monroe, Abraham Lincoln, Sarah Connor, Sean Connery, Marilyn Monroe, Bjarne Stroustrup, Manson Marilyn, Monroe Mary",
    ),
);
// "Albert Einstein, Abraham Lincoln, Sean Connery, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"
