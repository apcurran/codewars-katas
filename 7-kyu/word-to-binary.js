"use strict";

function wordToBin(str){
    const binStr = str
                    .split("")
                    .map((char) => {
                        return char
                                .charCodeAt(0)
                                .toString(2)
                                .padStart(8, "0");
                    });

    return binStr;
}

console.log(wordToBin("man"));