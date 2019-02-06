let messageWindow = document.querySelector('.message-window');

function toggleMessageInput() {
    if (!sessionStorage.chatContextId) {
        messageWindow.classList.add('hidden');
    } else {
        messageWindow.classList.remove('hidden');
    }
}