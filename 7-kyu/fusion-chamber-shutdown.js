/**
 * solution 1 -- math
 * time: O(1)
 * space: O(1)
 *
 * @param {number} c
 * @param {number} h
 * @param {number} o
 * @returns {[number, number, number]}
 */
function burner(c, h, o) {
    const waterMolecules = Math.min(Math.floor(h / 2), o);
    h = h - 2 * waterMolecules;
    o = o - waterMolecules;

    const carbonDioxideMolecules = Math.min(c, Math.floor(o / 2));
    c = c - carbonDioxideMolecules;
    o = o - 2 * carbonDioxideMolecules;

    const methaneMolecules = Math.min(c, Math.floor(h / 4));

    return [waterMolecules, carbonDioxideMolecules, methaneMolecules];
}

console.log(burner(45, 11, 100)); // [5, 45, 0]
console.log(burner(354, 1023230, 0)); // [0, 0, 354]
