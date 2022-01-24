function findMultiples(integer, limit) {
    let resultArr = [];
    
    for (let i = integer; i <= limit; i += integer) {
      resultArr.push(i);
    }
    
    return resultArr;
}

// console.log((findMultiples(5, 25))); // [5, 10, 15, 20, 25]
console.log((findMultiples(1, 2))); // [1, 2]