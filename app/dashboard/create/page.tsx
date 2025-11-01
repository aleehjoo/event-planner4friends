"use client";

import React, { useMemo, useState } from 'react'
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import { EventFormData, EventCategory } from "@/types/event";

const Page = () => {
    const categoryOptions = useMemo(() => [
        "Eat-out",
        "Drinking",
        "Swimming",
        "Church",
        "Overnight",
        "Beach",
        "Amusement Park",
        "Just chilling",
        "Fun & Games",
        "Movie",
        "Road Trip",
        "Bar",
        "Party",
        "Concert",
        "Shopping",
        "Jogging",
    ] as EventCategory[], []);

    const [name, setName] = useState("Beach Bonanza");
    const [date, setDate] = useState<string>(() => {
        const today = new Date();
        const inTwoWeeks = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
        return inTwoWeeks.toISOString().slice(0, 10);
    });
    const [imageUrl, setImageUrl] = useState("https://via.placeholder.com/1200x700?text=Beach+Bonanza");
    const [category, setCategory] = useState<EventCategory>("Beach");
    const [notes, setNotes] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const payload: EventFormData = { name, date, imageUrl, category, notes };
        // Placeholder action: log the payload and show a simple success state
        console.log("Create Event payload", payload);
        setSubmitted(true);
        // In a real app, call an API then route to details or dashboard
    };

    return (
        <div>
            <Header />

            <main className="px-6 sm:px-10 py-6 pb-28 max-w-5xl mx-auto">
                <div className="flex flex-row items-center justify-between mb-4">
                    <h2 className="text-xl sm:text-2xl font-semibold">Create Event</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <form onSubmit={onSubmit} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Event Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="e.g. City Lights Festival"
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                <input
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value as EventCategory)}
                                    className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                                >
                                    {categoryOptions.map((opt) => (
                                        <option key={opt} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                            <input
                                type="url"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                placeholder="https://..."
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                            <p className="text-xs text-gray-500 mt-1">Used in the dashboard carousel preview.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Optional details, location, friends to invite, etc."
                                rows={4}
                                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        <div className="flex items-center gap-3">
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-lg bg-black text-white px-4 py-2 font-medium hover:bg-gray-900"
                            >
                                Create Event
                            </button>
                            {submitted && (
                                <span className="text-sm text-green-600">Saved locally. Replace with API call.</span>
                            )}
                        </div>
                    </form>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between px-1">
                            <h3 className="text-base font-medium text-gray-700">Live Preview</h3>
                            <span className="text-xs text-gray-500">Matches dashboard card</span>
                        </div>

                        <div className="relative w-full h-[46vh] sm:h-[54vh] rounded-3xl overflow-hidden shadow-lg">
                            <img
                                src={imageUrl || "https://via.placeholder.com/1200x700?text=Event+Preview"}
                                alt={name || "Event Preview"}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-4 left-4 text-white">
                                <p className="text-sm text-gray-300">{new Date(date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                                <h4 className="text-2xl font-semibold !text-gray-300 leading-tight">{name || "Event Name"}</h4>
                                <p className="text-xs text-gray-300/90 mt-1">{category}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <MobileNav />
        </div>
    )
}
export default Page
