let defaultUrl = 'https://ernestthebest.herokuapp.com';

function getAllUsersList() {
    return fetch(`${defaultUrl}/users`, {
        headers: {
            Authorization: `Basic ${window.sessionStorage.credentials}`
        }
    }).then(res => {
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

function updateUserProfile(name, password = undefined) {
    return fetch(`${defaultUrl}/users/${window.sessionStorage.userId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Basic ${window.sessionStorage.credentials}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password })
    }).then(res => {
        return res.ok;
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

function getLoggedInUserInfo() {
    return fetch(`${defaultUrl}/me`, {
        headers: {
            Authorization: `Basic ${window.sessionStorage.credentials}`
        }
    }).then(res => {
        console.log(res);
        return res.json();
    });
}

export {getAllUsersList, registerNewUser, updateUserProfile, loginExistingUser, getLoggedInUserInfo};