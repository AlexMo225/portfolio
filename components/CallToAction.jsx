"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiMail, FiDownload } from "react-icons/fi";

const CallToAction = () => {
    return (
        <section className="py-20 bg-gray-900 dark:bg-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-blue-500/20"></div>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Prêt à collaborer ? 🚀
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                        Transformons vos idées en projets web exceptionnels. Je
                        suis disponible pour des opportunités de stage, projets
                        freelance ou collaboration.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
                            >
                                <FiMail className="text-xl" />
                                Me Contacter
                                <FiArrowRight className="text-xl" />
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/assets/cv.pdf"
                                target="_blank"
                                className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full transition-all duration-300"
                            >
                                <FiDownload className="text-xl" />
                                Télécharger CV
                            </Link>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-12 flex justify-center space-x-8"
                    >
                        <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-400">
                                ⚡
                            </div>
                            <p className="text-sm text-gray-400">
                                Réponse rapide
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-400">
                                🎯
                            </div>
                            <p className="text-sm text-gray-400">
                                Solutions sur mesure
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-400">
                                🚀
                            </div>
                            <p className="text-sm text-gray-400">
                                Livraison qualité
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallToAction;
