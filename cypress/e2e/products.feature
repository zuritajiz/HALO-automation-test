@E2E
Feature: Products

Background: Go to landing page
    Given I go to the site landing page
    And I login using "standard_user" username
    Then I should be redirected to "Products" section

  Scenario Outline: Validate that items are correctly sorted by "<selectOption>"
    When I select "<selectOption>" option from Product Sort select
    Then I get all Items price and validate that are sorted in "<sortType>" order
    Examples:
        | selectOption        | sortType   |
        | Price (low to high) | ascending  |
        | Price (high to low) | descending |