var eml=document.getElementById("email1");
var passw=document.getElementById("password1");
var usname=document.getElementById("username");
var error1=document.getElementById("err1");
var error2=document.getElementById("err2");
var num1=document.getElementById("mobileno1");
var error3=document.getElementById("err3");

function verify(){
    if(eml.value==''|| passw.value==''||num1.value==''||usname.value=='')
    {
       alert("Fields cannot be empty");
    }
else if(passw.value.length<8)
{
    error2.innerText='Password must contain 8 characters'
    error2.style.color='Red';
}
else if(num1.value.length<10)
{
    error3.innerText='Mobile must contain 10 characters'
    error3.style.color='Red';
}

else{
    alert('Form submitted!!!');
}
}




let regex1=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
// let regex1=/([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/
function validate1(){
if(regex1.test(eml.value)){
    error1.innerText='Email is valid'
    error1.style.color='green';

    // error2.style.backgroundColor = "green";
    // error2.textContent = 'Email is valid';

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

let regex2=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

function validate3()
{
   
    if(regex2.test(num1.value))
    {
         error3.innerText='Mobile is valid'
         error3.style.color='green';
         return true;

    }
    else{
         error3.innerText='Mobile is invalid'
         error3.style.color='Red';
         return false;

    
    }

}




// var passw=document.getElementById("exampleInputPassword1");
// var error2=document.getElementById("err2");
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

