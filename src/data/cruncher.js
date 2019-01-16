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

    console.clear();
    var jsonized = csv({noheader: true, headers, checkType: true, delimiter: ";"}).fromFile(`${file.toLocaleLowerCase()}.csv`)
      .then(materialize)
      .then(level)
      .then(jsonized => fs.writeFileSync(`${file.toLocaleLowerCase()}.json`, JSON.stringify(jsonized)));
  });
}

function materialize(jsonized) {
  return new Promise(resolve => {
    var materialPattern = /^(\(.*?\))/;

    jsonized.forEach(item => {
      if (RegExp(materialPattern, "g").test(item.Description)) {
        var match = RegExp(materialPattern, "g").exec(item.Description)[0];

        item.Material = match
          .replace(")", "")
          .replace("(", "");
        item.Description = item
          .Description
          .replace(materialPattern, "");
      }
    })

    resolve(jsonized)
  })
}
function level(jsonized) {
  return new Promise(resolve => {

    var levelPattern = /(<br> <b>At Higher Levels<\/b>: .*)/;

    jsonized.forEach(item => {

      if (RegExp(levelPattern, "g").test(item.Description)) {
        var match = RegExp(levelPattern, "g").exec(item.Description)[0];

        item.HigherLevel = match.replace("<br> <b>At Higher Levels<\/b>: ", "");
        item.Description = item
          .Description
          .replace(levelPattern, "");
      }
    })

    resolve(jsonized)

  })
}

jsonize();
