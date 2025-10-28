"use client";

import { usePathname } from "next/navigation";
import { Home, PlusCircle, Calendar, User } from "lucide-react";

export default function MobileNav() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/dashboard", icon: Home },
        { name: "Create", path: "/dashboard/create", icon: PlusCircle },
        { name: "Calendar", path: "/dashboard/calendar", icon: Calendar },
        { name: "Profile", path: "/dashboard/profile", icon: User },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md md:hidden flex justify-around py-3 z-50">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.path;

                return (
                    <a
                        key={item.name}
                        href={item.path}
                        className={`flex flex-col items-center text-xs font-medium ${
                            isActive ? "text-blue-600" : "!text-gray-600"
                        } hover:!text-blue-700 transition-colors`}
                    >
                        <Icon className={`w-6 h-6 mb-1 ${isActive ? "text-blue-600" : "text-gray-600"}`} />
                        {item.name}
                    </a>
                );
            })}
        </nav>
    );
}
