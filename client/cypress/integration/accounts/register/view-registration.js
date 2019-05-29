import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = '/accounts/signup/';

Given(`I go to registration page`, () => {
  cy.visit(url);
});

Then(`I see the "Registration" page`, () => {
  // Verify page title.
  cy.title().should('eq', 'Signup');
  // Verify text in URL.
  cy.url().should('contain', '/accounts/signup');
  cy.url().should('not.include', '/login');
});
