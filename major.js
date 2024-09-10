function makeStrings(arr) {
    const major = [];
    const minors = [];
    
    for (i = 0; i < arr.length; i++) {
      if (arr[i].age >= 18) {
        major.push(`${arr[i].name} `);
      } else {
        minors.push(`${arr[i].name} `);
      }
    }
    
    return [major, minors];
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
