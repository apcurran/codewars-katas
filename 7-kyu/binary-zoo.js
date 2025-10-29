/**
 * solution 1
 * time: O(n)
 * space: O(1)
 *
 * @param {object} animals
 * @returns {number}
 */
function countTheAnimals(animals) {
    let totalAnimals = 0;

    for (let key in animals) {
        const animalCountBin = animals[key] || 0;
        const animalCountNum = parseInt(animalCountBin, 2);
        totalAnimals += animalCountNum;
    }

    return totalAnimals;
}

console.log(
    countTheAnimals({
        aardvark: "1101",
        tiger: "1100",
        donkey: "1100",
        emu: "1010",
    }),
);
// 47
