/**
 * Given a string made up of letters a, b, and/or c,
 * switch the position of letters a and b (change a to b and vice versa).
 * Leave any incidence of c untouched.
 * @param {string} str 
 * @returns {string}
 */
function switcheroo(str){
    return str.replace(/a|b/gi, (char) => char === "a" ? "b" : "a");
}

console.log(switcheroo("aabbbcab"));
