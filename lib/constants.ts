import { Home, PlusCircle, Calendar, User } from "lucide-react";

export const NAV_ITEMS = [
  { name: "Home", shortName: "Home", path: "/dashboard", icon: Home },
  { name: "Create Event", shortName: "Create", path: "/dashboard/create", icon: PlusCircle },
  { name: "Calendar", shortName: "Calendar", path: "/dashboard/calendar", icon: Calendar },
  { name: "Profile", shortName: "Profile", path: "/dashboard/profile", icon: User },
] as const;


