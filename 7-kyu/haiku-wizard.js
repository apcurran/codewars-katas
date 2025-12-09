"use strict";

const words = [
    ["like", "a", "tweet", "what", "for", "world", "whale", "one", "last", "sun"],
    [
        "ocean",
        "beauty",
        "tweet",
        "monster",
        "yellow",
        "return",
        "despair",
        "flower",
        "return",
        "contrast",
    ],
    [
        "romantic",
        "curious",
        "banana",
        "jealousy",
        "tactlessly",
        "remorseful",
        "follower",
        "elephant",
        "however",
        "instagram",
    ],
    [
        "salmonella",
        "consequently",
        "irregular",
        "intelligence",
        "vegetable",
        "ordinary",
        "alternative",
        "watermelon",
        "controversial",
        "marijuana",
    ],
    [
        "lackadaisical",
        "serendipity",
        "colonoscopy",
        "dramatically",
        "parsimonius",
        "imagination",
        "electricity",
        "diabolical",
        "deforestation",
        "abomination",
    ],
    [
        "extraterrestrial",
        "onomatopoeia",
        "responsibility",
        "revolutionary",
        "generalisation",
        "enthusiastically",
        "biodiversity",
        "veterinarian",
        "characteristically",
        "indefatigable",
    ],
    [
        "oversimplification",
        "individuality",
        "decriminalisation",
        "compartmentalisation",
        "anaesthesiologist",
        "industrialisation",
        "buckminsterfullerene",
        "irresponsibility",
        "autobiographical",
        "utilitarianism",
    ],
];

/**
 * solution 1
 * n = arr length
 * m = subArr length
 * time: O(n * m)
 * space: O(n * m)
 *
 * @param {number[][]} arr
 * @returns {string} finished haiku with newline breaks (\n)
 */
function haikuWizard(arr) {
    let lines = [];

    for (let numLine of arr) {
        let currentLine = [];

        for (let num of numLine) {
            const strNum = String(num);
            const syllableArr = Number(strNum[0]) - 1;
            const syllableArrSubIndex = Number(strNum[1]);
            const word = words[syllableArr][syllableArrSubIndex];
            currentLine.push(word);
        }

        const finishedLine = currentLine.join(" ");
        lines.push(finishedLine);
    }

    return lines.join("\n");
}

console.log(
    haikuWizard([
        [10, 11, 23, 16],
        [50, 12, 14],
        [15, 40],
    ]),
);
