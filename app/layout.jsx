"use client";

import "./globals.css";
import Provider from "@/components/provider";
import Image from "next/image";
import Link from "next/link";
import { BsList, BsX } from "react-icons/bs";
import { useState } from "react";





export default function RootLayout({ children }) {
      const [menuOpen, setMenuOpen]= useState(false);
      const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
        <html lang="fr-FR">
            <body>
                <div
                    className="flex justify-between items-center w-full h-35 px-4 text-white bg-black 
         "
                >
                    <div className="logo">
                        <Link href="/">
                            {" "}
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
                            <Link
                                href="/projet"
                                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-green-500"
                            >
                                Projets
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="#Expériences"
                                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-green-500"
                            >
                                Expériences
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="#Diplomes"
                                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-green-500"
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <a
                                href="assets/cv.pdf"
                                target="_blank"
                                className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-green-500"
                            >
                                Voir Cv
                            </a>
                        </li>
                    </ul>

                    {/*MOBILE MENU*/}

                    <div oneClick={toggleMenu} 
                    className="sm:hidden cursor-pointer pl-24">
                        <BsList className="h-8 w-15 text-[#22C55E]" />
                    </div>
                </div>
                <div className={menuOpen ? "fixed top-o left-0 w-[75%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500" : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"}>
                        <div className="flex w-full items-center justify-end">
                            <div oneClick={toggleMenu} 
                            className="cursor-pointer">
                                <BsX className="h-8 w-15 text-[#22C55E] " />
                            </div>
                        </div>

                        {/*MOBILE MENU* LINKS */}

                        <div className="flex-col py-4">
                            <ul>
                                <li
                                    oneClick={() => setMenuOpen(false)}
                                    className="py-4  hover:text-green-500 "
                                >
                                    <Link href="/projet">Projet</Link>
                                </li>
                                <li
                                    oneClick={() => setMenuOpen(false)}
                                    className="py-4  hover:text-green-500"
                                >
                                    <Link href="/Experiences">Contact</Link>
                                </li>
                                <li
                                    oneClick={() => setMenuOpen(false)}
                                    className="py-4  hover:text-green-500"
                                >
                                    <Link href="/Contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
