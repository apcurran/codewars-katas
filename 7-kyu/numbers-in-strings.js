function solve(str){
    const numsArr = str.match(/\d+/g);
    // Arr of strings with be coerced to arr of nums during Math.max().
    const maxNum = Math.max(...numsArr);
    
    return maxNum;
}

console.log(solve("gh12cdy695m1"));