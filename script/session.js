function checkSession() {
    if (!window.sessionStorage.getItem('userId')) {
        if (window.location.pathname === '/index.html' || window.location.pathname === '/register.html') {
            
        } else {
            window.location.replace('/index.html');
        }
    } else if (window.location.pathname === '/index.html' || window.location.pathname === '/register.html') {
        window.location.replace('/chat.html');
    }
}

function logout() {
    window.sessionStorage.removeItem('userId');
    checkSession();
}