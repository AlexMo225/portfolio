"use client";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaPhp,
    FaCss3Alt,
    FaDatabase,
} from "react-icons/fa";

const experiences = [
    {
        title: "Stage Développeur Full Stack",
        company: "Webstart",
        date: "Juin - Septembre 2023",
        description:
            "Développement d'un site e-commerce en PHP, JavaScript et Tailwind.",
        techs: [
            { name: "PHP", icon: <FaPhp /> },
            { name: "JavaScript" },
            { name: "Tailwind CSS", icon: <FaCss3Alt /> },
        ],
    },
    {
        title: "Projet Perso - API Météo",
        company: "Allo La Terre",
        date: "Mars 2023",
        description:
            "Création d'une application météo consommant une API externe avec React.",
        techs: [
            { name: "React", icon: <FaReact /> },
            { name: "API OpenWeather" },
            { name: "CSS", icon: <FaCss3Alt /> },
        ],
    },
    {
        title: "Projet de Fin d'Études",
        company: "Webstart",
        date: "Décembre 2023",
        description:
            "Développement d'une plateforme de gestion de voyages avec Next.js et SQLite.",
        techs: [
            { name: "Next.js", icon: <FaReact /> },
            { name: "SQLite", icon: <FaDatabase /> },
            { name: "Node.js", icon: <FaNodeJs /> },
        ],
    },
];

export default function ExperienceGrid() {
    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-10 py-16 pt-24 relative transition-colors duration-300 overflow-x-hidden">
            {/* Déco en arrière-plan CONTENUE */}
            <div className="absolute inset-4 bg-gradient-to-br from-green-900 to-black opacity-40 rounded-lg blur-xl pointer-events-none"></div>

            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-extrabold text-center text-green-400 mb-12 sm:mb-14 relative z-10"
            >
                Mon Parcours
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 relative z-10 w-full max-w-7xl">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg group overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-1"
                    >
                        {/* Animation d'effet lumineux */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-900 opacity-5 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>

                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                            {exp.title}
                        </h3>
                        <p className="text-green-400 dark:text-green-300 font-medium text-sm sm:text-base">
                            {exp.company} - {exp.date}
                        </p>
                        <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
                            {exp.description}
                        </p>

                        {/* Technologies */}
                        <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                            {exp.techs.map((tech, i) => (
                                <span
                                    key={i}
                                    className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-green-600 dark:text-green-400 text-xs sm:text-sm font-semibold px-2 py-1 sm:px-3 rounded-full transition-colors duration-200 hover:bg-green-100 dark:hover:bg-green-900/30"
                                >
                                    {tech.icon && (
                                        <span className="text-sm sm:text-lg">
                                            {tech.icon}
                                        </span>
                                    )}
                                    {tech.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
