let messagesUrl = `https://ernestthebest.herokuapp.com/users/${sessionStorage.userId}/contacts/${sessionStorage.chatContextId}/messages`

function sendMessage(messageText) {
    return fetch(messagesUrl, {
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
    return fetch(messagesUrl, {
        headers: {
            Authorization: `Basic ${window.sessionStorage.credentials}`,
        }
    }).then(res => {
        return res.json();
    });
}