/**
 * solution 1 -- array methods
 * time: O(n * log n)
 * space: O(n)
 *
 * @param {{
 *  name: string,
 *  expiryDays: number,
 *  isAlmostEmpty: boolean
 * }[]} items
 */
function fridgeOrganizer(items) {
    const alphabeticalComparison = new Intl.Collator("en");

    return items
        .filter(function removeSpoiledItems(item) {
            return item.expiryDays >= 0;
        })
        .sort(function sortItems(itemA, itemB) {
            if (itemA.isAlmostEmpty !== itemB.isAlmostEmpty) {
                if (itemA.isAlmostEmpty) {
                    return -1;
                } else {
                    return 1;
                }
            }

            if (itemA.expiryDays !== itemB.expiryDays) {
                return itemA.expiryDays - itemB.expiryDays;
            }

            return alphabeticalComparison.compare(itemA.name, itemB.name);
        })
        .map(function getNameOnly(item) {
            return item.name;
        });
}

const items = [
    { name: "Milk", expiryDays: 3, isAlmostEmpty: false },
    { name: "Jam", expiryDays: 3, isAlmostEmpty: true },
    { name: "Yogurt", expiryDays: 1, isAlmostEmpty: false },
    { name: "Old Meat", expiryDays: -1, isAlmostEmpty: true },
    { name: "Today's Tofu", expiryDays: 0, isAlmostEmpty: false },
];
console.log(fridgeOrganizer(items));
// ["Jam", "Today's Tofu", "Yogurt", "Milk"]
