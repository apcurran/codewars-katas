function daysRepresented(tripsArr) {
    const representedDaysArr = tripsArr.map((innerArr) => (innerArr[1] - innerArr[0]) + 1);
    const totalRepresentedDays = representedDaysArr.reduce((accum, curr) => accum + curr, 0);
    
    return totalRepresentedDays;
}

console.log(daysRepresented([[10, 15], [25, 35]])); // 17
console.log(daysRepresented([[2, 8], [220, 229], [10, 16]])); // 24
