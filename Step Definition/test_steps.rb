##Choose
Given /^I am on "Kiem tra chuong I" page$/ do
	brower goto "http://hackermon.tk/2.html"
end

And /^I see a question \/([^\/]*)\/$/ do |regexp|
	regexp = Regexp.new(regexp)
    page.should have_content(regexp)
end

And /^I see 4 empty answers radio$/ do
	page.should have_content(4 radio)
end

When /^I click on "([^\"]*)" radio$/ do |radio|
	click_radio(radio)
end

Then /^I should see radio filled$/ do
	radio.select()
end

And /^I should see orther radio not filled$/ do (orther_radio)
	radio.select(orther_radio)
end

When /^I press "([^\"]*)" button$/ do |"Nộp bài"|
	click_button("Nộp bài")
end

Then /^I should see "Đúng (\d+)/(\d+)"$/ do |right_answers, question_count|
	puts "right_answers: #{right_answers}",