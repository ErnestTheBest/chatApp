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
    defineContactList();

    setChatContextNameAndStatus();
    clearChatMessages();
    toggleMessageInput();
    if (sessionStorage.chatContextId) printChatMessages();
    pingPong();
};

initChat();