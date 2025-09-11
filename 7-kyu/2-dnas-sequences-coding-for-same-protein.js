const codons = {
    TTC: "F",
    TTT: "F",
    TTA: "L",
    TTG: "L",
    CTT: "L",
    CTC: "L",
    CTA: "L",
    CTG: "L",
    ATT: "I",
    ATC: "I",
    ATA: "I",
    ATG: "M",
    GTT: "V",
    GTC: "V",
    GTA: "V",
    GTG: "V",
    TCT: "S",
    TCC: "S",
    TCA: "S",
    TCG: "S",
    AGT: "S",
    AGC: "S",
    CCT: "P",
    CCC: "P",
    CCA: "P",
    CCG: "P",
    ACT: "T",
    ACC: "T",
    ACA: "T",
    ACG: "T",
    GCT: "A",
    GCC: "A",
    GCA: "A",
    GCG: "A",
    TAT: "Y",
    TAC: "Y",
    CAT: "H",
    CAC: "H",
    CAA: "Q",
    CAG: "Q",
    AAT: "N",
    AAC: "N",
    AAA: "K",
    AAG: "K",
    GAT: "D",
    GAC: "D",
    GAA: "E",
    GAG: "E",
    TGT: "C",
    TGC: "C",
    TGG: "W",
    CGT: "R",
    CGC: "R",
    CGA: "R",
    CGG: "R",
    AGA: "R",
    AGG: "R",
    GGT: "G",
    GGC: "G",
    GGA: "G",
    GGG: "G",
    TAA: "*",
    TGA: "*",
    TAG: "*",
};

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} seq1
 * @param {string} seq2
 * @returns {boolean}
 */
function codeForSameProtein(seq1, seq2) {
    if (seq1.length !== seq2.length) return false;

    let seq1Protein = "";
    let seq2Protein = "";

    for (let i = 0; i < seq1.length; i += 3) {
        const seq1Triplet = seq1.slice(i, i + 3);
        // get triplet matching amino acid in hashtable
        const seq1AminoAcid = codons[seq1Triplet];
        seq1Protein += seq1AminoAcid;

        const seq2Triplet = seq2.slice(i, i + 3);
        const seq2AminoAcid = codons[seq2Triplet];
        seq2Protein += seq2AminoAcid;
    }

    return seq1Protein === seq2Protein;
}

console.log(codeForSameProtein("ATGTTTTAA", "ATGTTCTAA")); // true
