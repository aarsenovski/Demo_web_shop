# Web browser automation project for Demo Web Shop website

\*\*Version 1.0.0

This repo consists of example of a suite of test cases regarding various actions a user can perform on the website. It tries to implement several best practices according to Cypress documentation about organizing tests, selecting elements, as well as setting up and controlling state of the application.

Page Object Model (POM) pattern is used to create an object repository for storing all web elements locators per page. Tests included in this repo tend to cover real user scenarios and generally cover 3 phases:

1. Set up the application state.

2. Take an action.

3. Make an assertion about the resulting application state.

## :gear: Setup

1. Clone the repo:

   ```
   git clone https://github.com/aarsenovski/Demo_web_shop
   ```

2. Install project dependencies:
   ```
   yarn install
   ```

---

## :bulb: Information

#### :test_tube: Configuration:

:file_folder: Tests are located in `cypress/e2e` folder

:file_folder: Fixtures (test data) are located in `cypress/fixtures` folder

:file_folder: Custom commands are located in `cypress/support` folder

:file_folder: Selectors (Page object patterns) are located in `cypress/pages` folder

:page_facing_up: Main config file where default behavior of Cypress can be modified. -`cypress.config.js` file

#### :test_tube: Run tests:

- run tests in headless mode:

```
yarn cypress run
```

- run tests within Cypress Launchpad:

```
yarn cypress open
```

- see available options and help:

```
yarn cypress --help
```

## Contributor

- Andrej Arsenovski - <andrejarsenovski@gmail.com> - 2024

---

## License and copyright

```

```
