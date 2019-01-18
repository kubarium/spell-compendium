const fs = require("fs");
const csv = require("csvtojson");
const classes = require("./classes.json");

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

    csv({
      noheader: true,
      headers,
      checkType: true,
      delimiter: ";"
    })
      .fromFile(`${file.toLocaleLowerCase()}.csv`)
      .then(materialize)
      .then(level)
      .then(concentrate)
      .then(ritualize)
      .then(jsonized =>
        fs.writeFileSync(
          `${file.toLocaleLowerCase()}.json`,
          JSON.stringify(jsonized)
        )
      );
  });
}

function materialize(jsonized) {
  return new Promise(resolve => {
    var materialPattern = /^(\(.*?\))/;

    jsonized.forEach(item => {
      if (RegExp(materialPattern, "g").test(item.Description)) {
        var match = RegExp(materialPattern, "g").exec(item.Description)[0];

        item.Material = match.replace(")", "").replace("(", "");
        item.Description = item.Description.replace(materialPattern, "");
      }
    });

    resolve(jsonized);
  });
}
function level(jsonized) {
  return new Promise(resolve => {
    var levelPattern = /(<br> <b>At Higher Levels<\/b>: .*)/;

    jsonized.forEach(item => {
      if (RegExp(levelPattern, "g").test(item.Description)) {
        var match = RegExp(levelPattern, "g").exec(item.Description)[0];

        item.HigherLevel = match.replace("<br> <b>At Higher Levels</b>: ", "");
        item.Description = item.Description.replace(levelPattern, "");
      }
    });

    resolve(jsonized);
  });
}

function concentrate(jsonized) {
  return new Promise(resolve => {
    var concentrationPattern = /Concentration, /;

    jsonized.forEach(item => {
      item.Concentration = RegExp(concentrationPattern, "g").test(
        item.Duration
      );
      item.Duration = item.Duration.replace(concentrationPattern, "");
    });

    resolve(jsonized);
  });
}

function ritualize(jsonized) {
  return new Promise(resolve => {
    var ritualizePattern = / \(ritual\)/;

    jsonized.forEach(item => {
      item.Ritual = RegExp(ritualizePattern, "g").test(item.Name);
      item.Name = item.Name.replace(ritualizePattern, "");
    });

    resolve(jsonized);
  });
}

jsonize();
