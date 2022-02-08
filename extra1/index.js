let people = [
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
        name: "Kanye West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    },
];

let result = [];

function namesOnly(arr) {
    arr.map(function(person){
        return result.push(person.name);
    });
    return result;
}

console.log(namesOnly(people))