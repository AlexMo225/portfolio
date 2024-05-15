import dbConnect from "@/lib/mongoose.js";
import Project from "@/models/Project.js";

await dbConnect();

export async function generateStaticParams() {
    const projects = await Project.find({});
    return projects.map((project) => ({
        params: { category: project.category, slug: project.slug },
    }));
}

const Page = async ({ params }) => {
    const { category, slug } = params;
    const project = await Project.findOne({ slug, category });

    return (
        <>
            <h1>{project.title}</h1>
            <div>{project.text}</div>
        </>
    );
};

export default Page;
