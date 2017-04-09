Given /^I am on (.+)$/ do |page_name|
	visit path_to(page_name)
end

And /^I logged-in as "([^\"]*)"$/ do |name|

end

When /^I fill in "([^\"]*)" with "([^\"]*)"$/ do |field, value|
     fill_in(field.gsub(' ', '_'), :with => value)
end

And /^I press "([^\"]*)"$/ do |button|
     click_button(button)
end

Then /^I should see "([^\"]*)"$/ do |text|
     page.should have_content(text)
end

When /^I fill in "([^\"]*)" with "([^\"]*)"$/ do |field, null|
     fill_in(field.gsub(' ', '_'), :with => null)
end

Then /^I should not see "([^\"]*)"$/ do |text|
     page.should not have_content(text)
end