export function hyperlinkComponent(href: string, linkText: string): HTMLElement {
    const hyperlinkElement = document.createElement('a');
    hyperlinkElement.setAttribute('href', href);
    hyperlinkElement.textContent = linkText;
    return hyperlinkElement;
}