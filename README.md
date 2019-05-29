# Accounts

- [Accounts](#accounts)
  - [Overview](#overview)
  - [API](#api)
  - [End-to-End Testing](#end-to-end-testing)
    - [Install and Setup Cypress](#install-and-setup-cypress)
    - [Cucumber Tests](#cucumber-tests)

## Overview

This project is an example of using [django-rest-auth](https://django-rest-auth.readthedocs.io/en/latest/index.html)

## API

1. Register:
    ```bash
    curl -X POST "http://localhost:8000/api/auth/registration/" -H 'accept: application/json' -H "Content-Type: application/json" -H "X-CSRFToken: 5OWwQ5ktpFreZaX3j7hltTrMuM7ojQBWUom7Tfx8y2NBAORe1kjCLVS75QZk0n94" -d '{"username":"msmall","email":"marksmall@gmx.com","password1":"S50sf4gT","password2":"S50sf4gT"}'
    ```

    **Response:** `{"detail":"Verification e-mail sent."}`
1. Verify Email:
    ```bash
    curl -X POST 'http://localhost:8000/api/auth/registration/verify-email/' -H 'accept: application/json' -H 'Content-Type: application/json' -H 'X-CSRFToken: 5OWwQ5ktpFreZaX3j7hltTrMuM7ojQBWUom7Tfx8y2NBAORe1kjCLVS75QZk0n94' -d '{ "key": "Mw:1hUujc:c8terSkIJEe6iA9s644Fll8_Kzc"}'
    ```

    **Response:** `{"detail":"ok"}`
1. Login:
     ```bash
    curl -X POST 'http://localhost:8000/api/auth/login/' -H 'accept: application/json' -H 'Content-Type: application/json' -H 'X-CSRFToken: 5OWwQ5ktpFreZaX3j7hltTrMuM7ojQBWUom7Tfx8y2NBAORe1kjCLVS75QZk0n94' -d '{ "username": "msmall", "email": "marksmall@gmx.com", "password": "S50sf4gT"}'
    ```

    **Response:** `{"key":"6bceb14464751474831edfc9fbf6c67470ee85bc"}`

A useful development tool is **Swagger**, you can see the whole **API** and how to interact with it at [Swagger](http://localhost:8000/swagger/)

[Back to Top](#accounts)

## End-to-End Testing

### Install and Setup Cypress

1. Install Cypress: `yarn e2e:install`
1. Setup Cypress with examples: `yarn e2e`. **NOTE:** You will see a new window, with a dialog, stating it has added some **examples** in the `cypress/integration` directory. Click **OK, got it!** button
1. Remove `""ignoreTestFiles": "*.js",` from `cypress.json` file to see the examples. This config allows us to focus on **Feature** files only.
1. Add `cypress-cucumber-preprocessor` config so cypress can use **Cucumber** syntax. Edit: `cypress/plugins/index.js` to include:

```JavaScript
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = (on, config) => {
  on('file:preprocessor', cucumber())
}
```

**NOTE:** In CI at least, we will use `yarn e2e:run`, this will run a headless version of the tests.

### Cucumber Tests

This project uses [Cucumber](https://cucumber.io/docs) to run **End-to-End** tests. You can see an example in the `$PROJ_ROOT/client/cypress/integration/accounts` directory. You create a **Feature** file, written in [Gherkin](https://cucumber.io/docs/gherkin/), then write the **Steps**, involved in satisfying the **Feature**.

[Back to Top](#accounts)

