Feature: Register

  Scenario: View registration page
    Given I go to registration page
    Then I see the "Registration" page

  Scenario: Successfully register
    Given I am on the registration page
    When I type "test@test.com" into the Email field
    When I type "testuser" into the Username field
    When I type "password" into the Password field
    When I type "password" into the Password again field
    When I click "Sign In" button
    Then I am registered and redirected to the log in page
