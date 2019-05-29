Feature: Login

  Scenario: Redirect to "/accounts/login/?next=/" if not logged in already
    Given I go to / url
    Then I see the "Login" page

  Scenario: Successfully login
    Given I go to login page
    When I type "admin" into the Username field
    When I type "password" into the Password field
    When I click "Sign In" button
    Then I am logged in and redirected to / page

