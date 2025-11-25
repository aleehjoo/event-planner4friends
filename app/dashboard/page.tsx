"use client";

import React from 'react'
import Header from "@/components/Header";
import CategoryPills from "@/components/CategoryPills";
import MobileNav from "@/components/MobileNav";
import EventsCarousel from "@/components/EventsCarousel";
import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, TrendingUp, Users, Sparkles, ArrowRight } from "lucide-react";
import { CAROUSEL_EVENTS } from "@/lib/constants";

const Page = () => {
    // Calculate stats from events
    const totalEvents = CAROUSEL_EVENTS.length;
    const upcomingEvents = CAROUSEL_EVENTS.length; // In a real app, filter by date
    const activeCategories = 8; // Example stat
    
    // Get current time for greeting
    const getGreeting = () => {
        const hour = new Date().getHours();
        if (hour < 12) return "Good morning";
        if (hour < 17) return "Good afternoon";
        return "Good evening";
    };

    const stats = [
        {
            label: "Upcoming Events",
            value: upcomingEvents,
            icon: Calendar,
            gradient: "from-blue-500 to-cyan-500",
            change: "+2 this week"
        },
        {
            label: "Total Events",
            value: totalEvents,
            icon: TrendingUp,
            gradient: "from-purple-500 to-pink-500",
            change: "All time"
        },
        {
            label: "Active Categories",
            value: activeCategories,
            icon: Sparkles,
            gradient: "from-orange-500 to-red-500",
            change: "Popular now"
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 pb-20">
            <Header />
            
            {/* Hero Section */}
            <section className="relative px-6 sm:px-10 py-8 md:py-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative max-w-7xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                                {getGreeting()}, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Display Name</span>
                            </h1>
                            <p className="text-gray-600 text-base md:text-lg">
                                Discover amazing events happening around you
                            </p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/dashboard/create"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                            >
                                <Sparkles className="w-5 h-5" />
                                Create Event
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Stats Cards */}
            <section className="px-6 sm:px-10 mb-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="max-w-7xl mx-auto"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
                                    whileHover={{ y: -4, scale: 1.02 }}
                                    className="relative group"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
                                    <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>
                                            <span className="text-xs font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded-lg">
                                                {stat.change}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                                            <p className="text-sm text-gray-600">{stat.label}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            {/* Category Pills Section */}
            <section className="mb-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="px-6 sm:px-10 mb-4 max-w-7xl mx-auto">
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Browse by Category</h2>
                        <p className="text-sm text-gray-600">Filter events that match your interests</p>
                    </div>
                    <CategoryPills />
                </motion.div>
            </section>

            {/* Events Carousel Section */}
            <section className="mb-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="flex flex-row items-center justify-between px-6 sm:px-10 mb-6 max-w-7xl mx-auto">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Featured Events</h2>
                            <p className="text-sm text-gray-600">Discover what's happening near you</p>
                        </div>
                        <Link 
                            href="/dashboard/events" 
                            className="hidden md:flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
                        >
                            See All
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <EventsCarousel />
                    <div className="flex justify-center md:hidden mt-4">
                        <Link 
                            href="/dashboard/events" 
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                        >
                            See All Events
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </section>

            <MobileNav />
        </div>
    )
}
export default Page
