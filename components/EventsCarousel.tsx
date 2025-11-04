"use client";

import { CarouselEvent } from "@/types/event";
import { useDragScroll } from "@/hooks/useDragScroll";
import { CAROUSEL_EVENTS } from "@/lib/constants";

export default function EventsCarousel() {
    const { scrollRef, ...dragHandlers } = useDragScroll();

    const events: CarouselEvent[] = CAROUSEL_EVENTS;

    return (
        <div
            ref={scrollRef}
            {...dragHandlers}
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
