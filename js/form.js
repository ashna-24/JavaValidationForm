class FormValidation{
    formValues={
        username:""
    }

    errorValues={
        usernameErr:""
    }

    showErrorMsg(index,msg){
        const form_control = document.getElementById('form_control')[index];
        form_control.classList.add('error');
        form_control.getElementyByTagName('span')[0].textContent = msg;
    }

    showSuccessMsg(index){
        const form_control = document.getElementById('form_control')[index];
        form_control.classList.remove('error');
        form_control.classList.add('success');
    }

    getInputs(){
        this.formValues.username=document.getElementsByName('username').value.trim();
    }

    nameValidate(){
        
        if(this.formValues.username === " " ){
            this.errorValues.usernameErr = "Please Enter Name";
            this.showErrorMsg(0, this.errorValues.usernameErr);
        }
        else if(this.formValues.username.length<=3){
            this.errorValues.usernameErr ="Must enter atlest 3 characters";
        }
        else{
            this.errorValues.usernameErr ="";
            this.showSuccessMsg(0);
        }
    }

    alertMessage(){
        const {usernameErr} = this.errorValues;
        if(usernameErr===""){
            swal ("Registration successfull","Thank you"+this.formValues.username,"successs").then(()=>{
                console.log(this.formValues);
                this.removeInputs();
            });
        }
        else{
            swal ("Give valid Input", "Click to Continue", "error");
        }
    }

    removeInputs(){
        const form_control= document.getElementById('form_control');
        Array.from(form_control).forEach(element=>{
            element.getElementyByTagName('input')[0].value ="";
            element.getElementyByTagName('span')[0].textContent ="";
            element.classList.remove('success');
        });
    }
}

function ValidateUserInputs(){

    document.getElementsByClassName('myform')[0].addEventListener('submit', event => {
        event.preventDefault();
        ValidateUserInputs.getInputs();
        ValidateUserInputs.nameValidate();
    });
}