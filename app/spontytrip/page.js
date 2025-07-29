"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiGithub,
    FiExternalLink,
    FiArrowLeft,
    FiPlay,
    FiMaximize2,
    FiX,
} from "react-icons/fi";
import dynamic from "next/dynamic";
import { useState, useRef } from "react";

const NoSSR = dynamic(() => Promise.resolve(({ children }) => children), {
    ssr: false,
});

export default function SpontyTrip() {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const technologies = [
        { name: "React", color: "bg-blue-500/10 text-blue-400" },
        { name: "API", color: "bg-green-500/10 text-green-400" },
        { name: "Tailwind", color: "bg-cyan-500/10 text-cyan-400" },
        { name: "Firebase", color: "bg-yellow-500/10 text-yellow-400" },
    ];

    const handleVideoPlay = () => {
        if (videoRef.current) {
            if (isVideoPlaying) {
                videoRef.current.pause();
                setIsVideoPlaying(false);
            } else {
                videoRef.current.play();
                setIsVideoPlaying(true);
            }
        }
    };

    const openVideoModal = () => {
        setIsVideoModalOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
        document.body.style.overflow = "auto";
        if (videoRef.current) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
    };

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
                            href="https://github.com/AlexMo225/sponty-trip"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FiGithub className="text-2xl" />
                        </a>
                        <a
                            href="https://spontytriplp.netlify.app"
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
                                ✈️ Sponty Trip
                            </h1>
                            <p className="mt-4 text-center text-gray-300 text-lg max-w-2xl mx-auto">
                                Une plateforme moderne de planification de
                                voyages spontanés et d'organisation
                                d'itinéraires.
                            </p>
                        </motion.div>

                        {/* Image de couverture Sponty Trip */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="mt-12 mb-8 relative max-w-4xl mx-auto"
                        >
                            <div className="relative group">
                                {/* Effet de glow en arrière-plan */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Image principale */}
                                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/img/sponty.png"
                                        alt="Sponty Trip - Interface de l'application"
                                        width={1200}
                                        height={675}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                        priority
                                    />

                                    {/* Overlay avec label */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4">
                                            <div className="bg-emerald-500/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-lg">
                                                🖼️ Interface Application
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Vidéo de démonstration */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-8 relative max-w-4xl mx-auto"
                        >
                            <div className="relative rounded-xl overflow-hidden group bg-black shadow-2xl">
                                {/* Vidéo principale */}
                                <video
                                    ref={videoRef}
                                    className="w-full h-auto object-cover"
                                    poster="/img/spps.png"
                                    onPlay={() => setIsVideoPlaying(true)}
                                    onPause={() => setIsVideoPlaying(false)}
                                    controls={false}
                                    preload="metadata"
                                >
                                    <source
                                        src="/assets/RPReplay_Final1751628560.mp4"
                                        type="video/mp4"
                                    />
                                    Votre navigateur ne supporte pas la vidéo
                                    HTML5.
                                </video>

                                {/* Overlay avec contrôles personnalisés */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    {/* Bouton Play/Pause central */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <motion.button
                                            onClick={handleVideoPlay}
                                            className="bg-emerald-500/90 hover:bg-emerald-500 text-white p-6 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <FiPlay
                                                className={`text-3xl ml-1 transition-opacity duration-300 ${
                                                    isVideoPlaying
                                                        ? "opacity-0"
                                                        : "opacity-100"
                                                }`}
                                            />
                                        </motion.button>
                                    </div>

                                    {/* Bouton plein écran */}
                                    <div className="absolute top-4 right-4">
                                        <motion.button
                                            onClick={openVideoModal}
                                            className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-lg backdrop-blur-sm transition-all duration-300"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FiMaximize2 className="text-lg" />
                                        </motion.button>
                                    </div>

                                    {/* Label démonstration */}
                                    <div className="absolute bottom-4 left-4">
                                        <div className="bg-emerald-500/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-lg">
                                            🎥 Démonstration Interactive
                                        </div>
                                    </div>

                                    {/* Indicateur de lecture */}
                                    {isVideoPlaying && (
                                        <div className="absolute top-4 left-4">
                                            <div className="flex items-center space-x-2 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                                <span>En lecture</span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Description et statistiques vidéo */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="mt-6 space-y-4"
                            >
                                <div className="text-center">
                                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                                        📱 Découvrez Sponty Trip en action !
                                        Cliquez pour voir la démonstration
                                        complète.
                                    </p>
                                </div>

                                {/* Statistiques de la vidéo */}
                                <div className="flex flex-wrap justify-center gap-4 mt-4">
                                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-emerald-500">
                                            🎬
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            Démonstration
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-500">
                                            Interactive
                                        </div>
                                    </div>

                                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-blue-500">
                                            📱
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            Mobile
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-500">
                                            Responsive
                                        </div>
                                    </div>

                                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-lg text-center">
                                        <div className="text-2xl font-bold text-purple-500">
                                            ⚡
                                        </div>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">
                                            Performance
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-500">
                                            Optimisée
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
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
                                            <span>Avril 2025</span>
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
                                        <span>Checklist collaborative</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-400">
                                            •
                                        </span>
                                        <span>Gestion des dépenses</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-400">
                                            •
                                        </span>
                                        <span>Suggestions de destination</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-emerald-400">
                                            •
                                        </span>
                                        <span>Notes collaboratives</span>
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
                                href="https://spontytriplp.netlify.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/25 cursor-pointer z-20"
                            >
                                <FiExternalLink className="text-xl" />
                                <span>Voir la Landing page</span>
                            </motion.a>
                        </motion.div>
                    </div>
                </NoSSR>

                {/* Modal vidéo plein écran */}
                <AnimatePresence>
                    {isVideoModalOpen && (
                        <>
                            {/* Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                                onClick={closeVideoModal}
                            >
                                {/* Modal Container */}
                                <motion.div
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.5, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative w-full max-w-6xl mx-auto"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {/* Bouton fermer */}
                                    <button
                                        onClick={closeVideoModal}
                                        className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors z-10"
                                    >
                                        <FiX className="text-3xl" />
                                    </button>

                                    {/* Vidéo en plein écran */}
                                    <div className="relative rounded-lg overflow-hidden shadow-2xl">
                                        <video
                                            className="w-full h-auto max-h-[80vh] object-contain bg-black"
                                            controls
                                            autoPlay
                                            poster="/img/spps.png"
                                            controlsList="nodownload"
                                        >
                                            <source
                                                src="/assets/RPReplay_Final1751628560.mp4"
                                                type="video/mp4"
                                            />
                                            Votre navigateur ne supporte pas la
                                            vidéo HTML5.
                                        </video>

                                        {/* Gradient overlay pour une meilleure lisibilité */}
                                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                                    </div>

                                    {/* Informations sous la vidéo */}
                                    <div className="mt-4 text-center text-white">
                                        <h3 className="text-2xl font-bold mb-2">
                                            ✈️ Sponty Trip - Démonstration
                                        </h3>
                                        <p className="text-gray-300">
                                            Explorez toutes les fonctionnalités
                                            de l'application de voyage
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
