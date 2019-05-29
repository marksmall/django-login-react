import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

const url = '/accounts/login/?next=/';

Given(`I go to login page`, () => {
  cy.visit(url);
});

When(`I type "admin" into the Username field`, () => {
  const username = 'admin';
  cy.get('[name=login]')
    .type(username)
    .should('have.value', username);
});

When(`I type "password" into the Password field`, () => {
  const password = 'password';
  cy.get('[name=password]')
    .type(password)
    .should('have.value', password);
});

When(`I click "Sign In" button`, () => {
  cy.get('[type=submit]').click();
});

Then(`I am logged in and redirected to / page`, () => {
  // Verify text in URL.
  cy.url().should('contain', '/');
});
