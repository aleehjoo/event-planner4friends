"use client";

import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
    const pathname = usePathname();

    const navItems = NAV_ITEMS;

    return (
        <header className="flex items-center justify-between w-full px-10 py-5 bg-white shadow-md">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gray-300" />
                <div className="flex flex-col leading-tight">
                    <span className="text-sm text-gray-500">Welcome</span>
                    <span className="text-lg font-semibold text-gray-800">Display Name</span>
                </div>
            </div>

            <div className="flex items-center gap-10">
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.path}
                            className={`relative pb-1 text-base font-medium !text-black hover:text-blue-700 transition-colors`}
                        >
                            {item.name}
                            {pathname === item.path && (
                                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-700 rounded-full" />
                            )}
                        </a>
                    ))}
                </nav>

                <Bell className="w-7 h-7 text-gray-700 cursor-pointer hover:text-black transition-colors" />
            </div>
        </header>
    );
}
