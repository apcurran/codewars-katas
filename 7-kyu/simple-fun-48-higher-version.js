/**
 * solution 1
 * time: O(n + m)
 * space: O(n + m)
 * @param {string} ver1
 * @param {string} ver2
 * @returns {boolean} - true (1st version higher) false otherwise
 */
function higherVersion(ver1, ver2) {
    const v1 = ver1.split(".").map(Number);
    const v2 = ver2.split(".").map(Number);
    const largerArrLen = Math.max(v1.length, v2.length);

    for (let i = 0; i < largerArrLen; i++) {
        const v1Part = v1[i] || 0;
        const v2Part = v2[i] || 0;

        if (v1Part > v2Part) {
            return true;
        }

        if (v1Part < v2Part) {
            return false;
        }
    }

    return false;
}

console.log(higherVersion("1.2.2", "1.2.0")); // true
console.log(higherVersion("1.0.5", "1.1.0")); // false
