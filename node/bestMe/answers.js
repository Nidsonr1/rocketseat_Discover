const questions = require('./questions');
const ask = require('./ask');

const answers = [];

process.stdin.on("data", data => {
  answers.push(data.toString().trim() + '\n');
  if(answers.length < questions.length) {
    ask(answers.length)
  } else {
    process.exit();
  }
  
});

module.exports = answers;