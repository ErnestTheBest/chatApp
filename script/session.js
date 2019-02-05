function checkSession() {
    let pathname = window.location.pathname;
    if (!window.sessionStorage.getItem('userId')) {
        if (pathname.includes('/index.html') || pathname.includes('/register.html')) {

        } else {
            window.location.replace('./index.html');
        }
    } else if (pathname.includes('/index.html') || pathname.includes('/register.html')) {
        window.location.replace('./chat.html');
    }
}

function logout() {
    window.sessionStorage.removeItem('userId');
    window.sessionStorage.removeItem('credentials');
    window.sessionStorage.removeItem('chatContextId');
    window.sessionStorage.removeItem('chatContextName');
    checkSession();
}

function storeCredentials(userId, username, password) {
    window.sessionStorage.setItem('userId', userId);
    window.sessionStorage.setItem('credentials', btoa(`${username}:${password}`));
}

function setChatContext(chatId, chatName) {
    window.sessionStorage.setItem('chatContextId', chatId);
    window.sessionStorage.setItem('chatContextName', chatName);
}