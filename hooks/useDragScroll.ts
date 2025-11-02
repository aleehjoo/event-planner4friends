"use client";

import { useRef } from "react";

export function useDragScroll() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handlers = {
        onMouseDown: (e: React.MouseEvent) => {
            if (!scrollRef.current) return;
            isDragging.current = true;
            startX.current = e.pageX - scrollRef.current.offsetLeft;
            scrollLeft.current = scrollRef.current.scrollLeft;
        },
        onMouseLeave: () => (isDragging.current = false),
        onMouseUp: () => (isDragging.current = false),
        onMouseMove: (e: React.MouseEvent) => {
            if (!isDragging.current || !scrollRef.current) return;
            e.preventDefault();
            const x = e.pageX - scrollRef.current.offsetLeft;
            const walk = (x - startX.current) * 1.2;
            scrollRef.current.scrollLeft = scrollLeft.current - walk;
        },
        onTouchStart: (e: React.TouchEvent) => {
            if (!scrollRef.current) return;
            isDragging.current = true;
            startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
            scrollLeft.current = scrollRef.current.scrollLeft;
        },
        onTouchMove: (e: React.TouchEvent) => {
            if (!isDragging.current || !scrollRef.current) return;
            const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
            const walk = (x - startX.current) * 1.2;
            scrollRef.current.scrollLeft = scrollLeft.current - walk;
        },
        onTouchEnd: () => (isDragging.current = false),
    };

    return { scrollRef, ...handlers };
}

