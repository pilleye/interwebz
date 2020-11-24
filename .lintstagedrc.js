module.exports = {
  '**/*.{[jt]s?(x),md,yml,css}': (filenames) =>
    filenames.map((filename) => `prettier --write '${filename}'`),
};
