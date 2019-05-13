export class InputField {
    id: string;
    type: string;

    constructor(id: string, type: string) {
        this.id = id;
        this.type = type;
    }

    public createElement() {
        const inputElement = document.createElement('input');
        inputElement.id = this.id;
        inputElement.type = this.type;

        return inputElement;
    }
}