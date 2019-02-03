let contactsList = document.querySelector('.contacts-list');

function addListConcatc(username, name = undefined, isFavorite = false) {
    let element = document.createElement('li');
    let span = document.createElement('span');
    span.classList.add('status', 'status-offline');
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

    element.appendChild(span);
    element.appendChild(favorite);

    contactsList.appendChild(element);
}

