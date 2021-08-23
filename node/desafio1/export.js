module.exports = {
  getFlag(flag) {
    const position = process.argv.indexOf(flag);
    return process.argv[position + 1]
  }
}