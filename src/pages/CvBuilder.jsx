import React from "react";
import Header from "../components/Header";
import Experience from "../components/Experience";
import Preview from "../components/Preview";
import { nanoid } from "nanoid";
import "../style.css";
import { NavLink } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/20/solid";

export default function CvBuilder() {
  //initialize state from whatever is stored in localstorage. if there is nothing in localstorage: return object with empty data but a new id.
  const [experienceData, setExperienceData] = React.useState(
    JSON.parse(localStorage.getItem("experiences")) || []
  );

  const [togglePreview, setTogglePreview] = React.useState(
    localStorage.getItem("toggle") || false
  );

  function toggle() {
    setTogglePreview((prevToggleState) => !prevToggleState);
  }

  //så state sparas i localstorage mellan reloads
  React.useEffect(() => {
    localStorage.setItem("experiences", JSON.stringify(experienceData));
    localStorage.setItem("toggle", togglePreview);
  }, [experienceData, togglePreview]);

  //updates state with input of that particular component (with help of ID from event)
  function onChange(event) {
    const { name } = event.target; //destructure event

    const updatedExperienceData = experienceData.map((experience) => {
      return experience.id === event.target.id
        ? {
            ...experience,
            data: {
              ...experience.data,
              [name]: event.target.value,
            },
          }
        : experience; // else return experience
    });
    setExperienceData(updatedExperienceData);
  }

  return (
    <div className="w-screen">
      <div className="md:mx-40">
        <NavLink
          className={({ isActive }) => (isActive ? "hidden" : "md:mr-2 ")}
          to="/"
        >
          <button className="relative w-full h-full md:w-20 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <HomeIcon className="h-4 md:-mt[4px] -mt-[3px] w-4 inline-flex " />
            <span>Home</span>
          </button>
        </NavLink>
      </div>
      <Header />
      <div className="md:mx-48">
        <button
          className="md:mt-4 relative w-full md:w-20 items-center rounded-md bg-button px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-button hover:bg-darker"
          onClick={toggle}
        >
          {togglePreview ? "Edit" : "Preview"}
        </button>
      </div>
      {togglePreview && (
        <Preview
          togglePreview={togglePreview}
          onClick={toggle}
          data={experienceData}
        />
      )}
      {!togglePreview && (
        <Experience updateData={setExperienceData} data={experienceData} />
      )}
      <p className="footer-text mt-12 ">CV Builder by Leila ©</p>
    </div>
  );
}
