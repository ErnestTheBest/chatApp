checkSession();

let menuButton = document.querySelector('.menu-button');
let container = document.querySelector('.container');
let logoutButton = document.getElementById('logout');

menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('toggle');
    container.classList.toggle('menu-open');
});

logoutButton.addEventListener('click', logout);

function initChat() {
    runUserStatusService();
    defineContactList();

    setChatContextNameAndStatus();
    clearChatMessages();
    toggleMessageInput();
    pingPong();
    // Since userstatuses is not in sessionstorage yet, this needs delay. I know it's hardcoded and bad. Sorry.
    setTimeout(runUserStatusUpdateService, 3000);

    if (sessionStorage.chatContextId) {
        printChatMessages();
        launchMessageUpdateService();
    };
};

// TODO: Add try catch?
initChat();