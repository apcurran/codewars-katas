function isPalindrome(str) {
    const loweredStr = str.toLowerCase();
    const reversedStr = loweredStr.split("").reverse().join("");

    return loweredStr === reversedStr;
}

console.log(isPalindrome("Wwk")); // false
