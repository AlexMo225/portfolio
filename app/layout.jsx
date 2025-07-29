"use client";

import "./globals.css";
import Provider from "@/components/provider";
import Image from "next/image";
import Link from "next/link";
import { BsList, BsX } from "react-icons/bs";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
const HeaderClientOnly = dynamic(
    () => import("../components/HeaderClientOnly"),
    { ssr: false }
);

function RootLayout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Gestion du scroll
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Empêche le scroll quand le menu mobile est ouvert
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    const routes = [
        { label: "Projets", path: "/projet" },
        { label: "Expériences", path: "/experience" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <html lang="fr-FR" suppressHydrationWarning>
            <body
                className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-colors duration-300"
                suppressHydrationWarning
            >
                <Provider>
                    <HeaderClientOnly />
                    {children}
                </Provider>
            </body>
        </html>
    );
}

// Composant NavItem pour rendre la navigation plus claire
const NavItem = ({ href, label, external }) => {
    return external ? (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2.5 rounded-lg hover:bg-emerald-500/10"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {label}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={false}
                animate={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
            />
        </motion.a>
    ) : (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
                href={href}
                className="relative group text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2.5 rounded-lg hover:bg-emerald-500/10"
            >
                {label}
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    initial={false}
                    animate={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                />
            </Link>
        </motion.div>
    );
};

export default RootLayout;
