function updateSpanStatus(elem, userId) {
    elem.className = 'status';
    elem.classList.add(`status-${getUserStatus(userId)}`);
}

function disableInputsAndButton(parentElement) {
    inputs = parentElement.querySelectorAll('input');
    buttons = parentElement.querySelectorAll('button');

    inputs.forEach(inp => inp.disabled = true);
    buttons.forEach(btn => btn.disabled = true);
}

function enableInputsAndButton(parentElement) {
    inputs = parentElement.querySelectorAll('input');
    buttons = parentElement.querySelectorAll('button');

    inputs.forEach(inp => inp.removeAttribute('disabled'));
    buttons.forEach(btn => btn.removeAttribute('disabled'));
}