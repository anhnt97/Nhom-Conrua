   Feature: Nguoi dung xem video
      
   Scenario: Xem video
      When Nguoi dung nhan vao video
	  Then Nguoi dung thay video duoc choi
	  When Nguoi dung nhan vao video
	  Then Nguoi dung thay video dung lai

   Scenario: Phong to man hinh
      When Nguoi dung nhan hai lan vao video
	  Then video duoc phong to
	  When Nguoi dung mot lan vao video
	  Then video dung thay video dung lai
	  