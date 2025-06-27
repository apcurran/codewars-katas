"use strict";

function swapVowelCase(str) {
    return str.replace(/[aeiou]/gi, swap);
}

function swap(vowel) {
    if (vowel === vowel.toUpperCase()) {
        return vowel.toLowerCase();
    }

    return vowel.toUpperCase();
}
