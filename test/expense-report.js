const { describe, it } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');

const csv = require('..');

/**
 * Compare files line-by-line
 */
function compareCsv(actual, expected) {
  const a = actual.split('\n');
  const e = expected.split('\n');
  a.should.have.length(e.length);
  a.forEach(function (line, index) {
    line.should.eql(e[index]);
  });
}

function readFileSync(name) {
  return fs.readFileSync(path.join(__dirname, name), 'utf8');
}

function generateCSV(t) {
  return Array.from(csv(t)).join('');
}

describe('export expense report module', function () {

  it('test trip', function () {
    const t = require('./fixtures/test.json');
    const expected = readFileSync('fixtures/test.csv');

    const generated = generateCSV(t);
    compareCsv(generated, expected);
  });
});
