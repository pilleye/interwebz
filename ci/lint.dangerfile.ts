import { fail } from 'danger';
import fs from 'fs';

const lintFile = process.env.TMPFILE;

const linterOutput = fs.readFileSync(lintFile).toString();

if (linterOutput.length > 0) {
  let message =
    'There are errors with linting, fix locally with `yarn lint:fix`.\n';
  message += '```diff\n' + linterOutput + '\n```\n';
  fail(message);
}
