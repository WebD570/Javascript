function makeStrings(arr) {
    return arr.map(person => {
        if (person.age >= 18) {
            return `${person.name} to seen the moveis`;
        } else {
            return `${person.name} not seen the movies`;
        }
    });
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
