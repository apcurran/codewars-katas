function add(a, b) {
    if (Number(a) < Number.MAX_SAFE_INTEGER && Number(b) < Number.MAX_SAFE_INTEGER) {
        const sum = Number(a) + Number(b);

        return String(sum);
    }

    const bigIntA = BigInt(a);
    const bigIntB = BigInt(b);
    const bigIntsSum = bigIntA + bigIntB;

    return String(bigIntsSum);
}

console.log(add("1", "1")); // "2"
console.log(add("123", "456")); // "579"
console.log(add("63829983432984289347293874", "90938498237058927340892374089"));