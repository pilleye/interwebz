const applyPrettier = (filenames) => `prettier --write ${filenames.join(' ')}`;

const applyESLint = (filenames) => `npx eslint --fix ${filenames.join(' ')}`;

const combineApplications = (fns) => (filenames) =>
  fns.map((fn) => fn(filenames));

module.exports = {
  'src/**/*.{[jt]s?(x),css}': combineApplications([applyESLint, applyPrettier]),
  '**/*.{[jt]s?(x),css,md,yml}': applyPrettier,
};
