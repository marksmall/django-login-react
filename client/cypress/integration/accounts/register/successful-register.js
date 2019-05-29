import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps';

const url = '/accounts/signup/';

Given(`I am on the registration page`, () => {
  cy.visit(url);
});

When(`I type "test@test.com" into the Email field`, () => {
  const username = 'test@test.com';
  cy.get('[name=email]')
    .type(username)
    .should('have.value', username);
});

When(`I type "testuser" into the Username field`, () => {
  const username = 'testuser';
  cy.get('[name=username]')
    .type(username)
    .should('have.value', username);
});

When(`I type "password" into the Password field`, () => {
  const password = 'password';
  cy.get('[name=password1]')
    .type(password)
    .should('have.value', password);
});

When(`I type "password" into the Password again field`, () => {
  const password = 'password';
  cy.get('[name=password2]')
    .type(password)
    .should('have.value', password);
});

When(`I click "Sign In" button`, () => {
  cy.get('[type=submit]').click();
});

Then(`I am registered and redirected to the log in page`, () => {
  // Verify page title.
  cy.title().should('eq', 'Verify Your E-mail Address');
  // Verify text in URL.
  cy.url().should('contain', '/accounts/confirm-email');
  cy.url().should('not.include', '/accounts/signup');
});
