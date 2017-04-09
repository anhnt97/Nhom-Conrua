Given /^I am on "Rua di hoc" homepage$/ do
	brower goto "http://hackermon.tk"
end

And /^I see (\d+) video$/ do |video_count|
	page.should have video_count video
end	

When /^When I press "([^\"]*)" under "([^\"]*)" $/ do |Xem ngay" button, "Công suất điện xoay chiều" video|
	click_button("Xem ngay" button)
end

Then /^ I should see (.+)$/ do |page_name|
	visit path_to(page_name)
end

And /^I should see \/([^\/]*)\/$/ do |regexp|
      regexp = Regexp.new(regexp)
      page.should have_content(regexp)
end



Given /^I am on "Rua di hoc" homepage$/ do
	brower goto "http://hackermon.tk"
end

And /^I see (\d+) test$/ do |test_count|
	page.should have test_count test
end	

When /^When I click on "([^\"]*)"$/ do |"Kiem tra chuong I - Test" link|
	click_link("Kiem tra chuong I - Test" link)
end

Then /^ I should see (.+)$/ do |page_name|
	visit path_to(page_name)
end

And /^I should see \/([^\/]*)\/$/ do |regexp|
      regexp = Regexp.new(regexp)
      page.should have_content(regexp)
end
