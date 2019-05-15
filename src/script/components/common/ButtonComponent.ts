export function buttonComponent(id: string, buttonText: string, classes: [] = undefined): HTMLElement {
    const buttonElement = document.createElement('button');
    buttonElement.id = id;
    buttonElement.textContent = buttonText;
    if (classes) classes.forEach(c => {
        buttonElement.classList.add(c)
    });
    return buttonElement;
}