function mapUserStatuses(users) {
    let now = new Date();
    let userStatuses = [];

    // {id: 4, username: "eeee", name: null, seen_at: "2019-02-13T19:51:24.913Z"}
    for (user of users) {
        if (user.seen_at) {
            let lastActive = now - new Date(user.seen_at);

            if (lastActive < 180000) {
                userStatuses.push([user.id, 'online']);
            } else if (lastActive < 360000) {
                userStatuses.push([user.id, 'away']);
            } else {
                userStatuses.push([user.id, 'offline']);
            }

        } else {
            userStatuses.push([user.id, 'offline']);
        }
    }

    return userStatuses;
}

function getUserStatus(userId) {
    let userStatuses = JSON.parse(sessionStorage.userStatuses);

    for (const user of userStatuses) {
        if (userId == user[0]) {
            return user[1];
        }
    }
    
}