"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
    { name: "Eat-out", emoji: "🍽️" },
    { name: "Drinking", emoji: "🍻" },
    { name: "Swimming", emoji: "🏊" },
    { name: "Church", emoji: "⛪" },
    { name: "Overnight", emoji: "🌙" },
    { name: "Beach", emoji: "🏖️" },
    { name: "Amusement Park", emoji: "🎢" },
    { name: "Just chilling", emoji: "😌" },
    { name: "Fun & Games", emoji: "🎮" },
    { name: "Movie", emoji: "🎬" },
    { name: "Road Trip", emoji: "🚗" },
    { name: "Bar", emoji: "🍸" },
    { name: "Party", emoji: "🎉" },
    { name: "Concert", emoji: "🎤" },
    { name: "Shopping", emoji: "🛍️" },
    { name: "Jogging", emoji: "🏃" },
];

export default function CategoryPills() {
    const [activePills, setActivePills] = useState<string[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleToggle = (name: string) => {
        setActivePills((prev) => {
            if (prev.includes(name)) return prev.filter((n) => n !== name);
            return [name, ...prev];
        });
    };

    // --- DESKTOP Drag Scroll ---
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

    // --- MOBILE Touch Scroll ---
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

    const onTouchEnd = () => {
        isDragging.current = false;
    };

    const sortedCategories = [
        ...categories.filter((c) => activePills.includes(c.name)),
        ...categories.filter((c) => !activePills.includes(c.name)),
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
            className="w-full cursor-grab active:cursor-grabbing overflow-x-hidden select-none"
        >
            <div className="flex gap-3 sm:gap-4 px-6 sm:px-10 py-3 sm:py-4 min-w-max">
                <AnimatePresence initial={false}>
                    {sortedCategories.map((cat) => {
                        const isActive = activePills.includes(cat.name);
                        return (
                            <motion.button
                                key={cat.name}
                                layout
                                onClick={() => handleToggle(cat.name)}
                                whileTap={{ scale: 0.95 }}
                                transition={{ layout: { duration: 0.2 } }}
                                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border text-sm sm:text-base font-medium whitespace-nowrap transition-all ${
                                    isActive
                                        ? "bg-black text-white border-black"
                                        : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                                }`}
                            >
                                <span className="text-base sm:text-lg">{cat.emoji}</span>
                                {cat.name}
                            </motion.button>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
