const fs = require("fs");

const dir = `${__dirname}/src`;

console.log(process.argv);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

fs.writeFile(`${dir}/config.js`, "yo", function(err) {
  if (err) {
    console.log("Error in writing the config file", err);
  }
});

