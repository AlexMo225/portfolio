"use client";

import "./globals.css";
import Provider from "@/components/provider";
import Image from "next/image";
import Link from "next/link";
import { BsList, BsX } from "react-icons/bs";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
    <html lang="fr-FR">
      <body className="bg-gray-900 text-white font-sans">
          {/* Header */}
          <header className="flex justify-between items-center w-full h-16 px-6 sm:px-10 bg-black/80 backdrop-blur-md fixed top-0 z-50">
            {/* LOGO AMÉLIORÉ */}
            <Link href="/" className="flex items-center">
              <Image
                className="w-auto h-12 md:h-16 object-contain hover:scale-110 transition-transform duration-300"
                src="/img/Group30.png"
                width={150}
                height={150}
                alt="Alex Morel"
                priority
              />
            </Link>

            {/* NAVIGATION DESKTOP */}
            <nav className="hidden md:flex space-x-8">
              {routes.map(({ label, path }) => (
                <NavItem key={label} href={path} label={label} />
              ))}
              <NavItem href="/assets/cv.pdf" label="Voir CV" external />
            </nav>

            {/* BOUTON MENU BURGER (MOBILE) */}
            <button
              aria-label="Toggle menu"
              onClick={toggleMenu}
              className="md:hidden cursor-pointer text-white"
            >
              <BsList className="h-8 w-8" />
            </button>
          </header>

          {/* MENU MOBILE ANIMÉ */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-[75%] sm:w-[60%] h-screen bg-black/90 backdrop-blur-md p-10 z-50"
              >
                <div className="flex w-full items-center justify-end">
                  <button aria-label="Close menu" onClick={toggleMenu} className="cursor-pointer">
                    <BsX className="h-8 w-8 text-green-500" />
                  </button>
                </div>

                <ul className="flex flex-col py-8 space-y-6">
                  {routes.map(({ label, path }) => (
                    <li key={label} onClick={() => setMenuOpen(false)}>
                      <Link href={path} className="py-4 hover:text-green-500 transition-colors duration-300">
                        {label}
                      </Link>
                    </li>
                  ))}
                  <li onClick={() => setMenuOpen(false)}>
                    <Link href="/assets/cv.pdf" target="_blank" className="py-4 hover:text-green-500 transition-colors duration-300">
                      Voir CV
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CONTENU PRINCIPAL */}
          <Provider>{children}</Provider>
      </body>
    </html>
  );
}

// Composant NavItem pour rendre la navigation plus claire
const NavItem = ({ href, label, external }) => {
  return external ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group text-white hover:text-green-500 transition-colors duration-300"
    >
      {label}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
      />
    </a>
  ) : (
    <Link href={href} className="relative group text-white hover:text-green-500 transition-colors duration-300">
      {label}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
      />
    </Link>
  );
};

export default RootLayout;
