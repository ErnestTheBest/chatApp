function updateSpanStatus(elem, userId) {
    elem.className = 'status';
    elem.classList.add(`status-${getUserStatus(userId)}`);
}