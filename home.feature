   Feature: Nguoi dung o trang chu
      
   Scenario: Xem video
      When Nguoi dung thay "Bai giang"
	  And Nguoi dung nhan vao "Xem ngay"
	  Then giao dien chuyen sang trang "Video bai giang"

   Scenario: Xem "Phong hoc"
      When Nguoi dung nhan vao "Phong hoc"
	  Then Nguoi dung duoc chuyen sang trang "Phong hoc"
	  When Nguoi dung mot lan vao video
	  Then video dung thay video dung lai
	  