import { checkSession, storeCredentials } from './session'
import { createAndDisplayPopup } from './createPPopup'
import { enableInputsAndButton, disableInputsAndButton } from './utils'
import { loginExistingUser } from './API/usersAPI'
import { hyperlinkComponent } from './components/common/HyperlinkComponent';
import { labelComponent } from './components/common/LabelComponent';
import { inputFieldComponent } from './components/common/InputFieldComponent';
import { buttonComponent } from './components/common/ButtonComponent';

class LoginPage {
    private parentElement: HTMLElement;

    constructor(parentElement: HTMLElement) {
        this.parentElement = parentElement;
        this.render();
        this.addEventListeners();
    }

    private render() {
        const formElement = document.createElement('form');
        const hyperlinkElement = hyperlinkComponent('register.html', 'Don\'t have an account? Register here.');

        formElement.action = '#';
        formElement.appendChild(labelComponent('Username', 'username'));
        formElement.appendChild(inputFieldComponent('username', 'text'));
        formElement.appendChild(labelComponent('Password', 'password'));
        formElement.appendChild(inputFieldComponent('password', 'password'));
        formElement.appendChild(buttonComponent('sign-in', 'Sign in'));

        this.parentElement.appendChild(formElement);
        this.parentElement.appendChild(hyperlinkElement);
    }

    private addEventListeners() {
        document.addEventListener('submit', (event) => {
            event.preventDefault();
            LoginPage.loginUser();
        })
    }

    private static loginUser() {
        const usernameField = document.getElementById('username') as HTMLInputElement;
        const passwordField = document.getElementById('password') as HTMLInputElement;

        if (!usernameField.value || !passwordField.value) {
            createAndDisplayPopup('Mandatory values must be entered', 'linear-gradient(#f95062, #df251b)');
            if (!usernameField.value) {
                usernameField.classList.add('error');
            }
            if (!passwordField.value) {
                passwordField.classList.add('error');
            }
            return;
        }

        createAndDisplayPopup('Good boy', '#82df1b');
        usernameField.classList.remove('error');
        passwordField.classList.remove('error');

        disableInputsAndButton(document.querySelector('form'));
        loginExistingUser(usernameField.value, passwordField.value).then(res => {
            if (res.errors) {
                createAndDisplayPopup(res.errors[0].title.replace('data.', ''), 'linear-gradient(#f95062, #df251b)');
                enableInputsAndButton(document.querySelector('form'));
            } else {
                storeCredentials(res.data.id, usernameField.value, passwordField.value);
                checkSession();
            }
        })


    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded. Loading script');
    checkSession();
    new LoginPage(document.getElementById('center'));
});