10 + 20;
const a = 6;
a * 5;
const fs = require("fs");
fs.writeFileSync("test.txt", "hello world!");
fs.readFileSync("test.txt", "utf8");
fs.readFileSync("test.txt", "hex");
fs.readFileSync("test.txt", "utf8");
fs.writeFile("test3.txt", "this is test number 3", (err) => {
  if (err) throw err;
});

fs.readFile("test3.txt", "utf8", (err, data) => {
  console.log(data);
});
