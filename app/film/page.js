"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Film() {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center py-20">
      <div className="max-w-4xl w-full mx-6 sm:mx-auto bg-black/30 backdrop-blur-lg border border-gray-700 shadow-lg shadow-yellow-500/30 rounded-lg p-8 relative">
        
        {/* TITRE */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-yellow-400 neon-text"
        >
          🎥 MOVIES 🎬
        </motion.h2>

        {/* DESCRIPTION */}
        <p className="mt-4 text-center text-gray-300">
          Site affichant les derniers films sortis au cinéma actuellement.
        </p>

        {/* IMAGE */}
        <div className="w-full flex justify-center mt-6">
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0px 4px 20px rgba(255, 255, 0, 0.5)" }}
            className="p-3 bg-black/40 rounded-lg shadow-lg"
          >
            <Image
              className="object-cover object-center rounded-md"
              src="/img/film.png"
              width={600}
              height={300}
              alt="Films en salle"
            />
          </motion.div>
        </div>

        {/* DÉTAILS */}
        <div className="mt-6 text-gray-300">
          <h3 className="text-xl font-bold text-yellow-400">📌 Détails</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><span className="font-semibold text-white">Type :</span> Devoir de classe</li>
            <li><span className="font-semibold text-white">Date :</span> Avril 2023</li>
            <li><span className="font-semibold text-white">Client :</span> Vincent Kpaclo</li>
            <li><span className="font-semibold text-white">Technologies :</span> HTML, CSS, JavaScript, API</li>
          </ul>
        </div>

        {/* LIEN VERS LE SITE */}
        <div className="mt-6 text-center">
          <a
            href="https://splendid-belekoy-9b964e.netlify.app/"
            target="_blank"
            className="text-lg font-bold text-yellow-400 hover:text-yellow-600 transition-all duration-300"
          >
            🍿 Voir le site
          </a>
        </div>

        {/* BOUTON RETOUR */}
        <div className="mt-8 flex justify-end">
          <Link href="/projet">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-yellow-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg"
            >
              🔙 Retour
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
