"use client";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projet() {
    const [activeFilter, setActiveFilter] = useState("all");

    const projects = [
        {
            title: "Sponty Trip",
            description: "Plateforme de planification de voyages",
            image: "/img/sponty.png",
            link: "/spontytrip",
            category: "voyage",
            technologies: ["React", "API", "Tailwind CSS"],
            isLocal: true,
        },
        {
            title: "Bienvenue sur la Terre",
            description: "Site API Météo",
            image: "/img/terre.png",
            link: "/detail",
            category: "api",
            technologies: ["React", "API", "Tailwind"],
            isLocal: true,
        },
        {
            title: "SPICE BLOOM",
            description: "Site E-commerce vente d'épices",
            image: "/img/SP.png",
            link: "/details",
            category: "ecommerce",
            technologies: ["Next.js", "Stripe", "Tailwind"],
            isLocal: true,
        },
        {
            title: "Ciné",
            description: "Site API Cinéma",
            image: "/img/film.png",
            link: "/film",
            category: "api",
            technologies: ["React", "API", "CSS"],
            isLocal: true,
        },
    ];

    const categories = [
        { id: "all", name: "Tous" },
        { id: "api", name: "API" },
        { id: "ecommerce", name: "E-commerce" },
        { id: "voyage", name: "Voyage" },
    ];

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-10 py-16 pt-24 relative transition-colors duration-300">
            {/* Déco en arrière-plan */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-black opacity-30 rounded-lg blur-3xl pointer-events-none"></div>

            {/* TITRE */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-extrabold text-center text-emerald-400 mb-8 relative z-10"
            >
                Mes Projets
            </motion.h2>

            {/* FILTRES */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 mb-12 relative z-10"
            >
                {categories.map((category) => (
                    <motion.button
                        key={category.id}
                        onClick={() => setActiveFilter(category.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            activeFilter === category.id
                                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                                : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                        }`}
                    >
                        {category.name}
                    </motion.button>
                ))}
            </motion.div>

            {/* GRID DES PROJETS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 w-full max-w-7xl">
                <AnimatePresence mode="wait">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <Link href={project.link} className="block">
                                <div className="relative bg-white/90 dark:bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_15px_40px_rgba(16,185,129,0.2)]">
                                    {/* Animation d'effet lumineux */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                                    {/* IMAGE */}
                                    <div className="relative overflow-hidden rounded-lg">
                                        {project.isLocal ? (
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="h-64 w-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                                                style={{
                                                    width: "100%",
                                                    height: "256px",
                                                }}
                                            />
                                        ) : (
                                            <CldImage
                                                src={project.image}
                                                alt={project.title}
                                                className="h-64 w-full object-cover object-center transform transition-transform duration-500 group-hover:scale-110"
                                                width={300}
                                                height={200}
                                                priority
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                                    </div>

                                    {/* TEXTE */}
                                    <div className="p-6">
                                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-emerald-400 transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="mt-2 text-gray-600 dark:text-gray-300">
                                            {project.description}
                                        </p>

                                        {/* Technologies */}
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.technologies.map(
                                                (tech, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    {/* BOUTON */}
                                    <div className="p-6 flex justify-center">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 text-center w-full z-20"
                                        >
                                            Voir détails
                                        </motion.div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
