"use client";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaPhp,
    FaCss3Alt,
    FaDatabase,
    FaJava,
    FaAndroid,
    FaLaravel,
    FaHtml5,
    FaJs,
    FaFigma,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const experiences = [
    {
        title: "🎓 Bachelor Développement Web & Mobile",
        company: "Webstart Paris",
        date: "2022 - 2025",
        description:
            "Formation complète en développement Full Stack : technologies web modernes, développement mobile, backend, bases de données, méthodologies agiles, gestion de projet et UI/UX design. Maîtrise complète de la stack de développement moderne.",
        techs: [
            { name: "HTML/CSS", icon: <FaHtml5 /> },
            { name: "JavaScript", icon: <FaJs /> },
            { name: "React", icon: <FaReact /> },
            { name: "PHP", icon: <FaPhp /> },
            { name: "Laravel", icon: <FaLaravel /> },
            { name: "Java", icon: <FaJava /> },
            { name: "Android", icon: <FaAndroid /> },
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Firebase", icon: <SiFirebase /> },
            { name: "Databases", icon: <FaDatabase /> },
            { name: "Figma", icon: <FaFigma /> },
        ],
        type: "formation",
    },
    {
        title: "Stage Développeur Full Stack",
        company: "Webstart",
        date: "Juin - Septembre 2023",
        description:
            "Développement d'un site e-commerce en PHP, JavaScript et Tailwind. Expérience pratique en entreprise avec méthodes agiles.",
        techs: [
            { name: "PHP", icon: <FaPhp /> },
            { name: "JavaScript" },
            { name: "Tailwind CSS", icon: <FaCss3Alt /> },
        ],
        type: "experience",
    },
    {
        title: "🌐 Formation Métiers du Web",
        company: "3W Academy (à distance)",
        date: "2021",
        description:
            "Formation intensive aux métiers du web : intégration HTML/CSS, JavaScript, responsive design, gestion de projet web, bonnes pratiques du développement.",
        techs: [
            { name: "HTML/CSS", icon: <FaCss3Alt /> },
            { name: "JavaScript" },
            { name: "Responsive Design" },
        ],
        type: "formation",
    },
    {
        title: "Projet SpontyTrip - App Mobile",
        company: "Projet Personnel",
        date: "Mars - Juillet 2025",
        description:
            "Développement d'une app mobile de planification de voyages avec React Native et Firebase. Fonctionnalités collaboratives et gestion financière.",
        techs: [
            { name: "React Native", icon: <FaReact /> },
            { name: "Firebase", icon: <FaDatabase /> },
            { name: "API", icon: <FaNodeJs /> },
        ],
        links: [
            { name: "GitHub", url: "https://github.com/AlexMo225" },
            { name: "Landing page", url: "https://spontytriplp.netlify.app" },
        ],
        type: "projet",
    },
    {
        title: "⚡ BTS Électrotechnique",
        company: "Lycée Geoffroy-Saint-Hilaire",
        date: "2019",
        description:
            "Formation technique en électrotechnique et automatismes. Base solide en logique technique et résolution de problèmes complexes, compétences transférables au développement.",
        techs: [
            { name: "Automatismes" },
            { name: "Logique technique" },
            { name: "Résolution problèmes" },
        ],
        type: "formation",
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
                        className={`relative p-6 sm:p-8 rounded-xl shadow-lg group overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                            exp.type === "formation"
                                ? "bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-emerald-200 dark:border-emerald-700 hover:shadow-emerald-500/20"
                                : exp.type === "experience"
                                ? "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-green-500/20"
                                : "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-700 hover:shadow-blue-500/20"
                        }`}
                    >
                        {/* Animation d'effet lumineux */}
                        <div
                            className={`absolute inset-0 opacity-5 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none ${
                                exp.type === "formation"
                                    ? "bg-gradient-to-r from-emerald-500 to-teal-500"
                                    : exp.type === "experience"
                                    ? "bg-gradient-to-r from-green-500 to-green-900"
                                    : "bg-gradient-to-r from-blue-500 to-indigo-500"
                            }`}
                        ></div>

                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 leading-tight">
                            {exp.title}
                        </h3>
                        <p
                            className={`font-medium text-sm sm:text-base ${
                                exp.type === "formation"
                                    ? "text-emerald-600 dark:text-emerald-400"
                                    : exp.type === "experience"
                                    ? "text-green-400 dark:text-green-300"
                                    : "text-blue-600 dark:text-blue-400"
                            }`}
                        >
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

                        {/* Liens du projet */}
                        {exp.links && (
                            <div className="mt-4 flex flex-wrap gap-3">
                                {exp.links.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 text-sm font-medium transition-colors duration-200 hover:underline"
                                    >
                                        🔗 {link.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
