function gridMap(fn, arr) {
    return arr.map((innerArr) => innerArr.map(fn));
}

console.log(gridMap((x) => x + 1, [
        [1, 2, 3],
        [4, 5, 6]
    ]
));