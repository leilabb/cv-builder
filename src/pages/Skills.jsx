import React from "react";
import aboutImg from "./../assets/about-img.jpg";
import wp from "./../assets/devtools/wp.png";
import github from "./../assets/devtools/github.png";
import js from "./../assets/devtools/js.png";
import mongo from "./../assets/devtools/mongodb.png";
import react from "./../assets/devtools/react.png";
import svelte from "./../assets/devtools/svelte.png";
import tailwind from "./../assets/devtools/tailwind.png";
import typescript from "./../assets/devtools/typescript.png";
import node from "./../assets/devtools/node.png";

export default function Skills() {
  return (
    <div className="flex items-center px-16 pb-10 justify-center bg-background">
      {" "}
      <div className="flex flex-col w-1/2 px-4">
        {" "}
        <div className="text-4xl flex font-medium">
          <a id="about-me">About me</a>
        </div>
        <img
          src={aboutImg}
          className="w-64 h-56 border rounded-full border-black"
        />
        <p className="mt-4 flex-col">
          I'm from Sweden but I currently live in the South of Spain. I have a
          Bachelors Degree in Computer Science. I speak six languages fluently.
          The last few years I have been working with CRM/marketing and
          e-commerce at the airline Scandinavian Airlines and the Swedish
          newspaper Aftonbladet.
        </p>
      </div>
      <div className="w-1/2 px-4">
        <div className="text-4xl font-medium">Skills & Projects</div>

        <p className="mt-4 flex-col">
          I have worked as both front-end and fullstack. I also have some of my
          own projects.
        </p>
        <div className="flex flex-col md:flex-row mt-10  gap-x-3">
          <img
            className="w-12 h-12 hover:animate-bounce"
            title="Wordpress"
            src={wp}
          />
          <img
            className="w-12 h-12 hover:animate-bounce"
            title="Github"
            src={github}
          />
          <img
            className="w-12 h-12 hover:animate-bounce"
            title="Javascript"
            src={js}
          />
          <img
            className="w-12 h-12 hover:animate-bounce"
            title="MongoDb"
            src={mongo}
          />
          <img
            className="w-12 h-12 hover:animate-bounce"
            title="TypeScript"
            src={typescript}
          />
          <img
            className="w-12 h-12 hover:animate-bounce"
            title="Tailwind"
            src={tailwind}
          />
          <img
            className="w-12 h-12 hover:animate-bounce"
            title="SvelteKit"
            src={svelte}
          />
          <img
            className="w-12 h-12 hover:animate-bounce"
            title="React"
            src={react}
          />
          <img
            className="w-12 h-12 hover:animate-bounce"
            title="Node"
            src={node}
          />
        </div>
      </div>
    </div>
  );
}
