export function labelComponent(labelText: string, labelFor: string = undefined): HTMLElement {
    const labelElement = document.createElement('label');
    labelElement.textContent = labelText;
    if (labelFor) labelElement.setAttribute('for', labelFor);
    return labelElement;

}