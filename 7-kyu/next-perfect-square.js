function findNextSquare(num) {
    // Return the next square if sq is a perfect square, -1 otherwise
    const squareRootNum = Math.sqrt(num);

    if (!Number.isInteger(squareRootNum)) {
        return -1;
    }

    const nextSquareRootNum = squareRootNum + 1;
    
    return nextSquareRootNum ** 2;
}

console.log(findNextSquare(121));