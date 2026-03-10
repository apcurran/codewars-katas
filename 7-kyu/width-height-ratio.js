/**
 * solution 1
 * time: O(log max(a, b))
 * space: O(1)
 *
 * @param {*} w
 * @param {*} h
 * @returns {string} - ratios like "16:9"
 */
function calculateRatio(w, h) {
    if (w === 0 || h === 0) {
        throw new Error("Cannot use 0");
    }

    const gcd = calcGCD(w, h);
    const widthRatioValue = w / gcd;
    const heightRatioValue = h / gcd;

    return `${widthRatioValue}:${heightRatioValue}`;
}

console.log(calculateRatio(1920, 1080)); // "16:9"

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function calcGCD(a, b) {
    let positiveA = Math.abs(a);
    let positiveB = Math.abs(b);

    while (positiveB) {
        const tempB = positiveB;
        positiveB = positiveA % positiveB;
        positiveA = tempB;
    }

    return positiveA;
}
