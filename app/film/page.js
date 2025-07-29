"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => Promise.resolve(({ children }) => children), {
    ssr: false,
});

export default function Film() {
    const technologies = [
        { name: "React", color: "bg-blue-500/10 text-blue-400" },
        { name: "API", color: "bg-green-500/10 text-green-400" },
        { name: "CSS", color: "bg-pink-500/10 text-pink-400" },
        { name: "JavaScript", color: "bg-yellow-500/10 text-yellow-400" },
    ];

    return (
        <div className="bg-gradient-to-br from-black to-gray-900 text-white min-h-screen flex justify-center items-center py-20 px-4 pt-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-5xl w-full mx-auto"
            >
                {/* En-tête avec navigation */}
                <div className="flex justify-between items-center mb-8">
                    <Link href="/projet">
                        <motion.button
                            whileHover={{ scale: 1.05, x: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                        >
                            <FiArrowLeft className="text-xl" />
                            <span>Retour aux projets</span>
                        </motion.button>
                    </Link>
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/AlexMo225/tp-tmdb-dynamique-ladthomas?tab=readme-ov-file"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FiGithub className="text-2xl" />
                        </a>
                        <a
                            href="https://splendid-belekoy-9b964e.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FiExternalLink className="text-2xl" />
                        </a>
                    </div>
                </div>

                {/* Contenu principal */}
                <NoSSR>
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl relative overflow-hidden">
                        {/* Effet de gradient en arrière-plan */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-50 pointer-events-none"></div>

                        {/* Titre et description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative z-10"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                                🎬 Ciné
                            </h1>
                            <p className="mt-4 text-center text-gray-300 text-lg max-w-2xl mx-auto">
                                Une application de recherche de films avec une
                                interface moderne et intuitive.
                            </p>
                        </motion.div>

                        {/* Image du projet */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-8 relative max-w-xl mx-auto"
                        >
                            <div className="relative rounded-xl overflow-hidden group">
                                <Image
                                    className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                                    src="/img/film.png"
                                    width={400}
                                    height={200}
                                    alt="Ciné App"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                            </div>
                        </motion.div>

                        {/* Détails du projet */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-12 grid md:grid-cols-2 gap-8 relative z-10"
                        >
                            {/* Informations principales */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                                        📌 À propos du projet
                                    </h3>
                                    <ul className="space-y-3 text-gray-300">
                                        <li className="flex items-center gap-2">
                                            <span className="font-medium text-white">
                                                Type :
                                            </span>
                                            <span>Projet personnel</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="font-medium text-white">
                                                Date :
                                            </span>
                                            <span>Mars 2024</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="font-medium text-white">
                                                Client :
                                            </span>
                                            <span>Projet personnel</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Technologies utilisées */}
                                <div>
                                    <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                                        🛠️ Technologies
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color}`}
                                            >
                                                {tech.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Fonctionnalités */}
                            <div>
                                <h3 className="text-xl font-semibold text-emerald-400 mb-3">
                                    ✨ Fonctionnalités
                                </h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-400">
                                            •
                                        </span>
                                        <span>
                                            Recherche de films en temps réel
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-400">
                                            •
                                        </span>
                                        <span>
                                            Affichage des détails des films
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-400">
                                            •
                                        </span>
                                        <span>
                                            Interface responsive et moderne
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-400">
                                            •
                                        </span>
                                        <span>Intégration de l'API TMDB</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Bouton d'action */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-12 flex justify-center"
                        >
                            <motion.a
                                href="https://splendid-belekoy-9b964e.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 cursor-pointer z-20"
                            >
                                <FiExternalLink className="text-xl" />
                                <span>Voir le site en direct</span>
                            </motion.a>
                        </motion.div>
                    </div>
                </NoSSR>
            </motion.div>
        </div>
    );
}
