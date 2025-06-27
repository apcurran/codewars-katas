function high(str){
    const alphabetMap = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
        ["d", 4],
        ["e", 5],
        ["f", 6],
        ["g", 7],
        ["h", 8],
        ["i", 9],
        ["j", 10],
        ["k", 11],
        ["l", 12],
        ["m", 13],
        ["n", 14],
        ["o", 15],
        ["p", 16],
        ["q", 17],
        ["r", 18],
        ["s", 19],
        ["t", 20],
        ["u", 21],
        ["v", 22],
        ["w", 23],
        ["x", 24],
        ["y", 25],
        ["z", 26],
    ]);
    
    const wordsArr = str.split(" ");
    const wordMap = new Map();
    let highestWordPts = 0;
    
    for (let word of wordsArr) {
        const splitWordArr = word.split("");

        const wordTotalPts = splitWordArr.reduce((wordPts, letter) => {
            const letterPts = alphabetMap.get(letter);

            return wordPts + letterPts;
        }, 0);
        // Now map word to total pts for that word
        // wordMap.set(word, wordTotalPts);
        wordMap.set(wordTotalPts, word);
        // Now set highest word pt if applicable
        if (highestWordPts < wordTotalPts) {
            highestWordPts = wordTotalPts;
        }
    }

    const highestWord = getByMapVal(wordMap, highestWordPts);

    return highestWord;
}

function getByMapVal(map, searchVal) {
    for (let [key, val] of map.entries()) {
        if (val === searchVal) {
            return key;
        }
    }
}

console.log(high("man i need a taxi up to ubud")); // taxi
