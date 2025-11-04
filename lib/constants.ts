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
  { name: "Beach Bonanza", date: "Nov 12, 2025", img: "https://via.placeholder.com/1200x700?text=Beach+Bonanza" },
  { name: "City Lights Festival", date: "Dec 5, 2025", img: "https://via.placeholder.com/1200x700?text=City+Lights" },
  { name: "Mountain Music Fest", date: "Jan 8, 2026", img: "https://via.placeholder.com/1200x700?text=Mountain+Fest" },
];

