

signUpBtn.onclick = event => {
    event.preventDefault();

    let username = document.getElementById('username-signup').value;
    let password = document.getElementById('password-signup').value;

    console.log(username, password);
}