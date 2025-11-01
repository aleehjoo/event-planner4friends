export type EventCategory = 
    | "Eat-out" 
    | "Drinking" 
    | "Swimming" 
    | "Church" 
    | "Overnight"
    | "Beach" 
    | "Amusement Park" 
    | "Just chilling" 
    | "Fun & Games"
    | "Movie" 
    | "Road Trip" 
    | "Bar" 
    | "Party" 
    | "Concert"
    | "Shopping" 
    | "Jogging";

export interface Event {
    id: number | string;
    name: string;
    date: string; // ISO date string (YYYY-MM-DD)
    category: EventCategory;
    imageUrl?: string;
    img?: string; // Legacy alias for imageUrl (for backward compat during migration)
    notes?: string;
    description?: string;
}

export interface EventFormData {
    name: string;
    date: string; // ISO date string (YYYY-MM-DD)
    category: EventCategory;
    imageUrl: string;
    notes: string;
}

// Type for carousel events which may have formatted date strings
export interface CarouselEvent {
    name: string;
    date: string; // Can be formatted date string for display
    img: string;
}

