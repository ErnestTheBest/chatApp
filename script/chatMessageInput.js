let messageWindow = document.querySelector('.message-window');
let messageWindowInput = messageWindow.querySelector('input');
let messageWindowInputDiv = messageWindow.querySelector('.message-input');
let messageWindowButton = messageWindow.querySelector('.message-button');

messageWindowInput.addEventListener('keypress', function (event) {
    if (event.charCode === 13) {
        sendTextMessage();
    }
});

messageWindowButton.addEventListener('click', function (event) {
    event.preventDefault();
    sendTextMessage();
});

function toggleMessageInput() {
    if (!sessionStorage.chatContextId) {
        messageWindow.classList.add('hidden');
    } else {
        messageWindow.classList.remove('hidden');

        getUserStatus(sessionStorage.chatContextId) === 'offline' ?  disableInputsAndButton(messageWindow) : enableInputsAndButton(messageWindow);
    }
}

function sendTextMessage() {
    if (messageWindowInput.value) {
        sendMessage(messageWindowInput.value).then(
            printChatMessages);
        messageWindowInput.value = "";
        runMessageUpdateService();
    }
};
