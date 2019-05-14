export function inputFieldComponent(id: string, type: string): HTMLElement {
    const inputElement = document.createElement('input');
    inputElement.id = id;
    inputElement.type = type;
    return inputElement;
}
