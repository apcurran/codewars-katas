function longest(words) {
    const sortedWords = words.sort(
        (wordA, wordB) => wordB.length - wordA.length,
    );

    return sortedWords[0].length;
}

console.log(longest(["simple", "is", "better", "than", "complex"]), 7);
// console.log(longest(['explicit', 'is', 'better', 'than', 'implicit']), 8);
// console.log(longest(['beautiful', 'is', 'better', 'than', 'ugly']), 9);
