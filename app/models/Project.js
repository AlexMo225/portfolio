// /models/Project.js
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        titre: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        texte: { type: String, required: true },
        description_seo: { type: String, required: true },
        title_seo: { type: String, required: true },
    },
    { collection: "projects" }
);

const Project =
    mongoose.models.projects || mongoose.model("projects", projectSchema);

export default Project;
