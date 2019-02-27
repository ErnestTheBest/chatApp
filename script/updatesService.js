let runningServices = {
    'pingPongService': false,
    'userStatusService': false,
    'messagesUpdateService': false,
    'userStatusUpdateService': false,
    'newMessagesUpdateService': false
}
let messageServicePolled = false;

function pingPong() {
    if (!runningServices.pingPongService) runningServices.pingPongService = true;
    return ping().then(() => {
        setTimeout(pingPong, 10000);
    })
}


function launchMessageUpdateService() {
    if (messageServicePolled) {
        return;
    }

    messageServicePolled = true;
    runMessageUpdateService();
}

function runMessageUpdateService() {
    if (!runningServices.messagesUpdateService) runningServices.messagesUpdateService = true;
    return getMessages().then(res => {
        try {
            if (res.data.length) {
                let lastMessageTime = contentWindow.lastChild.querySelector('time').dateTime;
                if (res.data[0].created_at != lastMessageTime) printChatMessages();
            }
        } catch (error) {
            console.log('Something went wrong in messageUpdateService');
        }

        setTimeout(runMessageUpdateService, 3000);
    });
}

function runUserStatusService() {
    if (!runningServices.userStatusService) runningServices.userStatusService = true;
    return getAllUsersList().then(res => {
        setUserStatuses(JSON.stringify(mapUserStatuses(res.data)));
        setTimeout(runUserStatusService, 10000);
    })
}

function runUserStatusUpdateService() {
    if (!runningServices.userStatusUpdateService) runningServices.userStatusUpdateService = true;
    updateContactsListStatuses();
    updateChatContextStatus();
    updateMessagesListStatuses();
    setTimeout(runUserStatusUpdateService, 10000);
}

function runNewMessagesUpdateService() {
    if (!runningServices.newMessagesUpdateService) runningServices.newMessagesUpdateService = true;
    checkNewMessages();
    setTimeout(runNewMessagesUpdateService, 3000);
}