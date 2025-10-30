import React from 'react'
import Header from "@/components/Header";
import CategoryPills from "@/components/CategoryPills";
import MobileNav from "@/components/MobileNav";
import EventsCarousel from "@/components/EventsCarousel";
import Link from "next/link";

const Page = () => {
    return (
        <div className="pb-20">
            <Header />
           <CategoryPills />
            <div className="flex flex-row items-center justify-between px-10">
                <h2>Available Events</h2>
                <Link href="/dashboard/events" className="text-sm text-gray-600 cursor-pointer hover:underline">
                    See All
                </Link>
            </div>
            <EventsCarousel />

            <MobileNav />
        </div>
    )
}
export default Page
