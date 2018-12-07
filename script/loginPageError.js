let inputs = Array.from(document.querySelectorAll('form input'));

document.getElementsByTagName('form')[0].addEventListener('submit', function (event) {
    event.preventDefault();
    validateFieldsNotEmpty();
});


function valid() {
    createAndDisplayPopup('Good boy', '#82df1b');
    inputs.forEach(e => e.classList.remove('error'));
}

function notValid() {
    createAndDisplayPopup('Mandatory values must be entered', 'linear-gradient(#f95062, #df251b)');
    inputs.forEach(e => {
        if (!e.value) {
            e.classList.add('error');
        } else {
            e.classList.remove('error');
        }
    });
}

function validateFieldsNotEmpty() {
    inputs.every(e => e.value) ? valid() : notValid();
}