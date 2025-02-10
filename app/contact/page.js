"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, 
  FaCheckCircle, FaTimesCircle, FaUser, FaPaperPlane 
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(result.message || "Une erreur est survenue, réessayez.");
      }
    } catch {
      setError("Une erreur est survenue, réessayez.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6 relative">
      {/* Déco en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-black opacity-40 blur-3xl"></div>

      {/* Contenu principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-900 max-w-4xl w-full p-8 rounded-xl shadow-xl border border-gray-700 relative z-10"
      >
        <h2 className="text-4xl font-extrabold text-center text-white mb-8">
          Contactez-moi
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Formulaire */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Champ Nom */}
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-green-400 text-xl" />
              <input
                type="text"
                name="name"
                placeholder="Nom"
                className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Champ Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-green-400 text-xl" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Champ Message */}
            <div className="relative">
              <FaPaperPlane className="absolute left-3 top-3 text-green-400 text-xl" />
              <textarea
                name="message"
                placeholder="Votre message..."
                rows="4"
                className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Bouton Submit */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/50"
              disabled={loading}
            >
              {loading ? "Envoi..." : "Envoyer"}
            </motion.button>
          </motion.form>

          {/* Infos de contact */}
          <motion.div 
            className="space-y-6 text-white"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-green-400 text-2xl" />
              <div>
                <p className="font-semibold">Adresse</p>
                <p className="text-gray-400">Votre adresse ici</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhone className="text-green-400 text-2xl" />
              <div>
                <p className="font-semibold">Téléphone</p>
                <p className="text-gray-400">0766167789</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-green-400 text-2xl" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-400">alexmorel1999@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Messages de succès ou d'erreur */}
        <div className="mt-6">
          {success && (
            <motion.div 
              className="flex items-center bg-green-500 text-white p-3 rounded-lg animate-fadeIn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <FaCheckCircle className="mr-2" /> Message envoyé avec succès !
            </motion.div>
          )}
          {error && (
            <motion.div 
              className="flex items-center bg-red-500 text-white p-3 rounded-lg animate-fadeIn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <FaTimesCircle className="mr-2" /> {error}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
