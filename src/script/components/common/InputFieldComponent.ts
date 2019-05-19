import { InputFieldType } from '../enums/inputFieldType';

export function inputFieldComponent(id: string, type: InputFieldType): HTMLElement {
    const inputElement = document.createElement('input');
    inputElement.id = id;
    inputElement.type = type;
    return inputElement;
}
