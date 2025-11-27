"use client";

import React from 'react'
import Header from "@/components/Header";
import CategoryPills from "@/components/CategoryPills";
import MobileNav from "@/components/MobileNav";
import EventsCarousel from "@/components/EventsCarousel";
import Link from "next/link";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

const Page = () => {
    // Get current time for greeting
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good morning";
        if (hour < 17) return "Good afternoon";
        return "Good evening";
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-20">
            <Header />
            
            {/* Hero Section */}
            <section className="relative px-6 sm:px-10 py-10 md:py-14 overflow-hidden border-b border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative max-w-7xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                                {getGreeting()}, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Display Name</span>
                            </h1>
                            <p className="text-gray-600 text-base md:text-lg max-w-2xl">
                                Discover amazing events happening around you
                            </p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-shrink-0"
                        >
                            <Link
                                href="/dashboard/create"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300 border-2 border-gray-900 hover:border-gray-700"
                            >
                                <Sparkles className="w-5 h-5" />
                                Create Event
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Browse by Category Section */}
            <section className="px-6 sm:px-10 mb-8 mt-12 md:mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-7xl mx-auto"
                >
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                        <div className="flex-1">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                                Browse by Category
                            </h2>
                            <p className="text-sm md:text-base text-gray-600 max-w-2xl">
                                Filter events that match your interests and discover what's happening near you
                            </p>
                        </div>
                        <Link 
                            href="/dashboard/events" 
                            className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors group border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50"
                        >
                            See All Events
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Category Pills */}
                    <div className="mb-10 md:mb-12">
                        <CategoryPills />
                    </div>

                    {/* Events Carousel */}
                    <div className="relative">
                        <div className="mb-6 flex items-center justify-between">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                                Featured Events
                            </h3>
                            <Link 
                                href="/dashboard/events" 
                                className="md:hidden flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                            >
                                See All
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                        <EventsCarousel />
                    </div>
                </motion.div>
            </section>

            <MobileNav />
        </div>
    )
}
export default Page
