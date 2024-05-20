export function mouseDragHandler(elementId: HTMLElement | null) {
    elementId!.style.color = 'blue';
    elementId!.style.fontWeight = 'bold';
}

export function mouseLeaveHandler(elementId: HTMLElement | null) {
    elementId!.style.color = 'blue';
    elementId!.style.fontWeight = 'normal';
}