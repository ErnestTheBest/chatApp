let defaultUrl = 'https://ernestthebest.herokuapp.com/users';

function registerNewUser(userName, pass) {
    return fetch(defaultUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userName, password: pass })
    }).then(res => {
        return res.json();
    });
}