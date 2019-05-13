import {checkSession} from './session'
import {createAndDisplayPopup} from './createPPopup'
import {enableInputsAndButton, disableInputsAndButton} from './utils'
import {getLoggedInUserInfo, updateUserProfile} from './API/usersAPI'
import {InputField} from "./components/InputFieldComponent.ts";
import {ButtonComponent} from "./components/ButtonComponent.ts";
import {LabelComponent} from "./components/LabelComponent.ts";

class ProfilePage {
    private parentElement: HTMLElement;

    constructor(parentElement: HTMLElement) {
        this.parentElement = parentElement;
        this.render();
        this.populateForm();
        this.addEventListeners();
        // this.attachEventListeners()
        // this.doSOmethingElse()
    }

    private render() {
        const formElement = document.createElement('form');
        formElement.action = ('#');

        const input = new InputField('display-name', 'text');
        const saveButton = new ButtonComponent('save-button', 'Save');
        const cancelButton = new ButtonComponent('cancel', 'Cancel');
        const loginLabel = new LabelComponent( 'Login');
        const displayNameLabel = new LabelComponent( 'Display name', 'display-name');
        const loginParagraph = document.createElement('p');
        loginParagraph.id = 'user-login';

        formElement.appendChild(loginLabel.createElement());
        formElement.appendChild(loginParagraph);
        formElement.appendChild(displayNameLabel.createElement());
        formElement.appendChild(input.createElement());
        formElement.appendChild(saveButton.createElement());
        formElement.appendChild(cancelButton.createElement());

        this.parentElement.appendChild(formElement);
    }

    private addEventListeners() {
        document.getElementById('cancel').addEventListener('click', (event) => {
            event.preventDefault();
            ProfilePage.redirectToChat();
        });

        document.addEventListener('submit', (event) => {
            event.preventDefault();
            ProfilePage.updateProfile();
        });
    }

    private populateForm() {
        getLoggedInUserInfo().then(({data}) => {
            document.getElementById('user-login').textContent = data.username;
            if (data.name) {
                let input = <HTMLInputElement>document.getElementById('display-name');
                input.value = data.name;
            }
        });
    }

    private static updateProfile() {
        disableInputsAndButton(document.querySelector('form'));
        const input = <HTMLInputElement>document.getElementById('display-name');
        updateUserProfile(input.value).then(() => {
            createAndDisplayPopup('Display name changed', '#82df1b');
            window.setTimeout(() => ProfilePage.redirectToChat(), 1500);
        });
        enableInputsAndButton(document.querySelector('form'));
    }

    private static redirectToChat() {
        window.location.replace('./chat.html');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded. Loading script');
    checkSession();
    new ProfilePage(document.getElementById('center'));
});