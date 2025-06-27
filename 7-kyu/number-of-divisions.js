function numOfDivisions(n, divisor) {
    let totalDivisions = 0;
    // Calc the next division and possible remainder
    let nDivided = 0;
    let nRemainder = 0;
    
    while (nRemainder === 0) {
        // Increment divisions by one
        totalDivisions++;

        nDivided = n / divisor; // 3

        if (!Number.isInteger(nDivided)) {
            totalDivisions++;
        }
        
        nRemainder = nDivided % divisor; // 3 % 2 REMAINDER!!! STOP HERE
    }

    return totalDivisions;
}

console.log(numOfDivisions(6, 2));
