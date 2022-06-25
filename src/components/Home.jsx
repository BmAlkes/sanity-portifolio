import React from "react";
import image from "../roman-syy.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="programming"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-8xl text-white font-bold cursive leading-none lg:leading-snug home-name">
          Hello Im, Bruno...
        </h1>
      </section>
    </main>
  );
};

export default Home;
