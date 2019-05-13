import {checkSession} from './session'
import {createAndDisplayPopup} from './createPPopup'
import {enableInputsAndButton, disableInputsAndButton} from './utils'
import {getLoggedInUserInfo, updateUserProfile} from './API/usersAPI'
import {InputField} from "./components/InputFieldComponent";

class ProfilePage {
    private checkSession;
    private parentElement: HTMLElement;

    constructor(checkSession, parentElement: HTMLElement) {
        this.checkSession = checkSession;
        this.parentElement = parentElement;
        this.render()
        // this.attachEventListeners()
        // this.doSOmethingElse()
    }

    public render() {
        const formElement = document.createElement('form');
        formElement.action = ('#');

        const label = document.createElement('label');
        const paragraph = document.createElement('p');
        const button = document.createElement('button');

        label.appendChild(document.createTextNode('Login'));
        formElement.appendChild(label.cloneNode(true));

        paragraph.id = 'userLogin';
        formElement.appendChild(paragraph);

        label.innerText = 'Display name';
        label.setAttribute('for', 'display-name');
        formElement.appendChild(label.cloneNode(true));

        const input = new InputField('display-name', 'text');
        formElement.appendChild(input.createElement());

        button.id = 'sign-in';
        button.type = 'submit';
        button.innerText = 'Save';
        formElement.appendChild(button);

        button.id = 'cancel';
        button.innerText = 'Cancel';
        button.removeAttribute('type');
        formElement.appendChild(button);

        this.parentElement.appendChild(formElement);
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM Loaded. Loading script');
    foo();
});

function foo() {
    new ProfilePage(checkSession, document.getElementById('center'))
}
