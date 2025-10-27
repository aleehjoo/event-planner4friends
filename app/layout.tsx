import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
    variable: "--font-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Hangout Planner",
    description: "An app that makes planning hangouts with your friends easier",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${poppins.variable} antialiased font-sans`}>
        {children}
        </body>
        </html>
    );
}
