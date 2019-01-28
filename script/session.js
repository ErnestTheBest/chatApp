function checkSession() {
    if (window.sessionStorage.getItem('userId')) {
        window.location.replace('./chat.html');
    } else {
        window.location.replace('./index.html');
     }
}

function logout() {
    window.sessionStorage.removeItem('userId');
    checkSession();
}