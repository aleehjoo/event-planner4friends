"use client";

import React from 'react'
import Header from "@/components/Header";
import MobileNav from "@/components/MobileNav";
import { Edit2, Mail, Calendar, Users, MapPin, Settings, Bell, Shield, LogOut } from "lucide-react";

const Page = () => {
    return (
        <div className="pb-20 bg-gray-50 min-h-screen">
            <Header />
            
            <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-10 py-8 md:py-12">
                {/* Profile Header */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <div className="relative">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl md:text-4xl font-bold shadow-lg">
                                JD
                            </div>
                            <button className="absolute bottom-0 right-0 w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md hover:bg-blue-700 transition-colors">
                                <Edit2 className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                        </div>
                        
                        <div className="flex-1 w-full">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">John Doe</h1>
                                    <p className="text-gray-500 text-sm md:text-base">@johndoe</p>
                                </div>
                                <button className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors shadow-sm text-sm md:text-base">
                                    <Edit2 className="w-4 h-4" />
                                    Edit Profile
                                </button>
                            </div>
                            
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Event planner enthusiast who loves organizing fun hangouts with friends. Always up for a good time! 🎉
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 text-center">
                        <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">12</div>
                        <div className="text-xs md:text-sm text-gray-500">Events Created</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 text-center">
                        <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">28</div>
                        <div className="text-xs md:text-sm text-gray-500">Events Attended</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 text-center">
                        <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">45</div>
                        <div className="text-xs md:text-sm text-gray-500">Friends</div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 text-center">
                        <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">8</div>
                        <div className="text-xs md:text-sm text-gray-500">Upcoming</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Account Information */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                            <Mail className="w-5 h-5 text-blue-600" />
                            Account Information
                        </h2>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-500 mb-1">Email</label>
                                <div className="text-sm md:text-base text-gray-900 font-medium">john.doe@example.com</div>
                            </div>
                            
                            <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-500 mb-1">Username</label>
                                <div className="text-sm md:text-base text-gray-900 font-medium">@johndoe</div>
                            </div>
                            
                            <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-500 mb-1">Member Since</label>
                                <div className="text-sm md:text-base text-gray-900 font-medium">January 2024</div>
                            </div>
                            
                            <div>
                                <label className="block text-xs md:text-sm font-medium text-gray-500 mb-1">Location</label>
                                <div className="flex items-center gap-2 text-sm md:text-base text-gray-900 font-medium">
                                    <MapPin className="w-4 h-4 text-gray-400" />
                                    New York, NY
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preferences & Settings */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                            <Settings className="w-5 h-5 text-blue-600" />
                            Preferences
                        </h2>
                        
                        <div className="space-y-4">
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <Bell className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <div className="text-sm md:text-base font-medium text-gray-900">Notifications</div>
                                        <div className="text-xs md:text-sm text-gray-500">Event reminders and updates</div>
                                    </div>
                                </div>
                                <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <Calendar className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <div className="text-sm md:text-base font-medium text-gray-900">Email Reminders</div>
                                        <div className="text-xs md:text-sm text-gray-500">Get notified via email</div>
                                    </div>
                                </div>
                                <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer">
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                <div className="flex items-center gap-3">
                                    <Users className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <div className="text-sm md:text-base font-medium text-gray-900">Public Profile</div>
                                        <div className="text-xs md:text-sm text-gray-500">Visible to other users</div>
                                    </div>
                                </div>
                                <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                                </div>
                            </div>
                            
                            <div className="flex items-center justify-between py-2">
                                <div className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-gray-400" />
                                    <div>
                                        <div className="text-sm md:text-base font-medium text-gray-900">Privacy Mode</div>
                                        <div className="text-xs md:text-sm text-gray-500">Hide personal details</div>
                                    </div>
                                </div>
                                <div className="w-12 h-6 bg-gray-300 rounded-full relative cursor-pointer">
                                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="mt-6 bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-red-100">
                    <h2 className="text-xl md:text-2xl font-semibold text-red-600 mb-4">Danger Zone</h2>
                    <p className="text-sm md:text-base text-gray-600 mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                    </p>
                    <button className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors shadow-sm text-sm md:text-base">
                        <LogOut className="w-4 h-4" />
                        Delete Account
                    </button>
                </div>
            </main>

            <MobileNav />
        </div>
    )
}
export default Page
