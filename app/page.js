"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Home() {
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

            {/* Contenu principal */}
            <main className="bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 pt-24 px-6 pb-6 lg:p-20 min-h-screen flex items-center justify-center transition-colors duration-300">
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
                            className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white"
                        >
                            Alex Morel{" "}
                            <span className="text-emerald-500">SAHIE.</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-2xl lg:text-4xl font-bold mt-4 text-gray-900 dark:text-white"
                        >
                            Je suis{" "}
                            <span className="text-emerald-500 font-bold">
                                <Typewriter
                                    words={[
                                        "Étudiant",
                                        "Développeur Web",
                                        "Full Stack",
                                        "à Webstart Paris.",
                                    ]}
                                    loop={6}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={150}
                                    deleteSpeed={70}
                                    delaySpeed={1000}
                                />
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-gray-600 dark:text-gray-300 py-6 max-w-md mx-auto md:mx-0 leading-relaxed"
                        >
                            Je suis étudiant en développement web Full Stack.
                            Étudiant enthousiaste, je suis actuellement plongé
                            dans le monde fascinant de l'informatique à Webstart
                            Paris. Mon parcours académique est une aventure
                            stimulante où je découvre et apprends constamment de
                            nouvelles technologies.
                        </motion.p>

                        {/* Boutons d'actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex justify-center md:justify-start space-x-4"
                        >
                            <Link
                                href="/projet"
                                className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25 z-20"
                            >
                                Voir mes projets
                            </Link>
                            <Link
                                href="/contact"
                                className="px-6 py-3 border border-gray-400 dark:border-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-gray-300/25 dark:hover:shadow-white/10"
                            >
                                Me contacter
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

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center px-4 sm:px-0 mt-8 sm:mt-0"
                    >
                        <div className="relative w-full max-w-sm mx-auto">
                            {/* Cercles animés en arrière-plan */}
                            <div className="absolute inset-0 animate-spin-slow">
                                <div className="absolute top-0 left-1/2 w-3 h-3 bg-emerald-400 rounded-full transform -translate-x-1/2 animate-pulse"></div>
                                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-emerald-300 rounded-full transform -translate-x-1/2 animate-pulse delay-1000"></div>
                                <div className="absolute left-0 top-1/2 w-2.5 h-2.5 bg-emerald-500 rounded-full transform -translate-y-1/2 animate-pulse delay-500"></div>
                                <div className="absolute right-0 top-1/2 w-2 h-2 bg-emerald-400 rounded-full transform -translate-y-1/2 animate-pulse delay-1500"></div>
                            </div>

                            {/* Ring externe qui pulse */}
                            <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 animate-ping"></div>
                            <div className="absolute inset-2 rounded-full border border-emerald-300/20 animate-pulse"></div>

                            {/* Glow principal */}
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 via-emerald-500/40 to-emerald-400/30 rounded-full blur-xl animate-pulse"></div>

                            {/* Container de l'image ronde */}
                            <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-white/10 group">
                                {/* Gradient overlay pour l'effet de profondeur */}
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-emerald-900/20 rounded-full z-20 group-hover:to-emerald-500/30 transition-all duration-500"></div>

                                <Image
                                    className="w-full h-full object-cover object-center relative z-10 group-hover:scale-110 transition-all duration-700 ease-out"
                                    src="/img/profil.png"
                                    width={400}
                                    height={400}
                                    alt="Alex Morel"
                                    priority
                                    sizes="(max-width: 640px) 300px, 400px"
                                />

                                {/* Ring intérieur qui brille */}
                                <div className="absolute inset-0 rounded-full border-2 border-emerald-400/50 group-hover:border-emerald-300/70 transition-all duration-500"></div>
                            </div>

                            {/* Étoiles scintillantes */}
                            <div className="absolute -top-2 -right-2 w-1 h-1 bg-emerald-300 rounded-full animate-twinkle"></div>
                            <div className="absolute -bottom-3 -left-1 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-twinkle delay-700"></div>
                            <div className="absolute top-1/4 -left-3 w-1 h-1 bg-emerald-200 rounded-full animate-twinkle delay-300"></div>
                            <div className="absolute bottom-1/3 -right-2 w-1 h-1 bg-emerald-500 rounded-full animate-twinkle delay-1000"></div>
                        </div>
                    </motion.div>
                </section>
            </main>
        </>
    );
}
