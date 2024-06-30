"use client";

import "./globals.css";
import Provider from "@/components/provider";
import Image from "next/image";
import Link from "next/link";
import { BsList, BsX } from "react-icons/bs";
import { useState } from "react";

export default function RootLayout({ children }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    return (
        <html lang="fr-FR">
            <body>
                <div className="flex justify-between items-center w-full h-35 px-4 text-white bg-black">
                    <div className="logo">
                        <Link href="/">
                            <Image
                                className="avatar p-3"
                                src="/img/Group30.png"
                                width={200}
                                height={200}
                                alt="Alex Morel"
                            />
                        </Link>
                    </div>
                    <ul className="hidden md:flex">
                        <li>
                            <Link href="/projet">
                                <span className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 hover:text-green-500">
                                    Projets
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <span className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 hover:text-green-500">
                                    Expériences
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <span className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 hover:text-green-500">
                                    Contact
                                </span>
                            </Link>
                        </li>
                        <li>
                            <a
                                href="assets/cv.pdf"
                                target="_blank"
                                className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 hover:text-green-500"
                            >
                                Voir Cv
                            </a>
                        </li>
                    </ul>

                    {/* MOBILE MENU */}

                    <div onClick={toggleMenu} className="sm:hidden cursor-pointer pl-24">
                        <BsList className="h-8 w-15 text-[#fefefe]" />
                    </div>
                </div>
                <div
                    className={
                        menuOpen
                            ? "fixed top-0 left-0 w-[75%] h-screen bg-black p-10 ease-in-out duration-500 z-50"
                            : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500 z-50"
                    }
                >
                    <div className="flex w-full items-center justify-end">
                        <div onClick={toggleMenu} className="cursor-pointer">
                            <BsX className="h-8 w-15 text-[#22C55E]" />
                        </div>
                    </div>

                    {/* MOBILE MENU LINKS */}

                    <div className="flex-col py-4">
                        <ul>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 text-white hover:text-green-500"
                            >
                                <Link href="/projet">Projet</Link>
                            </li>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 text-white hover:text-green-500"
                            >
                                <Link href="/Experiences">Expériences</Link>
                            </li>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 text-white hover:text-green-500"
                            >
                                <Link href="/contact">Contact</Link>
                            </li>
                            <li
                                onClick={() => setMenuOpen(false)}
                                className="py-4 text-white hover:text-green-500"
                            >
                                <Link href="assets/cv.pdf" target="_blank" >Voir CV</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
