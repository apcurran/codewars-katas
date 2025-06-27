function findDifference(arrA, arrB) {
    const arrAVolume = arrA.reduce((accum, curr) => accum * curr);
    const arrBVolume = arrB.reduce((accum, curr) => accum * curr);

    return Math.abs(arrAVolume - arrBVolume);
}

console.log(findDifference([3, 2, 5], [1, 4, 4])); // 14
