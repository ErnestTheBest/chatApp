let defaultUrl = 'https://ernestthebest.herokuapp.com';

function getAllUsersList() {
    return fetch(`${defaultUrl}/users`, {
        headers: {
            Authorization: `Basic ${window.sessionStorage.crecentials}`
        }
    }).then(res => {
        console.log(res.status);
        return res.json();
    });
}

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

function updateUserProfile(name, pass) {
    if (!name && !pass) {
        return new Error('No values were passed for user update.')
    }

    return fetch(`${defaultUrl}/users/${window.sessionStorage.userId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Basic ${window.sessionStorage.crecentials}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, password: pass })
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