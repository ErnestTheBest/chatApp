let messageWindow = document.querySelector('.message-window');
let messageWindowInput = messageWindow.querySelector('input');

messageWindow.addEventListener('submit', function (event) {
    event.preventDefault();
    sendTextMessage();
});

function toggleMessageInput() {
    if (!sessionStorage.chatContextId) {
        messageWindow.classList.add('hidden');
    } else {
        messageWindow.classList.remove('hidden');
    }
}

function sendTextMessage() {
    if (messageWindowInput.value) {
        sendMessage(messageWindowInput.value).then(printChatMessages());
        messageWindowInput.value = "";
    }
};
