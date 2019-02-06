function sendMessage(messageText) {
    return fetch(`https://ernestthebest.herokuapp.com/users/${sessionStorage.userId}/contacts/${sessionStorage.chatContextId}/messages`, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${window.sessionStorage.credentials}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText})
    }).then(res => {
        return res.json();
    });
}

function getMessages() {
    return fetch(`https://ernestthebest.herokuapp.com/users/${sessionStorage.userId}/contacts/${sessionStorage.chatContextId}/messages`, {
        headers: {
            Authorization: `Basic ${window.sessionStorage.credentials}`,
        }
    }).then(res => {
        return res.json();
    });
}