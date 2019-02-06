let contentWindow = document.querySelector('.content-window');

function createMessageElement(message) {
    let chatMessage = document.createElement('div');
    let isMyMessage = message.sender_id == sessionStorage.userId;
    let messageDate = new Date(message.created_at);
    // {message: "Ho are you", sender_id: 2, recipient_id: 4, created_at: "2019-02-06T19:24:23.372Z"}
    isMyMessage ? chatMessage.classList.add('outgoing') : chatMessage.classList.add('incoming');

    // Message info
    let messageInfo = document.createElement('div');
    messageInfo.classList.add('message-info');

    let span = document.createElement('span');
    isMyMessage ? span.textContent = 'You, ' : span.textContent = sessionStorage.chatContextName + ', ';
    //TODO: Fix this placeholder after clear what to do with away system
    span.classList.add('status', 'status-online');

    let time = document.createElement('time');
    time.textContent = `${messageDate.getHours()}:${messageDate.getMinutes()}:${messageDate.getSeconds()}`

    messageInfo.appendChild(span);
    messageInfo.appendChild(time);

    // Message 
    let userMessage = document.createElement('div');
    userMessage.classList.add('message');
    userMessage.textContent = message.message;

    // Combine all together
    chatMessage.appendChild(messageInfo);
    chatMessage.appendChild(userMessage);

    return chatMessage;
}

function printChatMessages() {
    clearChatMessages();
    
    getMessages().then( res => {
        let len = res.data.length;

        if (len) {
            for (let index = len - 1; index >= 0; index--) {
                contentWindow.appendChild(createMessageElement(res.data[index]));
            }
        }
    })
    
}

function clearChatMessages() {
    while (contentWindow.firstChild) {
        contentWindow.removeChild(contentWindow.firstChild);
    }
}
