"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

// Nouveaux composants
import SkillsSection from "@/components/SkillsSection";
import StatsCounter from "@/components/StatsCounter";
import CallToAction from "@/components/CallToAction";

export default function HomeEnhanced() {
    return (
        <>
            {/* SEO Dynamique */}
            <Head>
                <title>Portfolio | Alex Morel Sahie</title>
                <meta
                    name="description"
                    content="Portfolio d'Alex Morel Sahie, étudiant en développement web Full Stack."
                />
            </Head>

            {/* Section Hero existante */}
            <main className="bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 p-6 lg:p-20 min-h-screen flex items-center justify-center transition-colors duration-300">
                <section className="container mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
                    {/* Texte à gauche */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
                        >
                            Alex Morel{" "}
                            <span className="text-emerald-500 bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                                SAHIE.
                            </span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl lg:text-4xl font-bold mt-4 text-gray-900 dark:text-white max-w-full overflow-hidden"
                        >
                            Je suis{" "}
                            <span className="text-emerald-500 font-bold block sm:inline">
                                <Typewriter
                                    words={[
                                        "Développeur",
                                        "Full Stack",
                                        "Créatif",
                                        "Passionné",
                                    ]}
                                    loop={6}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={120}
                                    deleteSpeed={80}
                                    delaySpeed={1200}
                                />
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-gray-600 dark:text-gray-300 py-6 max-w-lg mx-auto md:mx-0 leading-relaxed text-lg text-description-enhanced"
                        >
                            <span className="font-semibold text-gray-700 dark:text-gray-200">
                                Développeur Web & Mobile Full Stack diplômé
                            </span>
                            , je conçois des applications modernes, performantes
                            et centrées sur l'utilisateur. À travers mes
                            projets, j'ai développé une forte sensibilité
                            produit et une vraie capacité à faire le lien entre
                            les besoins métiers, l'expérience utilisateur et les
                            contraintes techniques.
                            <br />
                            <br />
                            <span className="text-emerald-600 dark:text-emerald-400 font-medium">
                                Aujourd'hui, je souhaite mettre mes compétences
                                au service d'équipes agiles
                            </span>{" "}
                            en tant que développeur ou alternant chef de projet
                            digital, dans un environnement tech stimulant et
                            collaboratif.
                        </motion.p>

                        {/* Boutons d'actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col sm:flex-row justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mt-8"
                        >
                            <Link
                                href="/projet"
                                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-xl hover:shadow-emerald-500/30 flex items-center justify-center space-x-2 group enhanced-button"
                            >
                                <span>Découvrir mes projets</span>
                                <i className="bi bi-arrow-right group-hover:translate-x-1 transition-transform"></i>
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 border-2 border-emerald-500 dark:border-emerald-400 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-emerald-300/25 dark:hover:shadow-emerald-400/20 flex items-center justify-center space-x-2 group enhanced-button"
                            >
                                <span>Collaborons ensemble</span>
                                <i className="bi bi-envelope group-hover:scale-110 transition-transform"></i>
                            </Link>
                        </motion.div>

                        {/* Icônes réseaux */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="mt-6 flex justify-center md:justify-start space-x-6"
                        >
                            <Link
                                href="https://github.com/AlexMo225"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="hover:scale-110 transition-transform"
                            >
                                <i className="bi bi-github text-gray-700 dark:text-white text-2xl hover:text-emerald-500 transition-all"></i>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/alex-morel-sahie-1a73911b4/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="hover:scale-110 transition-transform"
                            >
                                <i className="bi bi-linkedin text-gray-700 dark:text-white text-2xl hover:text-emerald-500 transition-all"></i>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Image corrigée */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center px-4 sm:px-0"
                    >
                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                            <div className="absolute inset-0 bg-emerald-500/20 rounded-lg blur-2xl pointer-events-none"></div>
                            <Image
                                className="rounded-lg shadow-2xl w-full h-auto object-cover object-center relative z-10 hover:scale-105 transition-transform duration-500"
                                src="/img/profil.png"
                                width={500}
                                height={500}
                                alt="Alex Morel"
                                priority
                                sizes="(max-width: 640px) 80vw, (max-width: 768px) 60vw, (max-width: 1024px) 50vw, 400px"
                            />
                        </div>
                    </motion.div>
                </section>
            </main>

            {/* NOUVELLES SECTIONS */}
            <SkillsSection />
            <StatsCounter />
            <CallToAction />
        </>
    );
}
