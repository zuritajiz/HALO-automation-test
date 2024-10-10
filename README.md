# HALO-automation-test Cypress UI Testing Solution

This repository contains a Cypress solution designed to cover some simple UI and API test using a testing demo web.

## Overview

This solution aims to provide automated testing for E2E and API validations using Gherkin syntax to describe scenarios and steps.
Also I've tried to use the most useful features of Cucumber and BDD like Scenarios Outline and Background on tests definitions.
Page Object Model pattern was used to define site elements. This way it's easier to mantain and reuse code.
ESLint plugin was set in order to analyze and get a prettier code syntax.

## Dependencies

The following dependencies are required to run this Cypress solution:

- **Cypress**: A JavaScript-based end-to-end testing framework.
- **Cypress Cucumber Preprocessor**: Integrates Cucumber with Cypress for BDD-style testing.
- **ESLint**: A tool for identifying and fixing problems in JavaScript code.
- **Prettier**: An opinionated code formatter.
- **Faker**: A library for generating fake data.

You can find the full list of dependencies in the `package.json` file.

## Installation

To get started with this Cypress solution, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```
2. **Install Dependencies**: 
Make sure you have Node.js installed. Then, run the following command:
```
bash
npm install
```

## Running Automated Tests

To run the automated tests, you have two options:

1. Run Tests in Headless Mode: This mode runs the tests without opening the Cypress UI.
```
npx cypress run
```
2. Open Cypress UI: This option allows you to interactively run tests and see results in real-time.
```
npx cypress open
```
3. There are 2 scripts created to run E2E and API scenarios in Headless Mode.
```
npm run api
```
and
```
npm run e2e
```
These scripts starts Headless runs of the features that contains the chosen tag.