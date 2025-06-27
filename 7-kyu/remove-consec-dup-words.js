const removeConsecutiveDuplicates = (str) => {
    const wordsArr = str.split(" ");
    let resWordArr = [];

    for (let i = 0; i < wordsArr.length; i++) {
        const currWord = wordsArr[i];
        const nextWord = wordsArr[i + 1];

        if (nextWord !== currWord) {
            resWordArr.push(currWord);
        }
    }

    return resWordArr.join(" ");
};

console.log(
    removeConsecutiveDuplicates(
        "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta",
    ),
); // "alpha beta gamma delta alpha beta gamma delta"
