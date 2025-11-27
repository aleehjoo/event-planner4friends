"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDragScroll } from "@/hooks/useDragScroll";
import { EVENT_CATEGORIES } from "@/lib/constants";

const categories = EVENT_CATEGORIES;

interface CategoryPillsProps {
    selectedCategories?: string[];
    onCategoryChange?: (categories: string[]) => void;
}

export default function CategoryPills({ selectedCategories, onCategoryChange }: CategoryPillsProps) {
    const [internalActivePills, setInternalActivePills] = useState<string[]>([]);
    const activePills = selectedCategories !== undefined ? selectedCategories : internalActivePills;
    const { scrollRef, ...dragHandlers } = useDragScroll();

    const handleToggle = (name: string) => {
        const newCategories = activePills.includes(name)
            ? activePills.filter((n) => n !== name)
            : [name, ...activePills];
        
        if (onCategoryChange) {
            onCategoryChange(newCategories);
        } else {
            setInternalActivePills(newCategories);
        }
    };

    const sortedCategories = [
        ...categories.filter((c) => activePills.includes(c.name)),
        ...categories.filter((c) => !activePills.includes(c.name)),
    ];

    return (
        <div
            ref={scrollRef}
            {...dragHandlers}
            className="w-full cursor-grab active:cursor-grabbing overflow-x-hidden select-none"
        >
            <div className="flex gap-3 sm:gap-4 px-6 sm:px-10 py-4 sm:py-5 min-w-max">
                <AnimatePresence initial={false}>
                    {sortedCategories.map((cat) => {
                        const isActive = activePills.includes(cat.name);
                        return (
                            <motion.button
                                key={cat.name}
                                layout
                                onClick={() => handleToggle(cat.name)}
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ layout: { duration: 0.2 } }}
                                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold whitespace-nowrap transition-all shadow-sm ${
                                    isActive
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-lg shadow-blue-500/30"
                                        : "bg-white text-gray-800 border border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md"
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
