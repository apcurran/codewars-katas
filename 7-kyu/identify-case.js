/**
 * solution 1 -- regex
 * time: O(n)
 * space: O(1)
 *
 * @param {string} str
 * @returns {"kebab"|"camel"|"snake"|"none"}
 */
function id(str) {
    const kebabCase = /^[a-z]+(-[a-z]+)+$/;
    const camelCase = /^[a-z]+([A-Z][a-z]*)+$/;
    const snakeCase = /^[a-z]+(_[a-z]+)+$/;

    if (kebabCase.test(str)) {
        return "kebab";
    } else if (camelCase.test(str)) {
        return "camel";
    } else if (snakeCase.test(str)) {
        return "snake";
    } else {
        return "none";
    }
}

console.log(id("hello-world")); // "kebab"
console.log(id("hello-to-the-world")); // "kebab"
console.log(id("helloWorld")); // "camel"
console.log(id("helloToTheWorld")); // "camel"
console.log(id("hello_world")); // "snake"
console.log(id("hello_to_the_world")); // "snake"
console.log(id("hello__world")); // "none" (double underscore)
console.log(id("hello_World")); // "none" (uppercase in snake)
console.log(id("helloworld")); // "none" (no separator/caps)
console.log(id("hello-World")); // "none" (uppercase in kebab)
