Feature: Running Cucumber with Protractor sign in 
    As a user 
    I should be able to sign in
    @authorization
    Scenario: Login
       Given I go to "https://dev.by/"
        When I navigate to the sign in page
        And I sign in with username "ksenia3", password "Dev678"
        Then I should be taken to the main page 
    @authorization @ignore
	 Scenario: Check user info
		When I navigate to the user page
		Then I check username "ksenia3" and email "ksu.novikova@gmail.com"
