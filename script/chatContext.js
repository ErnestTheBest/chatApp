let chatContextName = document.querySelector('.context-window span');

function setChatContextNameAndStatus() {
    // 1. Check sessionstorage for chat context id
    // 2. If there is one, open chat etc.
    // 3. If undefined then set text to Welcome to chatApp! and display logo.

    if (sessionStorage.chatContextName) {
        chatContextName.textContent = sessionStorage.chatContextName;
        //TODO: Find out why this is not showing corrcet status after switching from contact to contact
        updateChatContextStatus();
    } else {
        chatContextName.textContent = 'Welcome to chatApp!'
        chatContextName.className = '';
    }
}

function updateChatContextStatus() {
    updateSpanStatus(chatContextName, sessionStorage.chatContextId);
}