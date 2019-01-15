const fs = require("fs");
const path = require("path");
const csv = require("csvtojson");

var classes = [
  "Bard",
  "Cleric",
  "Druid",
  "Paladin",
  "Ranger",
  "Sorcerer",
  "Warlock",
  "Wizard"
];

function jsonize() {
  classes.forEach(file => {
    const headers = [
      "Level",
      "Name",
      "School",
      "Time",
      "Range",
      "Components",
      "Duration",
      "Description",
      "Class"
    ];

    //const spellFile = `${file.toLocaleLowerCase()}.csv`;

    //var content = fs.readFileSync(path.resolve(spellFile), { encoding: "utf8" });
    /* 
  var hasHeader = content.split("\n")[0] == header;

  if (!hasHeader) {
    fs.writeFileSync(spellFile, `${header}\n${content}`);
  } */

    //console.log(`${header}\n${content}`);
    console.clear();
    var jsonized = csv({
      noheader: true,
      headers,
      delimiter: ";"
    })
      .fromFile(`${file.toLocaleLowerCase()}.csv`)
      .then(jsonObj => {
        fs.writeFileSync(
          `${file.toLocaleLowerCase()}.json`,
          JSON.stringify(jsonObj)
        );
      });
  });
}

jsonize();
