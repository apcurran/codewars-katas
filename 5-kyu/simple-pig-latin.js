function pigIt(str){
    return str
        .split(" ")
        .map(word => {
            const firstLetter = word.charAt(0);

            if (firstLetter === "?" || firstLetter === "!" || firstLetter === ".") {
                return firstLetter;
            }

            const restOfWord = word.slice(1);
            const piggedWord = `${restOfWord}${firstLetter}ay`;
            
            return piggedWord;
        })
        .join(" ");
}

console.log(pigIt('Pig latin is cool')); // 'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')); // 'hisTay siay ymay tringsay'
console.log(pigIt('Hello world !')); // 'elloHay orldway !'