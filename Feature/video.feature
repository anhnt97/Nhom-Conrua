	Feature: Play video
    In order to learn a lecture
	As a "Rùa đi học" user
	I need to be able to watch the whole of videos
	
	Scenario: Watch video
		Given I am on "Công suất điện xoay chiều - Video" page
		And I see a video lecture
		When I click on "Công suất điện xoay chiều" video
		Then I should see "Công suất điện xoay chiều" video is playing
		When I click on playing video
		Then the video is pausing
	
	  