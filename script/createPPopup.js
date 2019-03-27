export function createAndDisplayPopup(text, background) {
    let element;

    if (document.querySelector('.error-message')) {
        element = document.querySelector('.error-message');
    } else {
        element = document.createElement('div');
        document.body.appendChild(element);
        element.addEventListener('click', function (event) {
            document.body.removeChild(document.querySelector('.error-message'));
        });
    }

    element.textContent = text;
    element.style.background = background;
    element.classList.add('error-message');
}