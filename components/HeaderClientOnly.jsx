"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsList, BsX } from "react-icons/bs";
import ThemeToggle from "./ThemeToggle";

const routes = [
    { label: "Projets", path: "/projet" },
    { label: "Expériences", path: "/experience" },
    { label: "Contact", path: "/contact" },
];

export default function HeaderClientOnly() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return (
        <header
            className={`flex justify-between items-center w-full h-20 px-8 sm:px-12 fixed top-0 z-50 border-b border-emerald-500/10 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/40 dark:bg-black/40 backdrop-blur-lg md:bg-gradient-to-r md:from-white/95 md:to-gray-50/95 md:dark:from-black/95 md:dark:to-gray-900/95 md:backdrop-blur-xl"
                    : "bg-gradient-to-r from-white/95 to-gray-50/95 dark:from-black/95 dark:to-gray-900/95 backdrop-blur-xl"
            }`}
        >
            {/* LOGO */}
            <Link href="/" className="flex items-center">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative"
                >
                    <Image
                        className="w-auto h-14 md:h-16 object-contain relative z-10"
                        src="/img/Group30.png"
                        width={150}
                        height={150}
                        alt="Alex Morel"
                        priority
                    />
                </motion.div>
            </Link>

            {/* NAVIGATION DESKTOP */}
            <nav className="hidden md:flex items-center space-x-1">
                {routes.map(({ label, path }) => (
                    <NavItem key={label} href={path} label={label} />
                ))}
                <div className="h-6 w-px bg-gray-300/50 dark:bg-gray-700/50 mx-2"></div>
                <NavItem href="/assets/cv.pdf" label="Voir CV" external />
                <div className="h-6 w-px bg-gray-300/50 dark:bg-gray-700/50 mx-2"></div>
                <ThemeToggle />
            </nav>

            {/* MOBILE ACTIONS */}
            <div className="md:hidden flex items-center space-x-2">
                <ThemeToggle />
                <motion.button
                    aria-label="Toggle menu"
                    onClick={toggleMenu}
                    className="cursor-pointer text-gray-800 dark:text-white relative z-50 p-2.5 rounded-lg hover:bg-emerald-500/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        {menuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <BsX className="h-7 w-7 text-emerald-500" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="open"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <BsList className="h-7 w-7" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* MENU MOBILE ANIMÉ */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            onClick={toggleMenu}
                        />
                        {/* Menu */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 200,
                            }}
                            className="fixed top-0 right-0 w-[75%] sm:w-[60%] h-screen bg-gray-900/95 backdrop-blur-md p-10 z-50 shadow-2xl"
                        >
                            <ul className="flex flex-col py-8 space-y-6">
                                {routes.map(({ label, path }, index) => (
                                    <motion.li
                                        key={label}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <Link
                                            href={path}
                                            className="text-xl font-medium text-white hover:text-emerald-500 transition-colors duration-300 flex items-center gap-2"
                                        >
                                            <span className="text-emerald-500">
                                                →
                                            </span>
                                            {label}
                                        </Link>
                                    </motion.li>
                                ))}
                                <motion.li
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: routes.length * 0.1 }}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    <Link
                                        href="/assets/cv.pdf"
                                        target="_blank"
                                        className="text-xl font-medium text-white hover:text-emerald-500 transition-colors duration-300 flex items-center gap-2"
                                    >
                                        <span className="text-emerald-500">
                                            →
                                        </span>
                                        Voir CV
                                    </Link>
                                </motion.li>
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}

// Composant NavItem pour rendre la navigation plus claire
const NavItem = ({ href, label, external }) => {
    return external ? (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 px-4 py-2.5 rounded-lg hover:bg-emerald-500/10"
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
                className="relative group text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300 px-4 py-2.5 rounded-lg hover:bg-emerald-500/10"
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
