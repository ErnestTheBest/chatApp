export function updateSpanStatus(elem, userId) {
    elem.className = 'status';
    elem.classList.add(`status-${getUserStatus(userId)}`);
}

export function enableInputsAndButton(parentElement) {
    let inputs = parentElement.querySelectorAll('input');
    let buttons = parentElement.querySelectorAll('button');

    inputs.forEach(inp => inp.removeAttribute('disabled'));
    buttons.forEach(btn => btn.removeAttribute('disabled'));
}

export function disableInputsAndButton(parentElement) {
    let inputs = parentElement.querySelectorAll('input');
    let buttons = parentElement.querySelectorAll('button');

    inputs.forEach(inp => inp.disabled = true);
    buttons.forEach(btn => btn.disabled = true);
}