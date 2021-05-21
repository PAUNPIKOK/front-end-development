

let username = document.getElementById('username');
let password = document.getElementById('password');
let sub = document.getElementById('sub')

let user_error = document.getElementById('user_error');
let user_error2 = document.getElementById('user_error2');
let pass_error = document.getElementById('pass_error');
let pass_error2 = document.getElementById('pass_error2');

username.addEventListener('textInput', user_Verify);
password.addEventListener('textInput', pass_Verify);
sub.addEventListener('click', mesage)



function validated() {
    if (username.value.length == 0) {
        username.style.border = "1px solid red";
        user_error.style.display = "block";
        oneX.style.display = "block";
        username.focus();
        return false;
    }
    if (username.value != "new_user") {
        username.style.border = "1px solid red";
        user_error.style.display = "none";
        user_error2.style.display = "block";
        oneX.style.display = "block";
        username.focus();
        return false;
    } else {
        user_error.style.display = "none";
        user_error2.style.display = "none";
        username.style.border = "1px solid rgb(97, 241, 69)";
        oneX.style.display = "none";
        one.style.display = "block";
    }
    if (password.value.length == 0) {
        password.style.border = "1px solid red";
        pass_error.style.display = "block";
        twoX.style.display = "block";
        password.focus();
        return false;
    }
    if (password.value != "123456789") {
        password.style.border = "1px solid red";
        pass_error.style.display = "none";
        pass_error2.style.display = "block";
        twoX.style.display = "block";
        password.focus();
        return false;
    } else {
        pass_error.style.display = "none";
        pass_error2.style.display = "none";
        password.style.border = "1px solid rgb(97, 241, 69)";
        twoX.style.display = "none";
        two.style.display = "block";
    }

}
function user_Verify() {
    if (username.value.length >= 7) {
        username.style.border = "1px solid rgb(97, 241, 69)";
        return true;
    }
}
function pass_Verify() {
    if (password.value.length >= 8) {
        password.style.border = "1px solid rgb(97, 241, 69)";
        return true;
    }
}
function mesage() {
    if (username.value == "new_user" && password.value == "123456789") {
        successful.style.display = "block";
    }
}
