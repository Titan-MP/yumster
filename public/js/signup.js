

signUpBtn.onclick = event => {
    event.preventDefault();

    let username = document.getElementById('username-signup').value;
    let password = document.getElementById('password-signup').value;

    fetch('/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(() => document.location.replace('/'))
}