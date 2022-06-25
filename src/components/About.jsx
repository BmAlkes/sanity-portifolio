import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import Image from "../react.jpg";
import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const About = () => {
    const builder = ImageUrlBuilder(sanityClient);
    function urlFor(source) {
        return builder.image(source);
    }

    const [author, setAuthor] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type =="author"]{
      name,
      bio,
      "authorImage":image.asset->url
    }`
            )
            .then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>;
    return (
        <main className="relative">
            <img
                src={Image}
                alt="react"
                className="absolute w-full h-full object-cover"
            />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-screen-800 rounded-lg shadow-2xl lg:flex p-20 bg-white opacity-75">
                    <img
                        src={urlFor(author.authorImage).url()}
                        alt=""
                        className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-blue-300 mb-4">
                            {" "}
                            Hey there.I'm {""}
                            <span className="text-blue-500">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text">
                            <BlockContent
                                blocks={author.bio}
                                projectId="z1hu32y7"
                                dataset="production"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default About;
