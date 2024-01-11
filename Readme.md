[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# expense-report

Generate CSV expense report from [Furkot] trip data.

## Install

```sh
$ npm install --save @furkot/export-expense-report
```

## Usage

```js
const expenseReport = require('@furkot/export-expense-report');

expenseReport(trip);
```

## License

MIT © [Natalia Kowalczyk](https://melitele.me)

[Furkot]: https://trips.furkot.com

[npm-image]: https://img.shields.io/npm/v/@furkot/export-expense-report
[npm-url]: https://npmjs.org/package/@furkot/export-expense-report

[build-url]: https://github.com/furkot/export-expense-report/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/furkot/export-expense-report/check.yaml?branch=main

[deps-image]: https://img.shields.io/librariesio/release/npm/@furkot/export-expense-report
[deps-url]: https://libraries.io/npm/@furkot%2Fexport-expense-report
