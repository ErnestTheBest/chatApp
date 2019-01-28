let defaultUrl = 'https://ernestthebest.herokuapp.com';

function registerNewUser(userName, pass) {
    return fetch(`${defaultUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userName, password: pass })
    }).then(res => {
        return res.json();
    });
}

function loginExistingUser(userName, pass) {
    return fetch(`${defaultUrl}/me`, {
        headers: {
            Authorization: `Basic ${btoa(`${userName}:${pass}`)}`
        }
    }).then(res => {
        return res.json();
    });
}