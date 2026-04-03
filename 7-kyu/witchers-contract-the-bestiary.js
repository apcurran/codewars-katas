/**
 * solution 1
 * n = number of monsters in bestiary
 * m = number of observedWeaknesses
 * k = average number of weaknesses per monster (array length inside bestiary)
 *
 * time: O(n * m * k)
 * space: O(1)
 *
 * @param {string[]} observedWeaknesses
 * @param {object} bestiary
 * @returns {string|"Unknown monster"} - monster name or unknown
 */
function identifyMonster(observedWeaknesses, bestiary) {
    // iterate bestiary object
    monsterObjLoop: for (let monster in bestiary) {
        // check current monster weaknesses in bestiary against observed weaknesses
        const monsterWeaknesses = bestiary[monster];

        for (let observedWeakness of observedWeaknesses) {
            if (!monsterWeaknesses.includes(observedWeakness)) {
                continue monsterObjLoop;
            }
        }
        // if all observed weaknesses are present, return current monster
        return monster;
    }
    // after iterating entire bestiary obj and no match -> return unknown
    return "Unknown monster";
}

const bestiary = {
    Griffin: ["Grapeshot", "Hybrid Oil", "Aard"],
    Noonwraith: ["Yrden", "Moon Dust", "Specter Oil"],
    Drowner: ["Igni", "Necrophage Oil"],
};

console.log(identifyMonster(["Igni", "Necrophage Oil"], bestiary));
// Returns: "Drowner"

console.log(identifyMonster(["Yrden", "Moon Dust"], bestiary));
// Returns: "Noonwraith" (since these vulnerabilities are in its list)

console.log(identifyMonster(["Silver", "Garlic"], bestiary));
// Returns: "Unknown monster"
