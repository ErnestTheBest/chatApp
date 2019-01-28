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

function updateUserProfile(userName, passs, userId, name = undefined, pass = undefined) {
    if (!name && !pass) {
        return new Error('No values were passed for user update.')
    } 

    let requestBody = new FormData();

    if (name) {
        requestBody.set('name', name);
    }

    if (pass) {
        requestBody.set('password', pass);
    }

    return fetch(`${defaultUrl}/users/${userId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Basic ${btoa(`${userName}:${passs}`)}`,
            'Content-Type': 'application/json',
        },
        body: requestBody
    }).then(res => {
        return res.json();
    });
}

// JSON.stringify({ username: name, password: pass })

function loginExistingUser(userName, pass) {
    return fetch(`${defaultUrl}/me`, {
        headers: {
            Authorization: `Basic ${btoa(`${userName}:${pass}`)}`
        }
    }).then(res => {
        return res.json();
    });
}