import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import type { Event } from "@/types/event";

const weekDayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const mockEvents: Event[] = [
  {
    id: 1,
    name: "Morning Run Crew",
    date: "2025-11-02",
    category: "Jogging",
    description: "Kick-start the week with a park loop.",
  },
  {
    id: 2,
    name: "Taco Tuesday Hang",
    date: "2025-11-04",
    category: "Eat-out",
    description: "Late-night tacos at the food truck court.",
  },
  {
    id: 3,
    name: "Beach Bonanza!",
    date: "2025-11-09",
    category: "Beach",
    description: "Bring sunscreen and volleyballs.",
  },
  {
    id: 4,
    name: "Open-Air Concert",
    date: "2025-11-12",
    category: "Concert",
    description: "Indie bands + picnic blankets at the pier.",
  },
  {
    id: 5,
    name: "Game Night Showdown",
    date: "2025-11-18",
    category: "Fun & Games",
    description: "Board games and snacks at Steph's place.",
  },
  {
    id: 6,
    name: "Road Trip South",
    date: "2025-11-22",
    category: "Road Trip",
    description: "Weekend escape down the coast.",
  },
];

const categoryBadgeClasses: Record<string, string> = {
  Beach: "bg-sky-100 text-sky-700",
  Concert: "bg-purple-100 text-purple-700",
  "Fun & Games": "bg-pink-100 text-pink-700",
  "Eat-out": "bg-orange-100 text-orange-700",
  "Road Trip": "bg-amber-100 text-amber-700",
  Jogging: "bg-emerald-100 text-emerald-700",
};

const calendarCells = [
  { date: "2025-10-26", label: "26", isCurrentMonth: false },
  { date: "2025-10-27", label: "27", isCurrentMonth: false },
  { date: "2025-10-28", label: "28", isCurrentMonth: false },
  { date: "2025-10-29", label: "29", isCurrentMonth: false },
  { date: "2025-10-30", label: "30", isCurrentMonth: false },
  { date: "2025-10-31", label: "31", isCurrentMonth: false },
  { date: "2025-11-01", label: "1", isCurrentMonth: true },
  { date: "2025-11-02", label: "2", isCurrentMonth: true },
  { date: "2025-11-03", label: "3", isCurrentMonth: true },
  { date: "2025-11-04", label: "4", isCurrentMonth: true },
  { date: "2025-11-05", label: "5", isCurrentMonth: true },
  { date: "2025-11-06", label: "6", isCurrentMonth: true },
  { date: "2025-11-07", label: "7", isCurrentMonth: true },
  { date: "2025-11-08", label: "8", isCurrentMonth: true },
  { date: "2025-11-09", label: "9", isCurrentMonth: true },
  { date: "2025-11-10", label: "10", isCurrentMonth: true },
  { date: "2025-11-11", label: "11", isCurrentMonth: true },
  { date: "2025-11-12", label: "12", isCurrentMonth: true },
  { date: "2025-11-13", label: "13", isCurrentMonth: true },
  { date: "2025-11-14", label: "14", isCurrentMonth: true },
  { date: "2025-11-15", label: "15", isCurrentMonth: true },
  { date: "2025-11-16", label: "16", isCurrentMonth: true },
  { date: "2025-11-17", label: "17", isCurrentMonth: true },
  { date: "2025-11-18", label: "18", isCurrentMonth: true },
  { date: "2025-11-19", label: "19", isCurrentMonth: true },
  { date: "2025-11-20", label: "20", isCurrentMonth: true },
  { date: "2025-11-21", label: "21", isCurrentMonth: true },
  { date: "2025-11-22", label: "22", isCurrentMonth: true },
  { date: "2025-11-23", label: "23", isCurrentMonth: true },
  { date: "2025-11-24", label: "24", isCurrentMonth: true },
  { date: "2025-11-25", label: "25", isCurrentMonth: true },
  { date: "2025-11-26", label: "26", isCurrentMonth: true },
  { date: "2025-11-27", label: "27", isCurrentMonth: true },
  { date: "2025-11-28", label: "28", isCurrentMonth: true },
  { date: "2025-11-29", label: "29", isCurrentMonth: true },
  { date: "2025-11-30", label: "30", isCurrentMonth: true },
  { date: "2025-12-01", label: "1", isCurrentMonth: false },
  { date: "2025-12-02", label: "2", isCurrentMonth: false },
  { date: "2025-12-03", label: "3", isCurrentMonth: false },
  { date: "2025-12-04", label: "4", isCurrentMonth: false },
  { date: "2025-12-05", label: "5", isCurrentMonth: false },
  { date: "2025-12-06", label: "6", isCurrentMonth: false },
];

const eventsByDate = mockEvents.reduce<Record<string, Event[]>>((acc, event) => {
  if (!acc[event.date]) {
    acc[event.date] = [];
  }
  acc[event.date].push(event);
  return acc;
}, {});

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <Header />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-10 sm:px-10">
        <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">Calendar</h1>
            <p className="text-sm text-gray-500 sm:text-base">
              Map out hangouts and see where the crew is meeting next.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-medium text-gray-500 sm:text-sm">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
              <span>6 plans locked in</span>
            </div>
            <Link
              href="/dashboard/create"
              className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-900"
            >
              + Schedule Event
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col items-start justify-between gap-4 border-b border-gray-100 px-6 py-5 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">November 2025</h2>
                <p className="text-xs text-gray-500 sm:text-sm">Check who&apos;s free and align invites.</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-700"
                  aria-label="Go to previous month"
                  disabled
                >
                  <span aria-hidden className="text-lg">
                    ‹
                  </span>
                </button>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-700"
                  aria-label="Go to next month"
                  disabled
                >
                  <span aria-hidden className="text-lg">
                    ›
                  </span>
                </button>
              </div>
            </div>

            <div className="px-4 py-6 sm:px-6">
              <div className="grid grid-cols-7 text-center text-[11px] font-medium uppercase tracking-wide text-gray-400 sm:text-xs">
                {weekDayLabels.map((label) => (
                  <span key={label} className="py-2">
                    {label}
                  </span>
                ))}
              </div>
              <div className="mt-1 grid grid-cols-7 gap-1 sm:gap-2">
                {calendarCells.map((cell) => {
                  const cellEvents = eventsByDate[cell.date] ?? [];
                  return (
                    <div
                      key={cell.date}
                      className={`min-h-[110px] rounded-2xl border p-3 text-left transition-colors sm:min-h-[120px] ${
                        cell.isCurrentMonth
                          ? "border-gray-200 bg-white"
                          : "border-dashed border-gray-200 bg-gray-50 text-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-medium text-gray-500">
                        <span className={cell.isCurrentMonth ? "text-gray-700" : ""}>{cell.label}</span>
                        {cellEvents.length > 1 && (
                          <span className="text-[10px] font-semibold text-gray-400 sm:text-xs">
                            +{cellEvents.length - 1}
                          </span>
                        )}
                      </div>

                      <div className="mt-2 space-y-1.5">
                        {cellEvents.slice(0, 1).map((event) => (
                          <div
                            key={event.id}
                            className="rounded-xl border border-gray-200 bg-gray-50 px-2 py-1.5"
                          >
                            <p className="text-xs font-semibold text-gray-800 line-clamp-2">{event.name}</p>
                            <span
                              className={`mt-1 inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ${
                                categoryBadgeClasses[event.category] ?? "bg-gray-100 text-gray-500"
                              }`}
                            >
                              {event.category}
                            </span>
                          </div>
                        ))}
                        {cellEvents.length > 1 && (
                          <p className="text-[11px] font-medium text-blue-600">View remaining</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-500 sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-3 w-3 rounded-full bg-blue-500" aria-hidden />
                  <span>Friends attending</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-3 w-3 rounded-full bg-gray-200" aria-hidden />
                  <span>Pending invites</span>
                </div>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Coming Up</h3>
              <p className="text-sm text-gray-500">Keep tabs on the next hangouts.</p>

              <ul className="mt-5 space-y-4">
                {mockEvents.map((event) => (
                  <li
                    key={event.id}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-4"
                  >
                    <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-white text-center shadow-inner">
                      <span className="text-xs font-semibold text-gray-700">
                        {new Date(event.date).toLocaleDateString(undefined, { month: "short" })}
                        <br />
                        <span className="text-sm text-gray-900">
                          {new Date(event.date).toLocaleDateString(undefined, { day: "2-digit" })}
                        </span>
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <p className="text-sm font-semibold text-gray-900">{event.name}</p>
                      <p className="text-xs text-gray-500">{event.description}</p>
                      <span
                        className={`inline-flex w-fit rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          categoryBadgeClasses[event.category] ?? "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {event.category}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-dashed border-gray-300 bg-white/60 p-6 text-center text-sm text-gray-500 shadow-inner">
              <p className="font-medium text-gray-600">Need to sync schedules?</p>
              <p className="mt-2 text-xs leading-relaxed text-gray-500">
                Add friends to the plan and we&apos;ll show their availability right here once connected.
              </p>
            </div>
          </aside>
        </section>
      </main>

      <MobileNav />
    </div>
  );
};

export default Page;
