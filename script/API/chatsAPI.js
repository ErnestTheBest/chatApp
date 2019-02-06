let chatsUrl = `https://ernestthebest.herokuapp.com/users/${sessionStorage.userId}/chats`

function getChatsUpdate() {
    return fetch(chatsUrl, {
        headers: {
            Authorization: `Basic ${window.sessionStorage.credentials}`
        }
    }).then(res => {
        return res.json();
    });
}