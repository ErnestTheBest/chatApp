let pingUrl = 'https://ernestthebest.herokuapp.com/ping'

function ping() {
    return fetch(pingUrl, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${window.sessionStorage.credentials}`
        }
    });
}