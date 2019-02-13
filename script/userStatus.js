function getUserStatuses(users) {
    let now = new Date();
    let userStatuses = new Map();

    // {id: 4, username: "eeee", name: null, seen_at: "2019-02-13T19:51:24.913Z"}
    for (user of users) {
        if (user.seen_at) {
            let lastActive = now - new Date(user.seen_at);

            if (lastActive < 180000) {
                userStatuses.set(user.id, 'online');
            } else if (lastActive < 360000) {
                userStatuses.set(user.id, 'away');
            } else {
                userStatuses.set(user.id, 'offline');
            }

        } else {
            userStatuses.set(user.id, 'offline');
        }
    }

    return userStatuses;
}