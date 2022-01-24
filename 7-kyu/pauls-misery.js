function paul(arr){
    const valsMap = new Map([
        ["kata", 5],
        ["Petes kata", 10],
        ["life", 0],
        ["eating", 1]
    ]);

    const numArrSum = arr
                        .reduce((total, curr) => total + valsMap.get(curr), 0);

    if (numArrSum >= 100) {
        return "Miserable!";
    } else if (70 <= numArrSum && numArrSum < 100) {
        return "Sad!";
    } else if (40 <= numArrSum && numArrSum < 70) {
        return "Happy!";
    } else if (numArrSum < 40) {
        return "Super happy!";
    }
}

console.log(paul(['life', 'eating', 'life'])); // "Super happy!"
console.log(paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating'])); // "Super happy!"
console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating'])); // "Happy!"
console.log(paul(["eating","kata","life","eating","eating","kata","life","Petes kata","Petes kata","kata","life","eating","life","eating","life","kata","eating","kata","kata","Petes kata","kata","kata","kata","life","eating","kata"])); // "Happy!"