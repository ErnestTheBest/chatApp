let contactsList = document.querySelector('.contacts-list');

function addListConcact(contactId, username, name = undefined, isFavorite = false) {

    if (sessionStorage.userId == contactId) return;

    let element = document.createElement('li');
    let span = document.createElement('span');

    span.classList.add('status', `status-${getUserStatus(contactId)}`);

    name ? span.textContent = name : span.textContent = username;
    let favorite = document.createElement('i');
    favorite.classList.add('material-icons', 'w3-large');
    if (isFavorite) {
        favorite.title = 'Remove favorite';
        favorite.textContent = 'person_add_disabled';
        favorite.addEventListener('click', function () {
            removeContact(favorite.parentNode.getAttribute('data-id'));
            setTimeout(defineContactList, 500);
        })
    } else {
        favorite.title = 'Add favorite';
        favorite.textContent = 'person_add';
        favorite.addEventListener('click', function () {
            addContact(favorite.parentNode.getAttribute('data-id'));
            setTimeout(defineContactList, 500);
        })
    }

    element.setAttribute('data-id', contactId);
    element.appendChild(span);
    element.appendChild(favorite);

    element.addEventListener('click', setActiveContact);

    contactsList.appendChild(element);
}

function createContactList(contactsArray, areFavorite = false) {
    clearContactList();
    for (const contact of contactsArray) {
        addListConcact(contact.id, contact.username, contact.name, areFavorite);
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
            elem = elem.target.parentNode;
        } else {
            elem = elem.target;
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

    setChatContext(elem.getAttribute('data-id'), elem.querySelector('span').innerText);
    setChatContextNameAndStatus();
    toggleMessageInput();
    printChatMessages();
    removeNewMessageMarker(elem);

    launchMessageUpdateService();

    // Close mobile menu
    menuButton.classList.remove('toggle');
    container.classList.remove('menu-open');
}

function defineContactList() {
    getContactsList().then(res => {
        if (!res.data.length) {
            getAllUsersList().then(res => createContactList(res.data));
        } else { createContactList(res.data, true) };

        
    }).then(()=> {
        if (sessionStorage.chatContextId) {
            // TODO: This will be bugged if last open chat was with someone not in contact list
            document.querySelector(`[data-id="${sessionStorage.chatContextId}"]`).classList.add('active-contact');
        }
    });
}

function updateContactsListStatuses() {
    contactsList.querySelectorAll('li').forEach(e => {
        updateSpanStatus(e.querySelector('span'), e.getAttribute('data-id'));
    })
}

function markNewMessages(userIdsArr) {
    for (const newMessageUserId of userIdsArr) {
        // <span class="new-message"></span>
        let elem = document.querySelector(`[data-id="${newMessageUserId}"]`);
        let marker = elem.querySelector('.new-message');
        if (!elem.classList.contains('active-contact') && !marker) {
            let spa = document.createElement('span');
            spa.className = 'new-message';
            elem.querySelector('span').appendChild(spa);
        }
    }
}

function removeNewMessageMarker(el) {
    let marker = el.querySelector('.new-message');
    if (marker) marker.remove();
}