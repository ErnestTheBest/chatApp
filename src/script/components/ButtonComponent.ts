export class ButtonComponent {
    private readonly id: string;
    private readonly classes: [];
    private readonly buttonText: string;

    constructor(id: string, buttonText: string, classes: [] = undefined) {
        this.id = id;
        this.buttonText = buttonText;
        this.classes = classes;
    }

    public createElement() {
        const buttonElement = document.createElement('button');
        buttonElement.id = this.id;
        buttonElement.textContent = this.buttonText;
        if (this.classes) for (let clazz of this.classes) {
            buttonElement.classList.add(clazz);
        }
        return buttonElement;
    }
}