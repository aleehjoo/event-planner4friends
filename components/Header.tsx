"use client";

import { usePathname } from "next/navigation";
import { Bell, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    const navItems = NAV_ITEMS;

    const toggleNotifications = () => {
        setIsNotificationsOpen(!isNotificationsOpen);
    };

    const closeNotifications = () => {
        setIsNotificationsOpen(false);
    };

    return (
        <>
            <header className="flex items-center justify-between w-full px-10 py-5 bg-white shadow-md relative z-40">
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
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`relative pb-1 text-base font-medium !text-black hover:text-blue-700 transition-colors`}
                            >
                                {item.name}
                                {pathname === item.path && (
                                    <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-700 rounded-full" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    <Bell 
                        className="w-7 h-7 text-gray-700 cursor-pointer hover:text-black transition-colors" 
                        onClick={toggleNotifications}
                    />
                </div>
            </header>

            {/* Backdrop */}
            {isNotificationsOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-50 transition-opacity duration-300"
                    onClick={closeNotifications}
                />
            )}

            {/* Notifications Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
                    isNotificationsOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
                        <button
                            onClick={closeNotifications}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="Close notifications"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                <Bell className="w-10 h-10 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                No notifications yet
                            </h3>
                            <p className="text-sm text-gray-500 max-w-xs">
                                You're all caught up! When you have new notifications, they'll appear here.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
