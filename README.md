# Tictactoe [![Build Status](https://travis-ci.com/natealcedo/tictactoe.svg?branch=master)](https://travis-ci.com/natealcedo/tictactoe) [![Coverage Status](https://coveralls.io/repos/github/natealcedo/tictactoe/badge.svg?branch=master)](https://coveralls.io/github/natealcedo/tictactoe?branch=master) [![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://cypress.io) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest) [![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/facebook/jest)


## Steps to setup development environment

1. run `npm install`
2. run `npm start`

This will open a browser tab on `localhost:3000`

## Running tests

__Unit Tests__ 
This repo uses [jest](htts://jestjs.io) for unit tests

1. To run the full unit test suite, run `npm run test`.
2. To run it in watch/development mode, run `npm run test:watch`

__End to end tests__

This repo uses [cypress](https://cypress.io) for end to end to end tests.

1. To run in headless mode, run `npm run test:e2e`
2. To run in development mode, run `npm run cypress:open`