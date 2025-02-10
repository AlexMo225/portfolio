"use client";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { motion } from "framer-motion";

export default function Projet() {
  const projects = [
    {
      title: "Bienvenue sur la Terre",
      description: "Site API Météo",
      image: "v1717446005/portfolio/k2cbtaaipkbef0nccb0f.png",
      link: "/detail",
    },
    {
      title: "SPICE BLOOM",
      description: "Site E-commerce vente d'épices",
      image: "v1717446005/portfolio/dvdcdhwdo0rznrvdkpfk",
      link: "/details",
    },
    {
      title: "Ciné",
      description: "Site API Cinéma",
      image: "v1717446013/portfolio/pvs3e3fxudzmq7psrwuv.png",
      link: "/film",
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-10 py-16 relative">
      {/* Déco en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-black opacity-30 rounded-lg blur-3xl"></div>

      {/* TITRE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-center text-green-400 mb-14 relative z-10"
      >
        Mes Projets
      </motion.h2>

      {/* GRID DES PROJETS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {projects.map((project, index) => (
          <Link key={index} href={project.link} className="cursor-pointer">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-gray-800 p-6 rounded-xl shadow-lg group overflow-hidden border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0px_15px_40px_rgba(0,255,0,0.3)] cursor-pointer"
            >
              {/* Animation d'effet lumineux */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-900 opacity-10 group-hover:opacity-30 transition-opacity duration-300"></div>

              {/* IMAGE */}
              <CldImage
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/${project.image}`}
                alt={project.title}
                className="h-64 w-full object-cover object-center rounded-t-xl"
                width={300}
                height={200}
                priority
              />

              {/* TEXTE */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-gray-300">{project.description}</p>
              </div>

              {/* BOUTON (MAINTENANT CLIQUABLE) */}
              <div className="p-6 flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 shadow-lg hover:shadow-green-500/50 text-center"
                >
                  Voir détails
                </motion.div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}
