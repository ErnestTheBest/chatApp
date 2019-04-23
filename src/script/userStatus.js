export function mapUserStatuses (users) {
  let now = new Date()
  let userStatuses = []

  /**
   * Users example
   * {id: 4, username: "eeee", name: null, seen_at: "2019-02-13T19:51:24.913Z"}
   */
  for (const user of users) {
    if (user.seen_at) {
      let lastActive = now - new Date(user.seen_at)

      if (lastActive < 180000) {
        userStatuses.push([user.id, 'online'])
      } else if (lastActive < 360000) {
        userStatuses.push([user.id, 'away'])
      } else {
        userStatuses.push([user.id, 'offline'])
      }
    } else {
      userStatuses.push([user.id, 'offline'])
    }
  }

  return userStatuses
}

export function getUserStatus (userId) {
  let userStatuses = JSON.parse(window.sessionStorage.userStatuses)
  userId = parseInt(userId)
  /**
   * UserStatuses is an array in sessionstorage {id : "status"}
   * So I iterate through array of users, and if ID ([0]) matches with passed
   * Return strung with status ([1])
   */

  for (const user of userStatuses) {
    if (userId === user[0]) {
      return user[1]
    }
  }
}
