let messageServicePolled = false;

function pingPong() {
    return ping().then(() => {

        console.log('pong');
        setTimeout(pingPong, 10000);
    })
}


function launchMessageUpdateService() {
    if (messageServicePolled) {
        console.log('Message updates service already polled');
        return;
    }

    messageServicePolled = true;
    runMessageUpdateService();
}

function runMessageUpdateService() {
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