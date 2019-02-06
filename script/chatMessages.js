let contentWindow = document.querySelector('.content-window');


function printChatMessages() {
    
}

function clearChatMessages() {
    while (contentWindow.firstChild) {
        contentWindow.removeChild(contentWindow.firstChild);
    }
}
