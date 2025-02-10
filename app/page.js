"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      {/* SEO Dynamique */}
      <Head>
        <title>Portfolio | Alex Morel Sahie</title>
        <meta
          name="description"
          content="Portfolio d'Alex Morel Sahie, étudiant en développement web Full Stack."
        />
      </Head>

      {/* Contenu principal */}
      <main className="bg-black p-6 lg:p-20 min-h-screen flex items-center justify-center">
        <section className="container mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
          
          {/* Texte à gauche */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-white">
              Alex Morel <span className="text-green-500">SAHIE.</span>
            </h1>

            <h2 className="text-2xl lg:text-4xl font-bold mt-4 text-white">
              Je suis{" "}
              <span className="text-green-500 font-bold">
                <Typewriter
                  words={["Étudiant", "Développeur Web", "Full Stack", "à Webstart Paris."]}
                  loop={6}
                  cursor
                  cursorStyle="_"
                  typeSpeed={150}
                  deleteSpeed={70}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p className="text-gray-400 py-6 max-w-md mx-auto md:mx-0">
            Je suis étudiant en développement web Full Stack. Étudiant enthousiaste, je suis actuellement plongé dans le monde fascinant de l'informatique à Webstart Paris. Mon parcours académique est une aventure stimulante où je découvre et apprends constamment de nouvelles technologies.

            </p>

            {/* Boutons d'actions */}
            <div className="flex justify-center md:justify-start space-x-4">
              <Link
                href="/projet"
                className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Voir mes projets
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-800 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Me contacter
              </Link>
            </div>

            {/* Icônes réseaux */}
            <div className="mt-6 flex justify-center md:justify-start space-x-6">
              <Link
                href="https://github.com/AlexMo225"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github text-white text-2xl hover:text-green-500 transition-all"></i>
              </Link>
              <Link
                href="https://www.linkedin.com/in/alex-morel-sahie-1a73911b4/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin text-white text-2xl hover:text-green-500 transition-all"></i>
              </Link>
            </div>
          </div>

    
          <div className="flex justify-center">
            <Image
              className="rounded-lg shadow-lg max-w-full h-auto"
              src="/img/mo.png"
              width={400}
              height={400}
              alt="Alex Morel"
              priority
            />
          </div>
        </section>
      </main>
    </>
  );
}
