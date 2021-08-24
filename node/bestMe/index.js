const ask = require('./ask');
const answers = require('./answers');

ask();

process.on('exit', () => {
  console.log(`
    Bacana Nidson!

    O que você aprendeu hoje foi: ${answers[0]};

    O que te aborreceu e você poderia melhorar foi: ${answers[1]}

    O que te deixou feliz foi: ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje!!

    Volte amanhã para novas reflexões!
  `);
});