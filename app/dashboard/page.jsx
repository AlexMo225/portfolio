"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const Dashboard = () => {
    const { data: session, status } = useSession();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/projects");
            const data = await res.json();
            if (data.success) {
                setProjects(data.data); // Ajustez selon la structure de votre réponse
            }
        };

        fetchData();
    }, []);

    if (status === "loading") {
        return <p className="text-center text-lg">Chargement...</p>;
    }

    if (!session) {
        window.location.href = "/";
    }

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-center mb-10 text-black">
                Tableau de bord
            </h1>
            <Link href="/dashboard/new">
                <div className="inline-block mt-4 px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">
                    Ajouter un projet
                </div>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <div
                            key={project._id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <div className="p-5">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                                    Titre: {project.titre}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Slug: {project.slug}
                                </p>
                                <p className="text-gray-500 mb-4">
                                    Texte: {project.texte}
                                </p>
                                <p className="text-gray-400 mb-2">
                                    Desc SEO: {project.description_seo}
                                </p>
                                <p className="text-gray-400">
                                    Titre SEO: {project.title_seo}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="col-span-3 text-center text-lg text-black">
                        Aucun projet à afficher.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
