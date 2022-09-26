function validateform(){
   var uname=document.forms['myform']['uname'];
   var gender=document.forms['myform']['gender'];
   var address=document.forms['myform']['address'];
   var age=document.forms['myform']['age'];
   var email=document.forms['myform']['email'];
   var password=document.forms['myform']['password'];
   var number=document.forms['myform']['number'];
   var telephone=document.forms['myform']['telephone'];
   var qualify=document.forms['myform']['study'];
   var datetime=document.forms['myform']['datetime'];
   var proof=document.forms['myform']['proof'];
   var uploadfile=document.forms['myform']['uploadfile'];

   nameValidate(uname);
   genderValidate(gender);
   addressValidate(address);
   ageValidate(age);
   emailValidate(email);
   passwordValidate(password);
   numberValidate(number);
   telephoneValidate(telephone);
   qualifyValidate(qualify);
   datetimeValidate(datetime);
   proofValidate(proof);
   fileValidate(uploadfile);
   return false;
}

function errorValidate(){
  document.getElementById('name_div').style.visibility="visible";
  document.getElementById('gender_div').style.visibility="visible";
  document.getElementById('address_div').style.visibility="visible";
  document.getElementById('age_div').style.visibility="visible";
  document.getElementById('email_div').style.visibility="visible";
  document.getElementById('pswd_div').style.visibility="visible";
  document.getElementById('number_div').style.visibility="visible"
  document.getElementById('datetime_div').style.visibility="visible";
  document.getElementById('tel_div').style.visibility="visible";
  document.getElementById('qualify_div').style.visibility="visible";
  document.getElementById('proof_div').style.visibility="visible"; 
  document.getElementById('uploadfile_div').style.visibility="visible";
}

function nameValidate(uname){
   
   if(uname.value==""){
     errorValidate();
     uname.style.border="1px solid red";  
     return false;
   }
   else if(uname.value.length<3){
      errorValidate();
      uname.style.border="1px solid red"; 
      return false;
   }
   else{
      document.getElementById("name_div").innerHTML="";
      uname.style.border="1px solid green";
      return true;
   }
}

function genderValidate(gender){
   if(gender.value==""){
     errorValidate();  
     return false;
   }else{
      document.getElementById("gender_div").innerHTML="";
      return true;
   }
}

function addressValidate(address){    
   if(address.value==""){
     errorValidate();
     address.style.border="1px solid red";  
     return false;
   }
   else if(address.value.length<8){
      errorValidate();
      address.style.border="1px solid red"; 
      return false;
   }
   else{
      document.getElementById("address_div").innerHTML="";
      address.style.border="1px solid green";
      return true;
   }
}

function ageValidate(age){
   if(age.value==""){
      errorValidate();
     return false;
   }else{
      document.getElementById("age_div").innerHTML="";
      return true;
   }
}

function emailValidate(email){
   if(email.value==""){
     errorValidate();
     email.style.border="1px solid red";  
     return false;
   }else{
      email.style.border="1px solid green";
      email_div.innerHTML="";
      return true;
   }
}

function passwordValidate(password){
   if(password.value==""){
    errorValidate(); 
     password.style.border="1px solid red";  
     return false;
   }else{
      password.style.border="1px solid green";
      pswd_div.innerHTML="";
      return true;
   }
}

function numberValidate(number){
   if(number.value==""){
     errorValidate();
     number.style.border="1px solid red";  
     return false;
   }/*
   else if(number.value.length<=10){
      errorValidate();
      number.style.border="1px solid red"; 
      return false;
   }*/else{
      number.style.border="1px solid green";
      number_div.innerHTML="";
      return true;
   }
}

function telephoneValidate(telephone){
   if(telephone.value==""){
     errorValidate();
     telephone.style.border="1px solid red";  
     return false;
   }/*
   else if(telephone.value.length<=10){
     errorValidate();
      telephone.style.border="1px solid red"; 
      return false;
   }*/else{
      telephone.style.border="1px solid green";
      tel_div.innerHTML="";
      return true;
   }
}

function qualifyValidate(qualify){     
   if(qualify.value==""){
     errorValidate();
     qualify.style.border="1px solid red";  
     return false;
   }else{
      qualify.style.border="1px solid green";
      qualify_div.innerHTML="";
      return true;
   }
}

function datetimeValidate(datetime){
   if(datetime.value==""){
     errorValidate();
     datetime.style.border="1px solid red";  
     return false;
   }else{
      datetime.style.border="1px solid green";
      datetime_div.innerHTML="";
      return true;
   }
}

function proofValidate(proof){
   if(proof.value==""){
     errorValidate();
     return false;
   }else{
      document.getElementById("proof_div").innerHTML="";
      return true;
   }
}


function fileValidate(uploadfile){     
   if(uploadfile.value==""){
     errorValidate();
     uploadfile.style.border="1px solid red";  
     return false;
   }else{
      uploadfile.style.border="1px solid green";
      uploadfile_div.innerHTML="";
      return true;
   }
}