import { checkSession, storeCredentials } from './session'
import { hyperlinkComponent } from './components/common/HyperlinkComponent';
import { labelComponent } from './components/common/LabelComponent';
import { inputFieldComponent } from './components/common/InputFieldComponent';
import { InputFieldType } from './components/enums/inputFieldType';
import { buttonComponent } from './components/common/ButtonComponent';
import { createAndDisplayPopup } from './createPPopup';
import { registerNewUser } from './API/usersAPI';
import { enableInputsAndButton, disableInputsAndButton } from './utils';

class RegistrationPage {
    private parentElement: HTMLElement;

    constructor(parentElement: HTMLElement) {
        this.parentElement = parentElement;
        this.render();
        this.addEventListeners();
    }

    private render() {
        const formElement = document.createElement('form');
        const hyperlinkElement = hyperlinkComponent('index.html', 'Already have an account? Login here.');

        formElement.appendChild(labelComponent('Username', 'username'));
        formElement.appendChild(inputFieldComponent('username', InputFieldType.text));
        formElement.appendChild(labelComponent('Password', 'password'));
        formElement.appendChild(inputFieldComponent('password', InputFieldType.password));
        formElement.appendChild(labelComponent('Confirm password', 'confirm-password'));
        formElement.appendChild(inputFieldComponent('confirm-password', InputFieldType.password));
        formElement.appendChild(buttonComponent('register', 'Register'));

        this.parentElement.appendChild(formElement);
        this.parentElement.appendChild(hyperlinkElement);
    }

    private addEventListeners() {
        const username = document.getElementById('username') as HTMLInputElement;
        const password = document.getElementById('password') as HTMLInputElement;
        const confirmPassword = document.getElementById('confirm-password') as HTMLInputElement;

        document.addEventListener('submit', function (event) {
            event.preventDefault();
            if (username.value && password.value && confirmPassword.value) {
                if (password.value === confirmPassword.value) {
                    disableInputsAndButton(document.querySelector('form'));
                    registerNewUser(username.value, password.value).then(res => {
                        if (res.errors) {
                            createAndDisplayPopup(res.errors[0].title.replace('data.', ''), 'linear-gradient(#f95062, #df251b)');
                            enableInputsAndButton(document.querySelector('form'));
                        } else {
                            storeCredentials(res.data.id, username.value, password.value);
                            checkSession();
                        }
                    });
                } else {
                    createAndDisplayPopup('Passwords do not match', 'linear-gradient(#f95062, #df251b)')
                    password.classList.add('error');
                    confirmPassword.classList.add('error');
                }
            } else {
                document.querySelectorAll('input').forEach(i => {
                    if (i.value) {
                        i.classList.add('error');
                    } else {
                        i.classList.remove('error');
                    }
                })
            }
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded. Loading script');
    checkSession();
    new RegistrationPage(document.getElementById('center'));
});