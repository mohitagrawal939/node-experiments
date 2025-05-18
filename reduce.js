const users = [
    { name: "Mohit", age: 27 },
    { name: "john", age: 30 },
    { name: "Doe", age: 40 },
    { name: "asas", age: 25 },
];

const output = users.reduce(function (acc, curr) {
    if (curr.age < 30) {
        acc = [...acc, curr.name];
    }
    return acc;
}, []);

console.log(output);
