Feature: Login and Logout

Background: Go to landing page
    Given I go to the site landing page

  Scenario: Login with a valid user and validate redirection    
    When I login using "standard_user" username
    Then I should be redirected to "Products" section
    And I should validate "Products" section header title

  Scenario Outline: Login with different data and validate error message for "<user_type>" username
    When I login using "<user_type>" username and "<password>" password
    Then I should validate that error message for "<errorType>" is displayed
    Examples:
        | user_type       | password       | errorType      |
        | random name     | empty          | empty password |
        | empty           | random text    | empty username |
        | locked_out_user | valid password | locked user    |