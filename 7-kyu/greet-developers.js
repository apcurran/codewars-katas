function greetDevelopers(arr) {
    return arr.map((obj) => {
        return {
            ...obj,
            greeting: `Hi ${obj.firstName}, what do you like the most about ${obj.language}?`,
        };
    });
}

console.log(
    greetDevelopers([
        {
            firstName: "Sofia",
            lastName: "I.",
            country: "Argentina",
            continent: "Americas",
            age: 35,
            language: "Java",
        },
        {
            firstName: "Lukas",
            lastName: "X.",
            country: "Croatia",
            continent: "Europe",
            age: 35,
            language: "Python",
        },
        {
            firstName: "Madison",
            lastName: "U.",
            country: "United States",
            continent: "Americas",
            age: 32,
            language: "Ruby",
        },
    ]),
);
