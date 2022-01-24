function solution(val){
    const valStr = String(val);
    const paddedStr = valStr.padStart(5, 0);

    return `Value is ${paddedStr}`
}

console.log(solution(5)); // "Value is 00005"
console.log(solution(1204)); // "Value is 01204"