import React from "react";
import Header from "./../../components/Resume builder/Header.jsx";
import ExperienceList from "./../../components/Resume builder/ExperienceList.jsx";
import Footer from "./../../components/Resume builder/Footer.jsx";
import Preview from "./../../components/Resume builder/Preview.jsx";
import screenShot from "./../../utils/htmltoImage.jsx";
import "./../../style.css";
import { NavLink } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/20/solid";
import { nanoid } from "nanoid";

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

  function addExperience() {
    const newExperienceData = [...experienceData]; //ny lista, kopia av gamla experienceData
    newExperienceData.push(
      //lägg in ett nytt, tomt objekt sist i listan, med nytt id
      {
        id: nanoid(),
        data: {
          fromPeriod: "",
          toPeriod: "",
          companyName: "",
          city: "",
          tasks: "",
        },
      }
    );
    setExperienceData(
      newExperienceData //set state till den b listan
    );
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
      <div className="md:mx-48 flex-col">
        <button
          className="md:mt-4 relative w-full md:w-20 items-center rounded-md bg-button px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-button hover:bg-darker"
          onClick={toggle}
        >
          {togglePreview ? "Edit" : "Preview"}
        </button>

        {togglePreview && (
          <button
            onClick={screenShot}
            className="md:ml-2 md:mt-4 md:w-24 relative w-full items-center rounded-md bg-green px-3 py-2 text-sm font-semibold text-gray-900  ring-green hover:bg-darkergreen"
          >
            Download
          </button>
        )}
      </div>
      {togglePreview ? (
        <Preview data={experienceData} addExperience={addExperience} />
      ) : (
        <ExperienceList
          data={experienceData}
          setExperienceData={setExperienceData}
          addExperience={addExperience}
        />
      )}
      <Footer />
    </div>
  );
}
