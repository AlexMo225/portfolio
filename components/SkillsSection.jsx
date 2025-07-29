"use client";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaGitAlt,
    FaDatabase,
    FaPython,
    FaFigma,
    FaBootstrap,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiTypescript,
    SiFirebase,
    SiVercel,
    SiNetlify,
} from "react-icons/si";

const skills = [
    { name: "React", icon: FaReact, color: "text-blue-500", level: 90 },
    {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-black dark:text-white",
        level: 85,
    },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500", level: 88 },
    {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-600",
        level: 75,
    },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600", level: 80 },
    { name: "Express", icon: SiExpress, color: "text-gray-600", level: 75 },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500", level: 78 },
    {
        name: "Tailwind",
        icon: SiTailwindcss,
        color: "text-cyan-500",
        level: 92,
    },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500", level: 95 },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500", level: 90 },
    { name: "Git", icon: FaGitAlt, color: "text-orange-600", level: 82 },
    { name: "Figma", icon: FaFigma, color: "text-purple-500", level: 70 },
];

const SkillsSection = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        💻 Mes Compétences
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Technologies et outils que je maîtrise pour créer des
                        expériences web modernes
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300"
                        >
                            <skill.icon
                                className={`text-4xl ${skill.color} mx-auto mb-3`}
                            />
                            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                {skill.name}
                            </h3>

                            {/* Barre de progression */}
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                                <motion.div
                                    className="bg-emerald-500 h-2 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1,
                                        delay: index * 0.1 + 0.5,
                                    }}
                                />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                {skill.level}%
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
