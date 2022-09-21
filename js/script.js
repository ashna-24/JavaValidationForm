function validateform(){
    var uname=document.forms['myform']['uname'];
    var address=document.forms['myform']['address'];
    var email=document.forms['myform']['email'];
    var password=document.forms['myform']['password'];
    var number=document.forms['myform']['number'];
    var telephone=document.forms['myform']['telephone'];
    var month=document.forms['myform']['month'];
    var week=document.forms['myform']['week'];
    var datetime=document.forms['myform']['datetime'];
    var localdatetime=document.forms['myform']['localdatetime'];
    var uploadfile=document.forms['myform']['uploadfile'];

    if(uname.value==""){
      document.getElementById('name_div').style.visibility="visible";
      uname.style.border="1px solid red";  
      return false;
    }
    else if(uname.value.length<3){
       document.getElementById('name_div').style.visibility="visible";
       uname.style.border="1px solid red";
       return false;
    }else{
       uname.style.border="1px solid #5e6e66";
       name_div.innerHTML="";
       return true;
    }
    
    if(address.value==""){
      document.getElementById('address_div').style.visibility="visible";
      address.style.border="1px solid red";  
      return false;
    }
    else if(address.value.length<8){
       document.getElementById('address_div').style.visibility="visible";
       address.style.border="1px solid red";
       return false;
    }else{
       address.style.border="1px solid #5e6e66";
       adress_div.innerHTML="";
       return true;
    }

    if(email.value==""){
      document.getElementById('email_div').style.visibility="visible";
      email.style.border="1px solid red";  
      return false;
    }else{
       email.style.border="1px solid #5e6e66";
       email_div.innerHTML="";
       return true;
    }

    if(password.value==""){
      document.getElementById('pswd_div').style.visibility="visible";
      password.style.border="1px solid red";  
      return false;
    }else{
       password.style.border="1px solid #5e6e66";
       pswd_div.innerHTML="";
       return true;
    }

    if(number.value==""){
      document.getElementById('number_div').style.visibility="visible";
      number.style.border="1px solid red";  
      return false;
    }
    else if(number.value.length<=10){
       document.getElementById('number_div').style.visibility="visible";
       number.style.border="1px solid red";
       return false;
    }else{
       number.style.border="1px solid #5e6e66";
       number_div.innerHTML="";
       return true;
    }

    if(telephone.value==""){
      document.getElementById('tel_div').style.visibility="visible";
      telephone.style.border="1px solid red";  
      return false;
    }
    else if(telephone.value.length<=10){
       document.getElementById('tel_div').style.visibility="visible";
       telephone.style.border="1px solid red";
       return false;
    }else{
       telephone.style.border="1px solid #5e6e66";
       tel_div.innerHTML="";
       return true;
    }
    
    if(month.value==""){
      document.getElementById('month_div').style.visibility="visible";
      month.style.border="1px solid red";  
      return false;
    }else{
       month.style.border="1px solid #5e6e66";
       month_div.innerHTML="";
       return true;
    }
    
    if(week.value==""){
      document.getElementById('week_div').style.visibility="visible";
      week.style.border="1px solid red";  
      return false;
    }else{
       week.style.border="1px solid #5e6e66";
       week_div.innerHTML="";
       return true;
    }

    if(datetime.value==""){
      document.getElementById('datetime_div').style.visibility="visible";
      datetime.style.border="1px solid red";  
      return false;
    }else{
       datetime.style.border="1px solid #5e6e66";
       datetime_div.innerHTML="";
       return true;
    }

    if(localdatetime.value==""){
      document.getElementById('local_div').style.visibility="visible";
      localdatetime.style.border="1px solid red";  
      return false;
    }else{
       localdatetime.style.border="1px solid #5e6e66";
       local_div.innerHTML="";
       return true;
    }

    
    if(uploadfile.value==""){
      document.getElementById('uploadfile_div').style.visibility="visible";
      uploadfile.style.border="1px solid red";  
      return false;
    }else{
       uploadfile.style.border="1px solid #5e6e66";
       uploadfile_div.innerHTML="";
       return true;
    }
}