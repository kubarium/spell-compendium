const fs = require("fs");
const csv = require("csvtojson");
const classes = require("./classes.json");

function jsonize() {

  const headers = [
    "level",
    "name",
    "school",
    "time",
    "range",
    "components",
    "duration",
    "description",
    "class"
  ];

  return Promise.all(classes.map(file => {

    csv({noheader: true, headers, checkType: true, delimiter: ";"}).fromFile(`${file.toLowerCase()}.csv`)
      .then(materialize)
      .then(level)
      .then(concentrate)
      .then(ritualize)
      .then(jsonized => {
        fs.writeFileSync(`${file.toLowerCase()}.json`, JSON.stringify(jsonized))
      });
  }))

}

function materialize(jsonized) {
  return new Promise(resolve => {
    var materialPattern = /^(\(.*?\))/;

    jsonized.forEach(item => {
      if (RegExp(materialPattern, "g").test(item.description)) {
        var match = RegExp(materialPattern, "g").exec(item.description)[0];

        item.material = match
          .replace(")", "")
          .replace("(", "");
        item.description = item
          .description
          .replace(materialPattern, "");
      }
    });

    resolve(jsonized);
  });
}
function level(jsonized) {
  return new Promise(resolve => {
    var levelPattern = /(<br> <b>At Higher Levels<\/b>: .*)/;

    jsonized.forEach(item => {
      if (RegExp(levelPattern, "g").test(item.description)) {
        var match = RegExp(levelPattern, "g").exec(item.description)[0];

        item.higherLevel = match.replace("<br> <b>At Higher Levels</b>: ", "");
        item.description = item
          .description
          .replace(levelPattern, "");
      }
    });

    resolve(jsonized);
  });
}

function concentrate(jsonized) {
  return new Promise(resolve => {
    var concentrationPattern = /Concentration, /;

    jsonized.forEach(item => {
      item.concentration = RegExp(concentrationPattern, "g").test(item.duration);
      item.duration = item
        .duration
        .replace(concentrationPattern, "");
    });

    resolve(jsonized);
  });
}

function ritualize(jsonized) {
  return new Promise(resolve => {
    var ritualizePattern = / \(ritual\)/;

    jsonized.forEach(item => {
      item.ritual = RegExp(ritualizePattern, "g").test(item.name);
      item.name = item
        .name
        .replace(ritualizePattern, "");
    });

    resolve(jsonized);
  });
}

function amalgamate() {
  var spells = []
  classes.forEach(file => {
    spells = spells.concat(JSON.parse(fs.readFileSync(`${file}.json`, "utf8")).map(entry => {
      return {level: entry.level, name: entry.name, class: entry.class}
    }))
  })
  fs.writeFileSync(`spells.json`, JSON.stringify(spells.flat()))
}

jsonize().then(amalgamate);
