let contactsUrl = `https://ernestthebest.herokuapp.com/users/${sessionStorage.userId}/contacts`;

function getContactsList() {
    return fetch(contactsUrl, {
        headers: {
            Authorization: `Basic ${sessionStorage.credentials}`
        }
    }).then(res => {
        return res.json()
    });
}

function addContact(contactId) {
    return fetch(contactsUrl, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${sessionStorage.credentials}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'id': parseInt(contactId) })
    });
}

function removeContact(contactId) {
    return fetch(contactsUrl + '/' + contactId, {
        method: 'DELETE',
        headers: {
            Authorization: `Basic ${sessionStorage.credentials}`,
        }
    });
}