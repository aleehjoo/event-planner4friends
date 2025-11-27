import { Home, PlusCircle, Calendar, User } from "lucide-react";

export const NAV_ITEMS = [
  { name: "Home", shortName: "Home", path: "/dashboard", icon: Home },
  { name: "Create Event", shortName: "Create", path: "/dashboard/create", icon: PlusCircle },
  { name: "Calendar", shortName: "Calendar", path: "/dashboard/calendar", icon: Calendar },
  { name: "Profile", shortName: "Profile", path: "/dashboard/profile", icon: User },
] as const;

// Shared placeholder categories for UI pills
export const EVENT_CATEGORIES = [
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

// Shared placeholder events for carousel
export const CAROUSEL_EVENTS = [
  { name: "Beach Bonanza", date: "Nov 12, 2025", img: "https://via.placeholder.com/1200x700?text=Beach+Bonanza", category: "Beach" as EventCategory },
  { name: "City Lights Festival", date: "Dec 5, 2025", img: "https://via.placeholder.com/1200x700?text=City+Lights", category: "Concert" as EventCategory },
  { name: "Mountain Music Fest", date: "Jan 8, 2026", img: "https://via.placeholder.com/1200x700?text=Mountain+Fest", category: "Concert" as EventCategory },
  { name: "Game Night Extravaganza", date: "Nov 15, 2025", img: "https://via.placeholder.com/1200x700?text=Game+Night", category: "Fun & Games" as EventCategory },
  { name: "Sunset Swimming Session", date: "Nov 18, 2025", img: "https://via.placeholder.com/1200x700?text=Swimming", category: "Swimming" as EventCategory },
  { name: "Foodie Adventure", date: "Nov 20, 2025", img: "https://via.placeholder.com/1200x700?text=Foodie", category: "Eat-out" as EventCategory },
  { name: "Movie Marathon", date: "Nov 22, 2025", img: "https://via.placeholder.com/1200x700?text=Movies", category: "Movie" as EventCategory },
  { name: "Road Trip Adventure", date: "Nov 25, 2025", img: "https://via.placeholder.com/1200x700?text=Road+Trip", category: "Road Trip" as EventCategory },
];

// Derived types
export type EventCategory = typeof EVENT_CATEGORIES[number]["name"];

