// /pages/api/projects.js
import dbConnect from "@/lib/mongoose";
import Project from "@/models/Project";

export default async function handler(req, res) {
    const { method, body } = req;

    try {
        const connection = await dbConnect();
        if (!connection) {
            return res.status(503).json({
                success: false,
                error: "Database not available",
            });
        }
    } catch (error) {
        console.error("Database connection error:", error);
        return res.status(503).json({
            success: false,
            error: "Database connection failed",
        });
    }

    if (method === "POST") {
        try {
            const project = await Project.create(body); // creer un projet
            res.status(201).json({ success: true, data: project });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    }

    if (method === "GET") {
        try {
            const projects = await Project.find({}); // Récupère tous les projets
            res.status(200).json({ success: true, data: projects });
        } catch (error) {
            res.status(400).json({
                success: false,
                error: "Impossible de récupérer les projets",
            });
        }
    }
}
