function dup(strArr) {
    return strArr.map((word) => {
        return word
            .split("")
            .filter((char, index, selfArr) => {
                const prevChar = selfArr[index - 1];

                return char !== prevChar;
            })
            .join("");
    });
}

console.log(
    dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]),
);
