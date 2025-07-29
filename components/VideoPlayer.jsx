"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiMaximize2 } from "react-icons/fi";

const VideoPlayer = ({ 
    src, 
    poster, 
    className = "",
    showControls = true,
    autoPlay = false,
    onFullscreen
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showControlsOverlay, setShowControlsOverlay] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const updateTime = () => setCurrentTime(video.currentTime);
        const updateDuration = () => setDuration(video.duration);

        video.addEventListener('timeupdate', updateTime);
        video.addEventListener('loadedmetadata', updateDuration);
        video.addEventListener('play', () => setIsPlaying(true));
        video.addEventListener('pause', () => setIsPlaying(false));

        return () => {
            video.removeEventListener('timeupdate', updateTime);
            video.removeEventListener('loadedmetadata', updateDuration);
            video.removeEventListener('play', () => setIsPlaying(true));
            video.removeEventListener('pause', () => setIsPlaying(false));
        };
    }, []);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleProgressClick = (e) => {
        if (videoRef.current && duration) {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const newTime = (clickX / rect.width) * duration;
            videoRef.current.currentTime = newTime;
        }
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div 
            className={`relative group ${className}`}
            onMouseEnter={() => setShowControlsOverlay(true)}
            onMouseLeave={() => setShowControlsOverlay(false)}
        >
            <video
                ref={videoRef}
                className="w-full h-auto object-cover"
                poster={poster}
                autoPlay={autoPlay}
                muted={isMuted}
                onClick={togglePlay}
            >
                <source src={src} type="video/mp4" />
                Votre navigateur ne supporte pas la vidéo HTML5.
            </video>

            {/* Overlay avec contrôles */}
            {showControls && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showControlsOverlay || !isPlaying ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 transition-opacity duration-300"
                >
                    {/* Bouton Play/Pause central */}
                    {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.button
                                onClick={togglePlay}
                                className="bg-emerald-500/90 hover:bg-emerald-500 text-white p-6 rounded-full shadow-xl backdrop-blur-sm transition-all duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                            >
                                <FiPlay className="text-3xl ml-1" />
                            </motion.button>
                        </div>
                    )}

                    {/* Contrôles en bas */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        {/* Barre de progression */}
                        <div 
                            className="w-full h-1 bg-white/30 rounded-full mb-3 cursor-pointer"
                            onClick={handleProgressClick}
                        >
                            <div 
                                className="h-full bg-emerald-500 rounded-full transition-all duration-150"
                                style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                            />
                        </div>

                        {/* Boutons de contrôle */}
                        <div className="flex items-center justify-between text-white">
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={togglePlay}
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    {isPlaying ? <FiPause className="text-xl" /> : <FiPlay className="text-xl" />}
                                </button>
                                
                                <button
                                    onClick={toggleMute}
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    {isMuted ? <FiVolumeX className="text-xl" /> : <FiVolume2 className="text-xl" />}
                                </button>

                                <span className="text-sm">
                                    {formatTime(currentTime)} / {formatTime(duration)}
                                </span>
                            </div>

                            {onFullscreen && (
                                <button
                                    onClick={onFullscreen}
                                    className="hover:text-emerald-400 transition-colors"
                                >
                                    <FiMaximize2 className="text-xl" />
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default VideoPlayer; 