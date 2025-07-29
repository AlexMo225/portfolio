"use client";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    {
        value: 4,
        label: "Projets Réalisés",
        suffix: "+",
        icon: "🚀",
    },
    {
        value: 1,
        label: "Années d'Expérience",
        suffix: "+",
        icon: "⏰",
    },
    {
        value: 12,
        label: "Technologies Maîtrisées",
        suffix: "+",
        icon: "💻",
    },
    {
        value: 100,
        label: "Satisfaction Client",
        suffix: "%",
        icon: "⭐",
    },
];

const Counter = ({ value, suffix = "", duration = 2 }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000 });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [motionValue, isInView, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest) + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} />;
};

const StatsCounter = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-emerald-500 to-blue-600 text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        🎯 Quelques Chiffres
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto">
                        Mon parcours en développement web résumé en statistiques
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-6xl mb-4">{stat.icon}</div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">
                                <Counter
                                    value={stat.value}
                                    suffix={stat.suffix}
                                />
                            </div>
                            <p className="text-lg text-white/80">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCounter;
