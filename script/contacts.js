let contactsList = document.querySelector('.contacts-list');

function addListConcatc(contactId, username, name = undefined, isFavorite = false) {
    let element = document.createElement('li');
    let span = document.createElement('span');

    //TODO: Fix this placeholder after clear what to do with away system
    span.classList.add('status', 'status-online');

    name ? span.textContent = name : span.textContent = username;
    let favorite = document.createElement('i');
    favorite.classList.add('material-icons', 'w3-large');
    if (isFavorite) {
        favorite.title = 'Remove favorite';
        favorite.textContent = 'person_add_disabled';
    } else {
        favorite.title = 'Add favorite';
        favorite.textContent = 'person_add';
    }

    element.id = contactId;
    element.appendChild(span);
    element.appendChild(favorite);

    element.addEventListener('click', setActiveContact);

    contactsList.appendChild(element);
}

function createContactList(contactsArray) {
    clearContactList();
    for (const contact of contactsArray) {
        addListConcatc(contact.id, contact.username, contact.name);
    }
}

function clearContactList() {
    // Rad that it's faster than innerHTML
    while (contactsList.firstChild) {
        contactsList.removeChild(contactsList.firstChild);
    }
}

function setActiveContact(elem) {
    // 1. Is there active contact
    // 2. Find out if active chat == chat that is beine selected
    // 3. true - do nothing. false - toggle .active-contact on both list items
    
    
    // I feel ashamed for this if()
    if (elem.target.nodeName !== 'I') {
        if (elem.target.nodeName === 'SPAN') {
            elem = elem.path[1];
        } else {
            elem = elem.path[0];
        }
    } else return;

    // 1 
    let exists = contactsList.querySelector('.active-contact');

    if (exists) {
        // 2
        if (elem === exists) {
            return;
        } else {
            // 3
            elem.classList.toggle(('active-contact'));
            exists.classList.toggle(('active-contact'));
        }
    } else {
        elem.classList.toggle(('active-contact'));
    }

    setChatContext(elem.id, elem.querySelector('span').innerText);
    setChatContextNameAndStatus();
    toggleMessageInput();
}