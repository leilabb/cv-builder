import React from "react";
export default function Contact() {
  return (
    <div className="flex items-center px-16 pb-10 justify-center bg-background">
      {" "}
      <div className="flex flex-col w-1/2 px-4 ">
        {" "}
        <div className="text-4xl mb-10 font-[UbuntuMono] flex items-center justify-center ">
          Intrigued? Want to know more?
        </div>
        <div className="text-xl font-[UbuntuMono] ">
          <a
            className="text-xl font-[UbuntuMono]  text-cyan-500"
            href="mailto:leila.benhalima2@gmail.com"
            target="_blank"
          >
            Send me an e-mail
          </a>{" "}
          or{" "}
          <a
            className="text-xl font-[UbuntuMono] text-cyan-500 "
            href="https://www.linkedin.com/in/leila-ben-halima/"
            target="_blank"
          >
            reach out on LinkedIn.{" "}
          </a>
          Or just like a portrait of mine on my{" "}
          <a
            className="text-xl font-[UbuntuMono]  text-cyan-500"
            href="https://www.instagram.com/art_and_such__/"
            target="_blank"
          >
            art instagram. {""}
          </a>
          Check out
          <a
            className="text-xl font-[UbuntuMono]  text-cyan-500"
            href="https://cv-app-9f8d7.web.app/assets/full-resume.pdf"
            target="_blank"
          >
            {""} my full resume.
          </a>
        </div>
      </div>
    </div>
  );
}
