"use client";

import { CarouselEvent } from "@/types/event";
import { useDragScroll } from "@/hooks/useDragScroll";
import { CAROUSEL_EVENTS } from "@/lib/constants";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin } from "lucide-react";

interface EventsCarouselProps {
    selectedCategories?: string[];
}

export default function EventsCarousel({ selectedCategories = [] }: EventsCarouselProps) {
    const { scrollRef, ...dragHandlers } = useDragScroll();

    // Filter events based on selected categories
    const allEvents: CarouselEvent[] = CAROUSEL_EVENTS;
    const filteredEvents = selectedCategories.length === 0
        ? allEvents
        : allEvents.filter(event => 
            event.category && selectedCategories.includes(event.category)
        );

    return (
        <div
            ref={scrollRef}
            {...dragHandlers}
            className="w-full overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
        >
            {filteredEvents.length === 0 ? (
                <div className="flex items-center justify-center py-16 px-6 sm:px-10">
                    <div className="text-center max-w-md">
                        <p className="text-lg font-medium text-gray-600 mb-2">No events found</p>
                        <p className="text-sm text-gray-500">
                            Try selecting a different category or clear your selection to see all events.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="flex gap-6 px-6 sm:px-10 py-5 min-w-max">
                    <AnimatePresence mode="popLayout">
                        {filteredEvents.map((event, index) => (
                            <motion.div
                                key={event.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                className="relative flex-shrink-0 w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-[60vw] h-[55vh] sm:h-[60vh] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
                            >
                        <div className="absolute inset-0">
                            <img
                                src={event.img}
                                alt={event.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                        
                        {/* Event Badge */}
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-white/30">
                                Featured
                            </span>
                        </div>

                        {/* Event Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                            <div className="flex items-center gap-2 mb-3 text-white/90">
                                <Calendar className="w-4 h-4" />
                                <p className="text-sm sm:text-base font-medium">{event.date}</p>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4 group-hover:text-white transition-colors">
                                {event.name}
                            </h3>
                            <div className="flex items-center gap-2 text-white/80">
                                <MapPin className="w-4 h-4" />
                                <p className="text-sm">Discover location details</p>
                            </div>
                        </div>

                        {/* Hover Overlay Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
                    </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}
        </div>
    );
}
