  Feature: Nguoi dung lam bai thi
      
   Scenario: Lam bai thi
      When Nguoi dung nhan chon radio dap an
	  Then Nguoi dung thay radio dap an do duoc dien

   Scenario: Nop bai
      When Nguoi dung nhan "Nop bai"
	  Then Nguoi dung thay so cau dung / tong so cau
