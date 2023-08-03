

loginBtn.onclick = event => {
    event.preventDefault();

    let username = document.getElementById('username-login').value;
    let password = document.getElementById('password-login').value;

    fetch('/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
        .then(response => response.json()).then(console.log);
};