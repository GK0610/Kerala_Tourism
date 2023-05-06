var eml=document.getElementById("email1");
var passw=document.getElementById("password1");
var error1=document.getElementById("err1");
var error2=document.getElementById("err2");
function verify(){
    if(eml.value==''|| passw.value=='')
    {
       alert("Fields cannot be empty");
    }
else if(passw.value.length<8)
{
    error2.innerText='Password must contain 8 characters'
    error2.style.color='Red';

}
else{
    alert('Form submitted!!!');
}
}



let regex1=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/

function validate1(){
    if(regex1.test(eml.value)){
        error1.innerText='Email is valid'
        error1.style.color='green'

        return true;
    }
    else{
        error1.innerText='Email is invalid'
        error1.style.color='red';
    
        // error2.style.backgroundColor = 'red';
        // error2.textContent = 'Email is invalid'
    
        return false;
    }
    }

    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
    
    function validate2() {
        if(strongPassword.test(passw.value)) {
            error2.style.backgroundColor = "green";
            error2.textContent = 'Strong';
            // error2.innerText='Strong'
            // error2.style.color='green';
    
        } else if(mediumPassword.test(passw.value)) {
            error2.style.backgroundColor = 'orange';
            error2.textContent = 'Medium';
            // error2.innerText='Medium'
            // error2.style.color='Blue';
    
        } else {
            error2.style.backgroundColor = 'red';
            error2.textContent = 'Weak';
            // error2.innerText='Week'
            // error2.style.color='Red';
        }    
    }

