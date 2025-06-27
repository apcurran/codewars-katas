function twiceAsOld(dadAge, sonAge) {
    const twiceAge = sonAge * 2;

    return Math.abs(dadAge - twiceAge);
}

console.log(twiceAsOld(36, 7)); // 22
console.log(twiceAsOld(55, 30)); // 5
