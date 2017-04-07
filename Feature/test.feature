	Feature: Do the test
	In order to test my knowledge
	As a "Rùa đi học" user
	I want to do online tests
      
    Scenario: Choose answer
		Given I am on "Kiểm tra chương I" page
		And I see a question "Một vật dao động điều hoà, trong thời gian 1 phút vật thực hiện được 30 dao động. Chu kì dao động của vật là:"
		And I see 4 empty answers radio "2s" radio, "30s" radio, "0.5s" radio, "1s" radio
		When I click on "2s" radio
		Then I should see "2s" radio is filled
		And I should see "30s" radio, "0.5s" radio, "1s" radio are empty
		When I click on "0.5s" radio
		Then I should see "0.5s" radio is filled
		And I should see "2s" radio, "30s" radio, "1s" radio are empty
		
	Scenario: Submit
		Given I am on "Kiểm tra chương I" page
		And I see a question "Một vật dao động điều hoà, trong thời gian 1 phút vật thực hiện được 30 dao động. Chu kì dao động của vật là:"
		And I see 4 empty answers radio "2s" radio, "30s" radio, "0.5s" radio, "1s" radio
		When I click on "0.5s" radio
		Then I should see "0.5s" radio is filled
		When I press "Nộp bài" button
		Then I should see "Đúng: 1/1"