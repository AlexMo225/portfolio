"use client"; 
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPhp, FaCss3Alt, FaDatabase } from "react-icons/fa";

const experiences = [
    {
        title: "Stage Développeur Full Stack",
        company: "Webstart",
        date: "Juin - Septembre 2023",
        description: "Développement d'un site e-commerce en PHP, JavaScript et Tailwind.",
        techs: [{ name: "PHP", icon: <FaPhp /> }, { name: "JavaScript" }, { name: "Tailwind CSS", icon: <FaCss3Alt /> }],
    },
    {
        title: "Projet Perso - API Météo",
        company: "Allo La Terre",
        date: "Mars 2023",
        description: "Création d'une application météo consommant une API externe avec React.",
        techs: [{ name: "React", icon: <FaReact /> }, { name: "API OpenWeather" }, { name: "CSS", icon: <FaCss3Alt /> }],
    },
    {
        title: "Projet de Fin d'Études",
        company: "Webstart",
        date: "Décembre 2023",
        description: "Développement d'une plateforme de gestion de voyages avec Next.js et SQLite.",
        techs: [{ name: "Next.js", icon: <FaReact /> }, { name: "SQLite", icon: <FaDatabase /> }, { name: "Node.js", icon: <FaNodeJs /> }],
    },
];

export default function ExperienceGrid() {
    return (
        <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-10 py-16 relative">
            {/* Déco en arrière-plan */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-black opacity-40 rounded-lg blur-3xl"></div>

            <h2 className="text-5xl font-extrabold text-center text-green-400 mb-14 relative z-10">
                Mon Parcours 
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="relative bg-gray-800 p-8 rounded-xl shadow-lg group overflow-hidden border border-gray-700 transform transition-all duration-300 hover:scale-[1.05] hover:shadow-[0px_15px_40px_rgba(0,255,0,0.2)]"
                    >
                        {/* Animation d'effet lumineux */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-900 opacity-5 group-hover:opacity-20 transition-opacity duration-300"></div>

                        <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                        <p className="text-green-300">{exp.company} - {exp.date}</p>
                        <p className="mt-3 text-gray-300">{exp.description}</p>

                        {/* Technologies */}
                        <div className="mt-4 flex flex-wrap gap-3">
                            {exp.techs.map((tech, i) => (
                                <span key={i} className="flex items-center gap-1 bg-gray-700 text-green-400 text-sm font-semibold px-3 py-1 rounded-full">
                                    {tech.icon && <span className="text-lg">{tech.icon}</span>}
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
