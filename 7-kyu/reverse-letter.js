const startMarker = "Start";
const endMarker = "End";

// Method 1
function reverseLetter(str) {
    const alphabeticStrOnly = str.replace(/[^a-zA-Z]/g, "");

    return alphabeticStrOnly
        .split("")
        .reverse()
        .join("");
}

// Method 2
// function reverseLetter(str) {
//     const alphabeticStrOnly = str.replace(/[^a-zA-Z]/g, "");
//     let reversedStr = "";
    
//     for (let i = alphabeticStrOnly.length - 1; i >= 0; i--) {
//         reversedStr += alphabeticStrOnly[i];
//     }
    
//     return reversedStr;
// }

// Start measurement
performance.mark(startMarker);
reverseLetter("ultr53o?n");
performance.mark(endMarker);
// End measurement
performance.measure("Measure start to end", startMarker, endMarker);
console.log(performance.getEntriesByType("measure"));
