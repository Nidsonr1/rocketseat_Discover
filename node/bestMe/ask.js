const questions = require("./questions");

const ask = ( index = 0 ) => {
  process.stdout.write("\n" + questions[index] + " -> ");
}

module.exports = ask;