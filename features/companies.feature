	Feature: Running Cucumber with Protractor sign in 
    As a user 
    I should be able to find a company

	@companies 
    Scenario: Open companies page
    	Given I go to "https://dev.by/"
		When I navigate to the companies page
		Then the title  should be "Все компании | dev.by"
		And companies table should be on page

	@companies
	Scenario: Find specific company
		When I navigate to the companies page
		And I search for company "epam" and navigate to the company's page
		Then the title  should be "EPAM | dev.by"

	@companies
	Scenario: Сheck company contacts
		#When I go to the "epam" page
		Then I check contacts: mail "info@epam.com" phone"+375 (17) 3890100 " site "www.epam.by"


