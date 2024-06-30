'use client'
import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
    return (
        <>
            <main className="bg-black p-6 lg:p-20 min-h-screen">
                <section className="hero-section py-8 lg:py-16">
                    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                        <div className="content text-center lg:text-left max-w-lg lg:max-w-md mb-12 lg:mb-0">
                            <h1 className="text-4xl text-white lg:text-7xl font-bold mb-4 text-white-900">
                                Alex Morel
                                <span className="text-green-500 font-bold">
                                    {" "}
                                    SAHIE.
                                </span>
                            </h1>
                            <h2 className="text-2xl  text-white lg:text-[2.8rem] capitalize font-bold">
                                Je suis{" "}
                                <span style={{ color: "green", fontWeight: "bold" }}>
                                    <Typewriter
                                        words={[
                                            "Étudiant",
                                            "Developpeur Web",
                                            "Full Stack",
                                            "à Webstart Paris.",
                                        ]}
                                        loop={6}
                                        cursor
                                        cursorStyle="_"
                                        typeSpeed={150}
                                        deleteSpeed={70}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h2>
                            <p className="text-gray-400 py-6 max-w-md mx-auto lg:mx-0">
                                Je suis étudiant en développement web Full Stack. Étudiant enthousiaste, je suis actuellement plongé dans le monde fascinant de l'informatique à Webstart Paris. Mon parcours académique est une aventure stimulante où je découvre et apprends constamment de nouvelles technologies.
                            </p>
                            <div className="flex justify-center lg:justify-start space-x-4">
                                <a
                                    href="https://github.com/AlexMo225"
                                    className="hover:text-green-500 text-white text-2xl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-github"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/alex-morel-sahie-1a73911b4/"
                                    className="hover:text-green-500 text-white text-2xl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                        </div>
                        <div className="image pdp rounded-2xl">
                            <Image
                                className="avatar mx-auto lg:mx-0"
                                src="/img/mo.png"
                                width={400}
                                height={300}
                                alt="Alex Morel"
                                priority
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
