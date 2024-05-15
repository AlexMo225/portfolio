'use server'

import { CldImage } from 'next-cloudinary'

import dbConnect from '@/lib/mongoose'
import 'tailwindcss/tailwind.css'
import ProjectModel from '@/models/Project'

export async function generateStaticParams() {
  await dbConnect()
  const projects = await ProjectModel.find({})
  return projects.map((project) => ({ slug: project.slug }))
}

const Page = async ({ params: { slug } }) => {
  const work = await ProjectModel.findOne({ slug })

  if (!work) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-gray-800">Work not found</h1>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {work.title}
          </h1>
          <p className="text-gray-600 mb-4">{work.texte}</p>
          <div className="flex items-center mb-4">
            <span className="text-gray-500">Slug:</span>
            <span className="ml-2 text-gray-800">{work.slug}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-500">SEO Description:</span>
            <span className="ml-2 text-gray-800">{work.description_seo}</span>
          </div>
          <div className="flex items-center mb-8">
            <span className="text-gray-500">SEO Title:</span>
            <span className="ml-2 text-gray-800">{work.title_seo}</span>
          </div>
          <div className="relative w-full h-72">
            <CldImage
              cloudName="your-cloud-name"
              publicId={work.imgId}
              width="600"
              height="432"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page