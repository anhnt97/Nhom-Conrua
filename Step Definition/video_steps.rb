Given /^I am on (.+)$/ do |page_name|
	visit path_to(page_name)
end

And /^I see video lecture$/ do
	page.should have video lecture
end

When /^I click on "([^\"]*)"$/ do |video|
	click(video)
end

Then /^I should see "([^\"]*)" video is playing$/ do video
	page.should playing(video)
end

When /^I click on "([^\"]*)"$/ do |video|
	click(video)
end

Then /^video is pausing$/ do |video|
	page.should pausing(video)
end