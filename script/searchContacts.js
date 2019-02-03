let searchButton = document.querySelector('.search-button');
let searchInput = document.querySelector('.search-input input');

searchButton.addEventListener('click', function (event) {
    event.preventDefault();
    findContacts();
});
searchInput.addEventListener('keyup', function (event) {
    event.preventDefault();
    findContacts();
});

function findContacts() {
    let inputValue = searchInput.value;
    if (inputValue) {
        getAllUsersList().then(res => {
            let contactsArray = [];
            for (let contact of res.data) {
                if (contact.username.includes(inputValue)) {
                    contactsArray.push(contact);
                } else if (contact.name && contact.name.includes(inputValue)){
                    contactsArray.push(contact);
                }
            }
            contactsArray.length ? createContactList(contactsArray) : clearContactList();
        });
    } else {
        getAllUsersList().then(res => {createContactList(res.data)});
    }
}