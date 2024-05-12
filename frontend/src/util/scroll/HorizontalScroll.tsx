import { useEffect } from "react";

function HorizontalScroll({ container }: { container: HTMLElement | null }) {
    useEffect(() => {
        if (!container) return;

        const handleScroll = (event: WheelEvent) => {
            container.scrollLeft += event.deltaY;
            event.preventDefault();
        };

        container.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleScroll);
        };
    }, [container]);

    return null;
}

export default HorizontalScroll;