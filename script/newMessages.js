let latestMessageUpdate = +new Date;

function checkNewMessages() {

    // This object is needed to check for messages from existing contacts
    let contactIds = {};
    getContactsList().then(({ data }) => data.forEach(e => contactIds[e.id] = latestMessageUpdate));

    getChatsUpdate().then(({ data }) => {
        let result = {};

        // Filter all contacts that messaged us
        data.filter(e => e.created_at !== null)
            .forEach(element => {
                result[+element.user_id] = +new Date(element.created_at);
            });

        let newMessages = [];
        let newUsers = [];

        Object.entries(result).forEach(e => {
            let [userId, createdAt] = e;
            if (latestMessageUpdate < createdAt) {
                if (!contactIds.hasOwnProperty(userId)) {
                    newMessages.push(parseInt(userId));
                    newUsers.push(parseInt(userId));
                } else { newMessages.push(parseInt(userId)) }
            }
        })

        if (newUsers.length) {
            getAllUsersList().then(({ data }) => {
                data.forEach(e => {
                    if (newUsers.includes(e.id)) {
                        addListConcact(e.id, e.username, e.name);
                    }
                })

                markNewMessages(newMessages);
            })
        } else {
            markNewMessages(newMessages);
        }
        latestMessageUpdate = Date.now();
    })
}