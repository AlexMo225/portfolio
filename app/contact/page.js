"use client";

import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import dynamic from "next/dynamic";

const NoSSR = dynamic(() => Promise.resolve(({ children }) => children), {
    ssr: false,
});

export default function Contact() {
    const contactLinks = [
        {
            icon: FiMail,
            title: "Email",
            link: "mailto:alexmorel1999@gmail.com",
            text: "alexmorel1999@gmail.com",
            color: "emerald",
            bgClass: "bg-emerald-500/10",
            hoverBgClass: "group-hover:bg-emerald-500/20",
            textClass: "text-emerald-400",
        },
        {
            icon: FiGithub,
            title: "GitHub",
            link: "https://github.com/AlexMo225",
            text: "@AlexMo225",
            color: "blue",
            bgClass: "bg-blue-500/10",
            hoverBgClass: "group-hover:bg-blue-500/20",
            textClass: "text-blue-400",
        },
        {
            icon: FiLinkedin,
            title: "LinkedIn",
            link: "https://www.linkedin.com/in/alex-morel-sahie-1a73911b4/",
            text: "Sahie Alex",
            color: "purple",
            bgClass: "bg-purple-500/10",
            hoverBgClass: "group-hover:bg-purple-500/20",
            textClass: "text-purple-400",
        },
    ];

    return (
        <div className="bg-gradient-to-br from-gray-50 to-white dark:from-black dark:to-gray-900 min-h-screen flex flex-col items-center justify-center py-16 px-4 pt-24 transition-colors duration-300">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl w-full mx-auto"
            >
                <NoSSR>
                    <div className="bg-white/90 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 rounded-2xl p-8 shadow-xl relative overflow-hidden">
                        {/* Effet de gradient en arrière-plan */}
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-50 pointer-events-none"></div>

                        {/* Titre et description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative z-10 text-center mb-12"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                                📬 Contactez-moi
                            </h1>
                            <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
                                N'hésitez pas à me contacter pour discuter de
                                vos projets ou pour toute question.
                            </p>
                        </motion.div>

                        {/* Cartes de contact */}
                        <div className="grid md:grid-cols-3 gap-6 relative z-10">
                            {contactLinks.map((item, index) => (
                                <motion.a
                                    key={item.title}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.3 + index * 0.1,
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gray-100/70 dark:bg-gray-700/30 hover:bg-gray-200/80 dark:hover:bg-gray-700/50 rounded-xl p-6 flex flex-col items-center text-center group cursor-pointer transition-all duration-300"
                                >
                                    <div
                                        className={`w-16 h-16 ${item.bgClass} rounded-full flex items-center justify-center mb-4 ${item.hoverBgClass} transition-colors duration-300`}
                                    >
                                        <item.icon
                                            className={`text-3xl ${item.textClass}`}
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                        {item.text}
                                    </p>
                                </motion.a>
                            ))}
                        </div>

                        {/* Message de disponibilité */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-12 text-center relative z-10"
                        >
                            <p className="text-gray-400 text-lg">
                                Disponible pour de nouvelles opportunités et
                                collaborations
                            </p>
                        </motion.div>
                    </div>
                </NoSSR>
            </motion.div>
        </div>
    );
}
