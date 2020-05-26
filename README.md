# Hacker News

## Tech Stack

    HTML5
    JS
    SCSS
    React
    Webpack
    Node

## How to build

To install all the npm dependency run:-

    npm install

To run client side application:-

    npm run start

To make a build of Client side application:-

    npm run build

To run application with SSR on node:-

    node index.js

## CI

Travis is being used for Continuous Integration.

https://travis-ci.com/

## CODE CONSISTENCY

### HUSKY

Husky is used to run git hook.Its prevent bad commit to push in repo.

### ESLINT

This is used to maintain code quality and consistency in JS code.

Rules meantioned in:- .eslintrc

### STYLELINT

This is used to maintain code quality and consistency in SCSS code.

Rules mentioned in:- .stylelintrc

### vscode config:-

    {
    "editor.formatOnSave": true,
    "prettier.eslintIntegration": true,
    "prettier.stylelintIntegration": true
    }

- Extension for VSCode:-

  Prettier - Code formatter
  ESLint
