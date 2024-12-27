const fs = require("fs");
const https = require("https");

console.log("Start");

https.get("https://www.google.com", (res) => {
    console.log("Got response");
});

setTimeout(() => {
    console.log("SetTimeout called");
}, 5000);

fs.readFile("test.txt", "utf-8", (err, data) => {
    console.log("File read done");
});

function testing() {
    console.log("Testing function");
}

testing();

console.log("End");
