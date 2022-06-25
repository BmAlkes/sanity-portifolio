import React, { useState, useEffect } from "react";
import sanityClient from "../client";

const Project = () => {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "project"]{
    title,
    date,
    mainImage{
      asset->{
          _id,url
      },
      alt
  },
    description,
    projectType,
    link,
    tags
  }`
            )
            .then((data) => setProjectData(data))
            .catch(console.error);
    }, []);

    return (
        <main className="bg-green-100 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">
                    My Projects
                </h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">
                    Welcome to my Projects page
                </h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData &&
                        projectData.map((project, index) => (
                            <article
                                className="relative rounded-lg shadow-xl bg-white p-17"
                                key={index}
                            >
                                <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-blue-500 flex justify-center">
                                    <a
                                        href={project.link}
                                        alt={project.title}
                                        target="_blank"
                                    >
                                        {project.title}
                                    </a>
                                </h3>
                                <div className="text-gray-500 text-xs space-x-4">
                                    <span className="flex justify-center font-bold">
                                        {project.projectType}
                                    </span>
                                    <p className="my-6 text-lg text-gray-600 leading-relaxed flex justify-center">
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="text-blue-500 hover:underline"
                                    >
                                        <img
                                            src={project.mainImage.asset.url}
                                            alt={project.mainImage.alt}
                                            className="w-full h-full rounded-r object-cover absolute opacity-90"
                                        />{" "}
                                    </a>
                                </div>
                            </article>
                        ))}
                </section>
            </section>
        </main>
    );
};

export default Project;
