"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiMaximize2, FiX } from "react-icons/fi";

const VideoShowcase = ({
    videoSrc,
    posterSrc,
    title,
    description,
    className = "",
}) => {
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

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
        <>
            <div className={`relative ${className}`}>
                <div className="relative rounded-xl overflow-hidden group bg-black shadow-2xl">
                    {/* Vidéo principale */}
                    <video
                        ref={videoRef}
                        className="w-full h-auto object-cover"
                        poster={posterSrc}
                        onPlay={() => setIsVideoPlaying(true)}
                        onPause={() => setIsVideoPlaying(false)}
                        controls={false}
                        preload="metadata"
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo HTML5.
                    </video>

                    {/* Overlay avec contrôles */}
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

                {/* Description */}
                {description && (
                    <div className="mt-4 text-center">
                        <p className="text-gray-600 dark:text-gray-400">
                            {description}
                        </p>
                    </div>
                )}
            </div>

            {/* Modal vidéo plein écran */}
            <AnimatePresence>
                {isVideoModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={closeVideoModal}
                    >
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
                                    poster={posterSrc}
                                    controlsList="nodownload"
                                >
                                    <source src={videoSrc} type="video/mp4" />
                                    Votre navigateur ne supporte pas la vidéo
                                    HTML5.
                                </video>
                            </div>

                            {/* Informations sous la vidéo */}
                            {title && (
                                <div className="mt-4 text-center text-white">
                                    <h3 className="text-2xl font-bold mb-2">
                                        {title}
                                    </h3>
                                    {description && (
                                        <p className="text-gray-300">
                                            {description}
                                        </p>
                                    )}
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default VideoShowcase;
