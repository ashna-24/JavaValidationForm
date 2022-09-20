var uname= document.forms['myform']['name'];
var address= document.forms['myform']['address'];
var dob= document.forms['myform']['date'];
var email= document.forms["myform"]["email"];
var password= document.forms['myform']['password'];
var number= document.forms['myform']['number']
var telephone= document.forms['myform']['telephone'];
var month=document.forms['myform']['month'];
var week=document.forms['myform']['week'];
var url=document.forms['myform']['url'];
var datetime=document.forms['myform']['datetime'];
var localdatetime=document.forms['myform']['localdatetime'];
var uploadfile=document.forms['myform']['uploadfile'];

var name_error= document.getElementById('name_error');
var address_error= document.getElementById('address_error');
var date_error= document.getElementById('date_error');
var email_error= document.getElementById('email_error');
var pswd_error= document.getElementById('pswd_error');
var number_error= document.getElementById('number_error');
var tel_error= document.getElementById('tel_error');
var required_error= document.getElementById('required_error');
var week_error= document.getElementById('week_error');
var url_error= document.getElementById('url_error');
var datetime_error= document.getElementById('datetime_error');
var local_error= document.getElementById('local_error');
var uploadfile_error= document.getElementById('uploadfile_error');

uname.addEventListner('blur', nameVerify, true);
address.addEventListner('blur', addressVerify, true);
dob.addEventListner('blur', dobVerify, true);
email.addEventListner('blur', emailVerify, true);
password.addEventListner('blur', passwordVerify, true);
number.addEventListner('blur', numberVerify, true);
telephone.addEventListner('blur', telephoneVerify, true);
month.addEventListner('blur', monthVerify, true);
week.addEventListner('blur', weekVerify, true);
url.addEventListner('blur', urlVerify, true);
datetime.addEventListner('blur', datetimeVerify, true);
localdatetime.addEventListner('blur', localdatetimeVerify, true);
uploadfile.addEventListner('blur', uploadfileVerify, true);

function Validate(){

    if(uname.value=="") {
        uname.style.border = "1px solid red";
        document.getElementById('name_div').style.color="red";
        name_error.textContent ="Name is Required";
        uname.focus();
        return false;
    }

    if(uname.value.length<3){
        uname.style.border = "1px solid red";
        document.getElementById('name_div').style.color="red";
        name_error.textContent ="Name must be at least 3 characters";
        uname.focus();
        return false;
    }

    if(address.value==""){
        address.style.border = "1px solid red";
        document.getElementById('address_div').style.color="red";
        address_error.textContent="Address is Required";
        address.focus();
        return false;
    }

    if(address.value.length<10){
        address.style.border = "1px solid red";
        document.getElementById('address_div').style.color="red";
        address_error.textContent ="Address must be at least 10 characters";
        address.focus();
        return false;
    }

    if(dob.value==""){
        dob.style.border="1px solid red";
        document.getElementById('date_div').style.color="red";
        date_error.textContent="DOB id Required";
        dob.focus();
        return false;
    }

    if(email.value==""){
        email.style.border="1px solid red";
        document.getElementById('email_div').style.color ="red";
        email_error.textContent="Email is Required";
        email.focus();
        return false;
    }

    if(password.value==""){
        password.style.border="1px solid red";
        document.getElementById('pswd_div').style.color ="red";
        pswd_error.textContent="Password is Required";
        password.focus();
        return false;
    }

    if(number.value==""){
        number.style.border="1px solid red";
        document.getElementById('number_div').style.color ="red";
        number_error.textContent="Number is Required";
        number.focus();
        return false;
    }
}


function nameVerify(){
    if(uname.value!=""){
        uname.style.border="1px solid #5e6e66";
        document.getElementById('name_div').style.color="#5e6e66";
    }
}




























































/*const form = document.querySelector('#myform');
const unamevalue= document.querySelector('#uname');
const addressvalue= document.querySelector('#address');
const dobvalue= document.querySelector('#dob');
const emailvalue= document.querySelector('#email');
const passwordvalue= document.querySelector('#password');
const numbervalue=document.querySelector('#number');
const telephonevalue= document.querySelector('#telephone');
const qualifivalue= document.querySelector('#qualification');
const monthvalue= document.querySelector('#month');
const weekvalue= document.querySelector('#week');
const urlvalue= document.querySelector('#url');
const datetimevalue= document.querySelector('#datetime');
const localvalue= document.querySelector('#localdatetime');
const uploadvalue= document.querySelector('#uploadfile');

const checkName= () => 
{
    let valid =false;

    min=3,max =25;

    const uname=unamevalue.ariaValueMax.trim();

    if(!isRequired(uname)){
        showError(unamevalue, 'Name is required');
    }else {
        showSuccess(unamevalue);
        valid = true;
    }
    return valid;
};

const checkddress= () => 
{
    let valid =false;

    min=10,max =50;

    const uname=unamevalue.ariaValueMax.trim();

    if(!isRequired(address)){
        showError(addressvalue, 'Name is required');
    }else {
        showSuccess(addressvalue);
        valid = true;
    }
    return valid;
};



const checkEmail = () => 
{
    let valid = false;

    const email = emailvalue.value.trim();

    if (!isRequired(email)) {
        showError(emailvalue, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailvalue, 'Email is not valid.');
    } else {
        showSuccess(emailvalue);
        valid = true;
    }
    return valid;
};

const checkPassword = () =>
 {
    let valid = false;

    const password = passwordvalue.value.trim();

    if (!isRequired(password)) {
        showError(passwordvalue, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordvalue, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordvalue);
        valid = true;
    }

    return valid;
};


const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;*/
