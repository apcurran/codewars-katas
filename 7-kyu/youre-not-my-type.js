/**
 * time: O(n)
 * space: O(n)
 */
Object.defineProperty(Array.prototype, "ofType", {
    value: function ofType(myType) {
        return this.filter(function keepMatchingTypes(elem) {
            if (typeof elem === "object" || typeof elem === "function") {
                return elem instanceof myType;
            } else {
                return typeof elem === myType.name.toLowerCase();
            }
        });
    },
});

var arr = [{ a: "a" }, /a-z/, [1, 2, 3], (i) => i];
console.log(arr.ofType(Object)); // [{ a: 'a' }, /a-z/, [1, 2, 3], i=>i]
console.log(arr.ofType(RegExp)); // [/a-z/]
console.log(arr.ofType(Array)); // [[1, 2, 3]]
