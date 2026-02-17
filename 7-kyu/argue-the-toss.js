/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {...string} things
 * @returns {string}
 */
function anArgument(...things) {
    if (things.length === 0) {
        return "You didn't give me any arguments.";
    }

    if (things.length === 1) {
        return `You gave me 1 argument and it is "${things[0]}".`;
    }

    const quotedThings = things.map(function addQuotesToThings(str) {
        return `"${str}"`;
    });
    // GB format to remove oxford comma before "and"
    const formatter = new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" });
    const formattedList = formatter.format(quotedThings);

    return `You gave me ${things.length} arguments and they are ${formattedList}.`;
}

console.log(anArgument("chairs", "table", "lamp", "sideboard"));
// 'You gave me 4 arguments and they are "chairs", "table", "lamp" and "sideboard".'
