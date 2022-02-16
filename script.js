//Callback for password validation, if not valid, disables the submit button and adds the error-showing classes
function validate(){
    let pwd = document.querySelector("#password");
    let cpwd = document.querySelector("#confirm-password");
    let bttn = document.querySelector("button");
    if((pwd.value == cpwd.value) || (pwd.value=="") || (cpwd.value=="")){
        pwd.classList.remove("error");
        cpwd.classList.remove("error");
        pwd.parentElement.classList.remove("errorPack");
        bttn.disabled=false;
    }
    else{
        pwd.classList.add("error");
        cpwd.classList.add("error");
        pwd.parentElement.classList.add("errorPack");
        bttn.disabled=true;
    }
}

let pwd = document.querySelector("#password");
let cpwd = document.querySelector("#confirm-password");

pwd.addEventListener("focusout", validate)
cpwd.addEventListener("focusout", validate)
