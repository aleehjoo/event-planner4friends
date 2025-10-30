import React from 'react'
import MobileNav from "@/components/MobileNav";
import Header from "@/components/Header";
import Link from "next/link";

const placeholderEvents = [
  {
    id: 1,
    name: "Beach Bonanza!",
    date: "2025-11-12",
    category: "Beach",
    description: "A day at the sandy shores with friends." 
  },
  {
    id: 2,
    name: "Movie Marathon",
    date: "2025-11-14",
    category: "Fun & Games",
    description: "Binge-watching the best trilogies with snacks!"
  },
  {
    id: 3,
    name: "Jog for Charity",
    date: "2025-11-18",
    category: "Jogging",
    description: "Morning run with purpose at Central Park."
  },
];

const Page = () => {
  // To test empty state, set this to []
  const events = placeholderEvents;

  return (
    <div className="pb-20 bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-3xl mx-auto w-full px-3 py-12 md:py-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-10 text-gray-800">All Events</h1>
        {events.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[55vh] md:min-h-[400px] text-center">
            <p className="text-lg md:text-xl text-gray-500 mb-3 font-medium">No events available</p>
            <Link
              href="/dashboard/create"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors shadow text-base md:text-lg"
            >
              + Create Event
            </Link>
          </div>
        ) : (
          <ul className="space-y-8 md:space-y-10">
            {events.map(event => (
              <li
                key={event.id}
                className="bg-white rounded-2xl shadow-lg px-6 md:px-10 py-8 flex flex-col gap-2 md:gap-3 md:min-h-[140px] md:text-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <span className="font-semibold text-gray-900 text-base md:text-xl">{event.name}</span>
                  <span className="text-xs md:text-base text-gray-500">{event.category}</span>
                </div>
                <span className="text-xs md:text-base text-gray-400 mb-1">{new Date(event.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <p className="text-gray-600 text-sm md:text-base">{event.description}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <MobileNav />
    </div>
  );
};
export default Page
