const str = "zeroninenine";
const myRegex = /(zero)(nine)/gi;
const replaced = str.replace(myRegex, "$1 $2");
console.log(replaced);