import {checkSession} from './session'
import {createAndDisplayPopup} from './createPPopup'
import {enableInputsAndButton, disableInputsAndButton} from './utils'
import {getLoggedInUserInfo, updateUserProfile} from './API/usersAPI'
import {inputFieldComponent} from "./components/common/InputFieldComponent";
import {buttonComponent} from "./components/common/ButtonComponent";
import {labelComponent} from "./components/common/LabelComponent";

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

        const loginParagraph = document.createElement('p');
        loginParagraph.id = 'user-login';

        formElement.appendChild(labelComponent('Login'));
        formElement.appendChild(loginParagraph);
        formElement.appendChild(labelComponent('Display name', 'display-name'));
        formElement.appendChild(inputFieldComponent('display-name', 'text'));
        formElement.appendChild(buttonComponent('save-button', 'Save'));
        formElement.appendChild(buttonComponent('cancel', 'Cancel'));

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
                let input = document.getElementById('display-name') as HTMLInputElement;
                input.value = data.name;
            }
        });
    }

    private static updateProfile() {
        disableInputsAndButton(document.querySelector('form'));
        const input = document.getElementById('display-name') as HTMLInputElement;
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