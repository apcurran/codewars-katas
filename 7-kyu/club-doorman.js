function passTheDoorMan(word) {
    const doubleLettersRegex = /(.)\1/g;
    const matchedDoubles = word.match(doubleLettersRegex);
    const specialDoubleLetter = matchedDoubles[0].slice(0, 1);
    const letterAlphaPosition = specialDoubleLetter.charCodeAt(0) - 96;

    return letterAlphaPosition * 3;
}

console.log(passTheDoorMan("lettuce")); // 60
console.log(passTheDoorMan("apple")); // 48
