function calculate1RM(weight, reps) {
    if (reps === 0) {
        return 0;
    } else if (reps === 1) {
        return weight;
    }

    const epley1RM = Math.round(weight * (1 + reps / 30));
    const mcglothin1RM = Math.round((100 * weight) / (101.3 - 2.67123 * reps));
    const lombardi1RM = Math.round(weight * reps ** 0.1);

    return Math.max(epley1RM, mcglothin1RM, lombardi1RM);
}

console.log(calculate1RM(135, 20)); // expect 282
console.log(calculate1RM(200, 8)); // expect 253
