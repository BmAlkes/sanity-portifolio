import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client";
import ImageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = ImageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

const SinglePost = () => {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[slug.current == '${slug}']{
            title,
            id,
            mainImage{
                asset->{
                    _id,url
                }
            },
            body,
            "name":author ->name,
            "authorImage": author -> image
        }`
            )
            .then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, []);
    if (!singlePost) return <div>Loading...</div>;
    return (
        <main className="bg-gray-200 min-h-screen pt-12">
            <article className="container shadow-lg mx-auto bg-blue-100 rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-start p-8">
                        <div className="bg-white bg-opacity-75 rounded p-12">
                            <h1 className="cursive text-3xl lg:text-6xl mb-4">
                                {singlePost.title}
                            </h1>
                            <div className="flex justify-center text-gray-800">
                                <img
                                    src={urlFor(singlePost.authorImage).url()}
                                    alt={singlePost.name}
                                />
                            </div>
                            <p className="cursive flex items-center pl-2 text-2xl">
                                {singlePost.name}
                            </p>
                        </div>
                    </div>
                    <img
                        src={singlePost.mainImage.asset.url}
                        alt={singlePost.title}
                        className="w-full object-cover rounded-t"
                        style={{ height: "400px" }}
                    />
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose-xl max-w-full">
                    <BlockContent
                        blocks={singlePost.body}
                        projectId="z1hu32y7"
                        dataset="production"
                    />
                </div>
            </article>
        </main>
    );
};

export default SinglePost;
