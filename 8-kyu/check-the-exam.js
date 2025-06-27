function checkExam(answerArr, studentAnswersArr) {
    let score = 0;

    answerArr.forEach((answer, index) => {
        if (answer === studentAnswersArr[index]) {
            score += 4;
        } else if (studentAnswersArr[index] === "") {
            score += 0;
        } else {
            score -= 1;
        }
    });

    return score < 0 ? 0 : score;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])); // 7
