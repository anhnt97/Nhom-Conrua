	Feature: Comment
    		In order to discuss with other users
		As a "Rùa đi học" user
		I need to be able to post comments
	
	Scenario: post valid comments
		Given I am on "Công suất điện xoay chiều - Video" page
		And I logged-in as "Nguyễn Tuấn Anh"
		When I fill in "Thêm bình luận..." box with "Hay lắm!"
		And I press "Đăng" button
		Then I should see "Hay lắm"
	
	Scenario: post empty comment
		Given I am on "Công suất điện xoay chiều - Video" page
		And I logged in
		When I fill in "Thêm bình luận..." with blank text
		And I press "Đăng" button
		Then I should not see my empty comment
	


	  
