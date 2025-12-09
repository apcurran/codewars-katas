/**
 * solution 1
 *
 * @param {array} people
 * @param {function} classifier
 * @param {function} downstream
 * @param {function} accumulatorSupplier
 * @returns {Map}
 */
function groupBy(people, classifier, downstream, accumulatorSupplier) {
    let results = new Map();

    for (let person of people) {
        const key = classifier(person);
        const current = results.has(key) ? results.get(key) : accumulatorSupplier();
        const downstreamResult = downstream(current, person);
        results.set(key, downstreamResult);
    }

    return results;
}
