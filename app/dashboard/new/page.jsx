// app/dashboard/new/page.jsx
"use client";
import { useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const CreateProject = () => {
    const { data: session, status } = useSession();
    const [formData, setFormData] = useState({
        titre: "",
        slug: "",
        texte: "",
        description_seo: "",
        title_seo: "",
    });

    useEffect(() => {
        // Si l'utilisateur n'est pas connecté, rediriger vers la page d'accueil
        if (status !== "loading" && !session) {
            window.location.href = "/";
        }
    }, [session, status]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!session) {
            console.error("Vous devez être connecté pour créer un projet.");
            return;
        }
        try {
            const res = await fetch("/api/projects", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success) {
                // Réinitialisez le formulaire ou redirigez l'utilisateur
                setFormData({
                    titre: "",
                    slug: "",
                    texte: "",
                    description_seo: "",
                    title_seo: "",
                });
                window.location.href = "/dashboard";
            }
        } catch (error) {
            console.error("Erreur lors de l'ajout du projet", error);
        }
    };

    if (status === "loading") {
        return <p className="text-center text-lg">Chargement...</p>;
    }

    if (!session) {
        window.location.href = "/";
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
            <Link href="/dashboard">
                <div className="ml-5 inline-block mt-4 px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">
                    retour
                </div>
            </Link>
            <div className="max-w-md w-full mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-900">
                    Créer un nouveau projet
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="titre"
                        >
                            Titre du projet
                        </label>
                        <input
                            id="titre"
                            type="text"
                            name="titre"
                            value={formData.titre}
                            onChange={handleChange}
                            placeholder="Titre du projet"
                            required
                            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="slug"
                        >
                            Slug du projet
                        </label>
                        <input
                            id="slug"
                            type="text"
                            name="slug"
                            value={formData.slug}
                            onChange={handleChange}
                            placeholder="Slug du projet"
                            pattern="[a-z0-9-]+"
                            required
                            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="texte"
                        >
                            Texte du projet
                        </label>
                        <textarea
                            id="texte"
                            name="texte"
                            value={formData.texte}
                            onChange={handleChange}
                            placeholder="Texte du projet"
                            rows="3"
                            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="description_seo"
                        >
                            Description SEO
                        </label>
                        <input
                            id="description_seo"
                            type="text"
                            name="description_seo"
                            value={formData.description_seo}
                            onChange={handleChange}
                            placeholder="Description SEO"
                            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="title_seo"
                        >
                            Titre SEO
                        </label>
                        <input
                            id="title_seo"
                            type="text"
                            name="title_seo"
                            value={formData.title_seo}
                            onChange={handleChange}
                            placeholder="Titre SEO"
                            className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Soumettre
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateProject;
