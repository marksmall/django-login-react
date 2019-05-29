import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = '/';

Given(`I go to / url`, () => {
  cy.visit(url);
});

Then(`I see the "Login" page`, () => {
  // Verify page title.
  cy.title().should('eq', 'Sign In');
  // Verify text in URL.
  cy.url().should('include', '/accounts/login/?next=/');
  cy.url().should('not.include', '/hub');
  cy.url().should('not.include', '/flooder');
  // Verify text on screen.
  cy.contains('Log In');
  cy.contains('Username');
  cy.contains('Password');
});
