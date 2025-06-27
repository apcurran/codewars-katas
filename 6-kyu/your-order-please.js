function order(words) {
    return words
        .split(" ")
        .sort((wordA, wordB) => {
            return wordA.match(/\d/) - wordB.match(/\d/);
        })
        .join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
