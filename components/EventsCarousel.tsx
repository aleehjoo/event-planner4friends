"use client";

import { useRef } from "react";
import { CarouselEvent } from "@/types/event";

export default function EventsCarousel() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    // --- Desktop drag ---
    const onMouseDown = (e: React.MouseEvent) => {
        if (!scrollRef.current) return;
        isDragging.current = true;
        startX.current = e.pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };
    const onMouseLeave = () => (isDragging.current = false);
    const onMouseUp = () => (isDragging.current = false);
    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging.current || !scrollRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.2;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    // --- Mobile swipe ---
    const onTouchStart = (e: React.TouchEvent) => {
        if (!scrollRef.current) return;
        isDragging.current = true;
        startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };
    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging.current || !scrollRef.current) return;
        const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.2;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };
    const onTouchEnd = () => (isDragging.current = false);

    const events: CarouselEvent[] = [
        {
            name: "Beach Bonanza",
            date: "Nov 12, 2025",
            img: "https://via.placeholder.com/1200x700?text=Beach+Bonanza",
        },
        {
            name: "City Lights Festival",
            date: "Dec 5, 2025",
            img: "https://via.placeholder.com/1200x700?text=City+Lights",
        },
        {
            name: "Mountain Music Fest",
            date: "Jan 8, 2026",
            img: "https://via.placeholder.com/1200x700?text=Mountain+Fest",
        },
    ];

    return (
        <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseLeave={onMouseLeave}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className="w-full overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
        >
            <div className="flex gap-6 px-6 sm:px-10 py-5 min-w-max">
                {events.map((event) => (
                    <div
                        key={event.name}
                        className="relative flex-shrink-0 w-[90vw] sm:w-[80vw] h-[60vh] rounded-3xl overflow-hidden shadow-lg transition-transform hover:scale-[1.01]"
                    >
                        <img
                            src={event.img}
                            alt={event.name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white">
                            <p className="text-sm sm:text-base text-gray-300">{event.date}</p>
                            <h3 className="text-2xl sm:text-3xl font-semibold !text-gray-300 leading-tight">
                                {event.name}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
