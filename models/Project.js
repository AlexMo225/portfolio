// /models/Project.js
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        slug: { type: String, required: true, unique: true },
        texte: { type: String, required: true },
        description_seo: { type: String, required: true },
        title_seo: { type: String, required: true },
    },
    { collection: "works" }
);

const Project =
    mongoose.models.projects || mongoose.model("works", projectSchema);

export default Project;
