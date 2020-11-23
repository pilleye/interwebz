module.exports = {
  "**/*.{[jt]s?(x),md,yml}": (filenames) =>
    filenames.map((filename) => `prettier --write '${filename}'`),
};
