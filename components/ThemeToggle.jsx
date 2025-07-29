"use client";
import { motion } from "framer-motion";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = ({ className = "" }) => {
    const { theme, toggleTheme, isDark } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            className={`relative p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark
                    ? "bg-gray-800/50 hover:bg-gray-700/70 text-yellow-400"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            } ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Passer au thème ${isDark ? "clair" : "sombre"}`}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? 0 : 180,
                    scale: isDark ? 1 : 0.8,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative w-6 h-6 flex items-center justify-center"
            >
                {isDark ? (
                    <motion.div
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <BsSun className="w-5 h-5" />
                    </motion.div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, rotate: 90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: -90 }}
                        transition={{ duration: 0.2 }}
                    >
                        <BsMoon className="w-5 h-5" />
                    </motion.div>
                )}
            </motion.div>

            {/* Tooltip */}
            <motion.div
                className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded whitespace-nowrap pointer-events-none ${
                    isDark ? "bg-gray-700 text-white" : "bg-gray-800 text-white"
                }`}
                initial={{ opacity: 0, y: -5 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
            >
                {isDark ? "Mode clair" : "Mode sombre"}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;
