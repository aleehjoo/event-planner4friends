import React from 'react'
import Header from "@/components/Header";
import CategoryPills from "@/components/CategoryPills";
import MobileNav from "@/components/MobileNav";

const Page = () => {
    return (
        <div>
            <Header />
           <CategoryPills />
            <div className="flex flex-row items-center justify-between px-10">
                <h2>Available Events</h2>
                <p className="text-sm text-gray-600 cursor-pointer hover:underline">
                    See All
                </p>
            </div>

            Dashboard Page
            <MobileNav />
        </div>
    )
}
export default Page
