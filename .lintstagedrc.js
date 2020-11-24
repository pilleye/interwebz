const applyPrettier = (filenames) =>
  filenames.map((filename) => `prettier --write "${filename}"`);

const applyESLint = (filenames) =>
  filenames.map((filename) => `eslint --fix "${filename}"`);

const combineApplications = (fns) => (filenames) =>
  fns.map((fn) => fn(filenames).join(' && '));

module.exports = {
  'src/**/*.{[jt]s?(x),css}': combineApplications([applyESLint, applyPrettier]),
  '**/*.{[jt]s?(x),css,md,yml}': applyPrettier,
};
