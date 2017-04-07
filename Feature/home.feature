	Feature: "Rùa đi học" Homepage
    		As a user of "Rùa đi học"
    		So that I can get the information about videos, tests on "Rùa đi học" Homepage
      
    	Scenario: Choosing a video
		Given I am on "Rùa đi học" Homepage
	   	And I see 3 videos
	    	When I press "Xem ngay" button under "Công suất điện xoay chiều" video
	    	Then I should see "Công suất điện xoay chiều - Video" page loads
	    	And I should see the video, comment box, comments

	Scenario: Choosing a test
		Given I am on "Rùa đi học" Homepage
		And I see 1 test
		When I click on "Kiểm tra chương I"
		Then I should see "Kiểm tra chương I - Test" page load
		And I should see the test, "Nộp bài" button
