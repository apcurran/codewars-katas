"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} singleStrand
 * @returns {string}
 */
function decomposeSingleStrand(singleStrand) {
    let frame1Values = [];

    for (let i = 0; i < singleStrand.length; i += 3) {
        const segment = singleStrand.slice(i, i + 3);
        frame1Values.push(segment);
    }

    let frame2Values = [singleStrand[0]];

    for (let i = 1; i < singleStrand.length; i += 3) {
        const segment = singleStrand.slice(i, i + 3);
        frame2Values.push(segment);
    }

    let frame3Values = [singleStrand.slice(0, 2)];

    for (let i = 2; i < singleStrand.length; i += 3) {
        const segment = singleStrand.slice(i, i + 3);
        frame3Values.push(segment);
    }

    const frame1Section = frame1Values.join(" ");
    const frame2Section = frame2Values.join(" ");
    const frame3Section = frame3Values.join(" ");

    return `Frame 1: ${frame1Section}\nFrame 2: ${frame2Section}\nFrame 3: ${frame3Section}`;
}

console.log(decomposeSingleStrand("AGGTGACACCGCAAGCCTTATATTAGC"));
// "Frame 1: AGG TGA CAC CGC AAG CCT TAT ATT AGC\nFrame 2: A GGT GAC ACC GCA AGC CTT ATA TTA GC\nFrame 3: AG GTG ACA CCG CAA GCC TTA TAT TAG C"
