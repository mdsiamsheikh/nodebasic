const fs = require("fs");

// How to create and write file using asynchronous method
fs.writeFile("demo1.txt", "My name is MD Siam Sheikh", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
