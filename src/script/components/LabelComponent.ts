export class LabelComponent {
    private readonly labelFor: string;
    private readonly labelText: string;

    constructor( labelText: string, labelFor: string = undefined) {
        this.labelText = labelText;
        this.labelFor = labelFor;
    }

    public createElement () {
        const labelElement = document.createElement('label');
        labelElement.textContent = this.labelText;
        if (this.labelFor) labelElement.setAttribute('for', this.labelFor);
        return labelElement;
    }
}