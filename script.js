function validateAdhar(){
   
   var adharnumber=document.forms["applicationForm"]["adharnumber"].value;
   

   if(adharnumber.length!=12)
   {
      //alert("Invalid Adhar number !");
      document.getElementById("adhar_err").innerHTML="Invalid Adhar number !";
      document.applicationForm.adharnumber.focus();
   }
   else
   {
      document.getElementById("adhar_err").innerHTML="";
   }
}
function validatePhnumber()
{
   var phnumber=document.forms["applicationForm"]["phnumber"].value;

   if(/^[0-9]+$/.test(phnumber) == false)
   {
     // alert("Invalid Phone number !");
      document.getElementById("ph_err").innerHTML="Invalid symbols in phone number !";
      //document.applicationForm.phnumber.focus();
   }
   else
   if(phnumber.length!=10)
   {
      document.getElementById("ph_err").innerHTML="Invalid phone number !";
      //document.applicationForm.phnumber.focus();
   }
   else
   {
      document.getElementById("ph_err").innerHTML="";
   }

}
function validateIncome()
{
   var income=document.forms["applicationForm"]["income"].value;
   if(income>600000)
   {
      document.getElementById("income_err").innerHTML="Not Applicable for scholarship !";
      //document.applicationForm.phnumber.focus();
   }
   else
   {
      document.getElementById("income_err").innerHTML=""
   }
}
function validateAttendance()
{
   var attend=document.forms["applicationForm"]["attendance"].value;
   if(attend<70)
   {
      document.getElementById("attend_err").innerHTML="Not Eligible for Scholarship !";  
      //document.applicationForm.attendance.focus();
   }
   else
   {
      document.getElementById("attend_err").innerHTML="";  
   }
}