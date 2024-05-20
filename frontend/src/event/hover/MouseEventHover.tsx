export function mouseDragHandler(elementId: HTMLElement | null) {
    elementId!.style.color = 'blue';
    elementId!.style.fontWeight = 'bold';
    elementId!.style.transform = 'translateY(-5px)';
    elementId!.style.transition = 'transform 0.2s ease';
}

export function mouseLeaveHandler(elementId: HTMLElement | null) {
    elementId!.style.color = 'blue';
    elementId!.style.fontWeight = 'normal';
    elementId!.style.transform = 'translateY(0px)';
    elementId!.style.transition = 'transform 0.2s ease';
}

export function mouseCardDragHandler(elementIdParent: HTMLElement | null, elementIdChild: HTMLElement | null) {
    elementIdParent!.style.border = '3px solid black';
    elementIdChild!.style.backgroundColor = 'rgb(243, 243, 243)';
    elementIdParent!.style.transform = 'translateY(-10px)';
    elementIdParent!.style.transition = 'transform 0.3s ease'; 
}

export function mouseCardLeaveHandler(elementIdParent: HTMLElement | null, elementIdChild: HTMLElement | null) {
    elementIdParent!.style.border = '3px solid rgb(221, 221, 221)';
    elementIdChild!.style.backgroundColor = 'white';
    elementIdParent!.style.transform = 'translateY(0px)';
    elementIdParent!.style.transition = 'transform 0.3s ease'; 
}

export function mouseSwiperDragHandler(elementIdParent: HTMLElement | null) {
    elementIdParent!.style.transform = 'translateY(20px)';
    elementIdParent!.style.transition = 'transform 0.3s ease';
}

export function mouseSwiperLeaveHandler(elementIdParent: HTMLElement | null) {
    elementIdParent!.style.transform = 'translateY(0px)';
    elementIdParent!.style.transition = 'transform 0.3s ease';
}