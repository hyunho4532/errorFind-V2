export function mouseDragHandler(elementId: HTMLElement | null) {
    elementId!.style.color = 'blue';
    elementId!.style.fontWeight = 'bold';
}

export function mouseLeaveHandler(elementId: HTMLElement | null) {
    elementId!.style.color = 'blue';
    elementId!.style.fontWeight = 'normal';
}

export function mouseCardDragHandler(elementIdParent: HTMLElement | null, elementIdChild: HTMLElement | null) {
    elementIdParent!.style.border = '3px solid black';
    elementIdChild!.style.backgroundColor = 'rgb(243, 243, 243)';
}

export function mouseCardLeaveHandler(elementIdParent: HTMLElement | null, elementIdChild: HTMLElement | null) {
    elementIdParent!.style.border = '3px solid rgb(221, 221, 221)';
    elementIdChild!.style.backgroundColor = 'white';
}