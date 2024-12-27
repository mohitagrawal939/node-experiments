const crypto = require("crypto");

console.log("Start");

crypto.pbkdf2Sync("a", "b", 100000, 512, "sha512");
console.log("Hash: 1 this will block I/O");

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("Hash: 2 this will not block I/O");
});

console.log("End");
