function nextId(ids){
    const sortedIds = ids.sort((a, b) => a + b);
    const removedDuplicates = Array.from(new Set(sortedIds));

    let newId;
    
    for (let i = 0; i < removedDuplicates.length; i++) {
        const currId = removedDuplicates[i];

        if (currId + 1 !== removedDuplicates[i + 1]) {
            newId = currId + 1;
            break;
        }
    }

    return newId;
}

console.log( nextId([0, 1, 2, 3, 5]) ); // 4 is the next unused id in sequence
console.log( nextId([0, 1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]) ); // 11
