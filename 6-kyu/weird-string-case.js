function toWeirdCase(str){
    const wordsArr = str.split(" ");
    let casedWordsArr = [];
    
    for (let word of wordsArr) {
        const casedWord = word
                            .split("")
                            .map((letter, index) => {
                                if (index % 2 === 0) {
                                    // Letter index is even
                                    return letter.toUpperCase();
                                } else {
                                    return letter.toLowerCase();
                                }
                            })
                            .join("");
        
        casedWordsArr.push(casedWord);
    }

    return casedWordsArr.join(" ");
}

console.log(toWeirdCase("String"));//=> returns "StRiNg")
console.log((toWeirdCase('This is a test'))); // 'ThIs Is A TeSt'