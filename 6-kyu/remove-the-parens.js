
function removeParentheses(str){
    const regex = /\(([^)]+)\)+/;
    const match = regex.exec(str)[0];
    const replacedStr = str.replace(match, "");
    
    return replacedStr;
}

console.log(removeParentheses("example(unwanted thing)example"));
