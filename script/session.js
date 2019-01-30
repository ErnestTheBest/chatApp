function checkSession() {
    if (!window.sessionStorage.getItem('userId')) {
        if (window.location.pathname === '/index.html' || window.location.pathname === '/register.html') {

        } else {
            window.location.replace('./index.html');
        }
    } else if (window.location.pathname === '/index.html' || window.location.pathname === '/register.html') {
        window.location.replace('./chat.html');
    }
}

function logout() {
    window.sessionStorage.removeItem('userId');
    window.sessionStorage.removeItem('crecentials');
    checkSession();
}

function storeCredentials(userId, username, password) {
    window.sessionStorage.setItem('userId', userId);
    window.sessionStorage.setItem('crecentials', btoa(`${username}:${password}`));
}