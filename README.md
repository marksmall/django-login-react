# Accounts

- [Accounts](#accounts)
  - [Overview](#overview)
  - [API](#api)

## Overview

This project is an example of using [django-rest-auth](https://django-rest-auth.readthedocs.io/en/latest/index.html)

## API

1. Register:
    ```bash
    curl -X POST "http://localhost:8000/rest-auth/registration/" -H "Content-Type: application/json" -H 'Cookie: csrftoken=5OWwQ5ktpFreZaX3j7hltTrMuM7ojQBWUom7Tfx8y2NBAORe1kjCLVS75QZk0n94' -H "X-CSRFToken: 5OWwQ5ktpFreZaX3j7hltTrMuM7ojQBWUom7Tfx8y2NBAORe1kjCLVS75QZk0n94" -d '{"username":"msmall","email":"marksmall@gmx.com","password1":"S50sf4gT","password2":"S50sf4gT"}'
    ```

    **Response:** `{"detail":"Verification e-mail sent."}`
1. Verify Email:
    ```bash
    curl -X POST 'http://localhost:8000/rest-auth/registration/verify-email/' -H 'accept: application/json' -H 'Content-Type: application/json' -H 'X-CSRFToken: 5OWwQ5ktpFreZaX3j7hltTrMuM7ojQBWUom7Tfx8y2NBAORe1kjCLVS75QZk0n94' -d '{ "key": "Mw:1hUujc:c8terSkIJEe6iA9s644Fll8_Kzc"}'
    ```

    **Response:** `{"detail":"ok"}`
1. Login:
     ```bash
    curl -X POST 'http://localhost:8000/rest-auth/login/' -H 'accept: application/json' -H 'Content-Type: application/json' -H 'X-CSRFToken: 5OWwQ5ktpFreZaX3j7hltTrMuM7ojQBWUom7Tfx8y2NBAORe1kjCLVS75QZk0n94' -d '{ "username": "msmall", "email": "marksmall@gmx.com", "password": "S50sf4gT"}'
    ```

    **Response:** `{"key":"6bceb14464751474831edfc9fbf6c67470ee85bc"}`

A useful development tool is **Swagger**, you can see the whole **API** and how to interact with it at [Swagger](http://localhost:8000/swagger/)

[Back to Top](#login-api)
