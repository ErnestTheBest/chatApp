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

function updateUserProfile(name, pass) {

    // Pochemu eto govno ne rabotaet?

    if (!name && !pass) {
        return new Error('No values were passed for user update.')
    } 
    console.log(JSON.stringify({ name: name, password: pass }), window.sessionStorage.crecentials);

    return fetch(`${defaultUrl}/users/${window.sessionStorage.userId}`, {
        method: 'PUT',
        headers: {
            Authorization: `${window.sessionStorage.crecentials}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, password: pass })
    }).then(res => {
        console.log(res);
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