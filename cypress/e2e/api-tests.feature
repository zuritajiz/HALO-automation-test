@API
Feature: API tests

Scenario: Login via API with valid credentials and validate that token is valid
    When I login via API
    Then I validate that token is valid

Scenario: Login via API with invalid credentials and validate response status and error message
    When I login via API using invalid credentials
    Then I validate that API response contains Invalid credentials message

Scenario Outline: Get products list filtered by "<productName>" and validate stock
    When I get Products list filtered by "<productName>" name via API
    Then I validate that exists <productStock> products in the list
    Examples:
        | productName | productStock |
        | phone       | 23           |
        | camera      | 13           |

Scenario: Add new Product via API and validate that was correctly added
    When I add a new Product with the following attributes
      | producTitle   | productPrice |
      | Test product  | 15.45        |
      | Microphone    | 299.99       |