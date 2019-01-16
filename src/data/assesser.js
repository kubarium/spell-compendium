const fs = require("fs");
const http = require("http");
const classes = require("./classes.json");
function assesser() {
  let modified = JSON.parse(
    fs.readFileSync("last-modified.json", {
      encoding: "utf8"
    })
  );

  classes.forEach(file => {
    http.get(`http://hardcodex.ru/csv/${file.toLocaleLowerCase()}.csv`, res => {
      if (modified[file] < new Date(res.headers["last-modified"]).getTime()) {
        modified[file] = new Date(res.headers["last-modified"]).getTime();

        fs.writeFile("last-modified.json", JSON.stringify(modified), err => {
          if (err) {
            console.log(err);
          }
        });

        console.log(`${file} has changed on the server.`);
      }
    });
  });
}
assesser();
