"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 * 
 * @param {string} str 
 * @returns {string}
 */
function sevenAte9(str) {
    const mappedStr = str
                        .split("")
                        .map((currNum, index, currArr) => {
                            const prevNum = currArr[index - 1];
                            const nextNum = currArr[index + 1];

                            if (currNum === "9" && prevNum === "7" && nextNum === "7") {
                                return "";
                            }

                            return currNum;
                        });

    return mappedStr.join("");                        
}

console.log( sevenAte9("7979797") ); // "7777"
console.log( sevenAte9("165561786121789797") ); // "16556178612178977"
