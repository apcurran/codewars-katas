function sortByLength (arr) {
    // Return an array containing the same strings, ordered from shortest to longest
    return arr.sort((wordA, wordB) => wordA.length - wordB.length);
}

console.log((sortByLength(["Longer", "Longest", "Short"]))); // ["Short", "Longer", "Longest"]